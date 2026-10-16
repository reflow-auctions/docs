// Reads docs/ into { section folder: [page slugs] } (sorted by file name),
// and sidebar.yml into its list of sections. Shared by sidebars.js and the
// content check.
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

export function readDocsTree(root = process.cwd()) {
  const docsDir = path.join(root, 'docs');
  const tree = {};
  for (const section of fs.readdirSync(docsDir).sort()) {
    const dir = path.join(docsDir, section);
    if (!fs.statSync(dir).isDirectory()) continue;
    tree[section] = fs.readdirSync(dir)
      .filter((f) => /\.mdx?$/.test(f))
      .map((f) => f.replace(/\.mdx?$/, ''))
      .sort();
  }
  return tree;
}

export function readSidebarOrder(root = process.cwd()) {
  const file = path.join(root, 'sidebar.yml');
  if (!fs.existsSync(file)) return [];
  const data = yaml.load(fs.readFileSync(file, 'utf8'));
  return Array.isArray(data) ? data : [];
}
