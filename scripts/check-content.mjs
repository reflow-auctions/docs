// CI guard for content rules the Docusaurus build can't enforce.
// Usage: node scripts/check-content.mjs   (exits 1 on any problem)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const MANTLE = /heymantle\.com|mantledocs\.com/i;
const TEXT_EXT = /\.(md|mdx|js|mjs|cjs|json|ya?ml|css|html|txt|xml|svg)$/i;
const SCAN = ['docs', 'releases', 'src', 'static', 'docusaurus.config.js', 'sidebars.js', '.pages.yml'];
const YOUTUBE_LINE = /^\s*::youtube\b/;
const YOUTUBE_OK = /^\s*::youtube(\[[^\]]*\])?\{\s*(#|id=")[A-Za-z0-9_-]{11}"?\s*\}\s*$/;

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
          problems.push(`${file}:${i + 1}: ::youtube needs an 11-character video id, e.g. ::youtube[Title]{#S9Yjatw2Jdo}`);
        }
      });
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
  const problems = findProblems(files);
  for (const p of problems) console.error(`✗ ${p}`);
  console.log(problems.length ? `${problems.length} problem(s)` : `✓ ${files.length} files OK`);
  process.exit(problems.length ? 1 : 0);
}
