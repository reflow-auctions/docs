// CI guard for content rules the Docusaurus build can't enforce.
// Usage: node scripts/check-content.mjs   (exits 1 on any problem)
import fs from 'node:fs';
import path from 'node:path';
import { sidebarProblems } from './sidebar.mjs';
import { readDocsTree, readSidebarOrder } from './docs-tree.mjs';

const ROOT = process.cwd();
const MANTLE = /heymantle\.com|mantledocs\.com/i;
const TEXT_EXT = /\.(md|mdx|js|mjs|cjs|json|ya?ml|css|html|txt|xml|svg)$/i;
const SCAN = ['docs', 'releases', 'src', 'static', 'docusaurus.config.js', 'sidebars.js', 'sidebar.yml', '.pages.yml'];
const YOUTUBE_LINE = /^\s*::youtube\b/;
// Editor-safe form only: ::youtube{#ID title="Title"} (title optional).
const YOUTUBE_OK = /^::youtube\{\s*(#|id=")[A-Za-z0-9_-]{11}"?(\s+title="[^"]*")?\s*\}\s*$/;
const YOUTUBE_HINT = '::youtube needs the form ::youtube{#VIDEO_ID title="Title"} with an 11-character video id';
const LIST_HINT = 'put step content under a "#### N. Title" heading, not indented inside a numbered list (Pages CMS shifts it on every save)';

/**
 * Line numbers (1-based) of content that Pages CMS's rich-text editor
 * re-indents on every save: inside a numbered-list item, an indented image,
 * an indented ::: callout, or a second indented paragraph. A single
 * continuation paragraph and nested bullets are stable and allowed.
 */
function driftingListLines(content) {
  const hits = [];
  let inFence = false;
  let inItem = false;
  let paras = 0;
  let prevBlank = false;
  content.split('\n').forEach((line, i) => {
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; prevBlank = false; return; }
    if (inFence) return;
    if (/^\d+\.\s/.test(line)) { inItem = true; paras = 0; prevBlank = false; return; }
    if (line.trim() === '') { prevBlank = true; return; }
    if (!/^\s{2,}/.test(line)) { inItem = false; prevBlank = false; return; }
    if (inItem) {
      const text = line.trim();
      if (/^!\[/.test(text) || /^:::/.test(text)) {
        if (!/^:::\s*$/.test(text)) hits.push(i + 1);
      } else if (prevBlank && !/^([-*+]|\d+\.)\s/.test(text)) {
        paras += 1;
        if (paras > 1) hits.push(i + 1);
      }
    }
    prevBlank = false;
  });
  return hits;
}

function walk(p) {
  if (!fs.existsSync(p)) return [];
  if (fs.statSync(p).isFile()) return [p];
  return fs.readdirSync(p).flatMap((n) => walk(path.join(p, n)));
}

/** Pure check over [{file, content}]; returns a list of problem strings. */
export function findProblems(files) {
  const problems = [];
  for (const { file, content } of files) {
    if (TEXT_EXT.test(file) && MANTLE.test(content)) problems.push(`${file}: references Mantle`);
    if (/\.mdx?$/.test(file)) {
      content.split('\n').forEach((line, i) => {
        if (YOUTUBE_LINE.test(line) && !YOUTUBE_OK.test(line)) {
          problems.push(`${file}:${i + 1}: ${YOUTUBE_HINT}`);
        }
      });
      for (const n of driftingListLines(content)) problems.push(`${file}:${n}: ${LIST_HINT}`);
    }
    if (/^releases\/[^/]+\.md$/.test(file)) {
      const fm = /^---\n([\s\S]*?)\n---/.exec(content)?.[1] ?? '';
      const title = /^title:\s*"?([^"\n]+)"?\s*$/m.exec(fm)?.[1];
      const date = /^date:\s*"?([^"\n]+)"?\s*$/m.exec(fm)?.[1];
      const name = path.basename(file, '.md');
      if (!/^v\d+\.\d+\.\d+$/.test(title ?? '')) problems.push(`${file}: title must look like v1.2.3 (got ${title})`);
      else if (name !== title) problems.push(`${file}: file name must be ${title}.md`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date ?? '')) problems.push(`${file}: date must be YYYY-MM-DD (got ${date})`);
    }
  }
  return problems;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const files = SCAN.flatMap((p) => walk(path.join(ROOT, p))).map((abs) => ({
    file: path.relative(ROOT, abs).split(path.sep).join('/'),
    content: TEXT_EXT.test(abs) ? fs.readFileSync(abs, 'utf8') : '',
  }));
  const problems = [...findProblems(files), ...sidebarProblems(readSidebarOrder(ROOT), readDocsTree(ROOT))];
  for (const p of problems) console.error(`✗ ${p}`);
  console.log(problems.length ? `${problems.length} problem(s)` : `✓ ${files.length} files OK`);
  process.exit(problems.length ? 1 : 0);
}
