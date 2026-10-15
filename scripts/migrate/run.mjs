// One-off migration: Mantle -> Docusaurus. Run from repo root:
//   node scripts/migrate/run.mjs
// Writes docs/, releases/, static/img/docs/ and .design/migration-report.md.
import fs from 'node:fs/promises';
import path from 'node:path';
import { convertHtml } from './convert.mjs';
import { splitReleases } from './releases.mjs';
import { parseNav, parsePage, frontMatter, imageFileName } from './site.mjs';

const BASE = 'https://reflow.mantledocs.com';
const UA = { 'User-Agent': 'Mozilla/5.0 (reflow docs migration)' }; // Mantle 403s default agents
const RELEASES_PATH = '/resources/release-notes';
const ROOT = process.cwd();

async function get(url) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res;
}
const text = async (url) => (await get(url)).text();

async function write(rel, data) {
  const file = path.join(ROOT, rel);
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, data);
}

const report = { notion: [], boldOnly: [], deadLinks: [], videos: [], images: 0, pages: 0, releases: 0 };
let knownPaths = new Set();

// Optional map of Mantle-hosted file name -> new URL (e.g. YouTube), filled in
// by the owner after re-uploading: {"Buyers_20Fee_Product.mp4": "https://youtu.be/…"}
const VIDEO_MAP_FILE = path.join(ROOT, 'scripts/migrate/video-links.json');
const videoMap = await fs.readFile(VIDEO_MAP_FILE, 'utf8').then(JSON.parse, () => ({}));
const ASSET_ARCHIVE = path.join(ROOT, '.mantle-assets'); // gitignored local copies

/** Convert HTML, downloading images into static/img/docs/<section>/. */
async function convertWithImages(html, section, slug, slugToPath, mdFile) {
  const queue = [];
  const assets = [];
  const md = convertHtml(html, {
    slugToPath,
    knownPaths,
    resolveAsset: (href) => {
      const name = decodeURIComponent(href.split('/').pop());
      assets.push({ href, name });
      return videoMap[name] || null;
    },
    onDeadLink: (href) => report.deadLinks.push(`${mdFile}: ${href}`),
    resolveImage: (src) => {
      const name = imageFileName(slug, queue.length + 1, src);
      queue.push({ src, rel: `static/img/docs/${section}/${name}` });
      return `/img/docs/${section}/${name}`;
    },
  });
  for (const { src, rel } of queue) {
    await write(rel, Buffer.from(await (await get(src)).arrayBuffer()));
    report.images++;
  }
  for (const { href, name } of assets) {
    const file = path.join(ASSET_ARCHIVE, name);
    const have = await fs.stat(file).then(() => true, () => false);
    if (!have) {
      await fs.mkdir(ASSET_ARCHIVE, { recursive: true });
      await fs.writeFile(file, Buffer.from(await (await get(href)).arrayBuffer()));
    }
    report.videos.push(`${mdFile}: ${name} → ${videoMap[name] || 'UNLINKED (add to scripts/migrate/video-links.json)'}`);
  }
  for (const m of md.matchAll(/\((https:\/\/www\.notion\.so\/[^)\s]+)\)/g)) report.notion.push(`${mdFile}: ${m[1]}`);
  if (mdFile.startsWith('releases/')) {
    for (const m of md.matchAll(/^\*\*[^*\n]+\*\*$/gm)) report.boldOnly.push(`${mdFile}: ${m[0]}`);
  }
  return md;
}

async function main() {
  const nav = parseNav(await text(`${BASE}/quick-start/welcome`));
  const navPaths = nav.flatMap((g) => g.pages.map((p) => p.path)).sort();
  const sitemap = [...(await text(`${BASE}/sitemap.xml`)).matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname).sort();
  if (JSON.stringify(navPaths) !== JSON.stringify(sitemap)) {
    throw new Error(`Nav and sitemap differ:\nnav=${navPaths}\nsitemap=${sitemap}`);
  }
  const slugToPath = Object.fromEntries(nav.flatMap((g) => g.pages.map((p) => [p.slug, p.path])));
  knownPaths = new Set([...navPaths.filter((p) => p !== RELEASES_PATH), '/releases']);

  for (const [gi, group] of nav.entries()) {
    await write(`docs/${group.section}/_category_.json`,
      JSON.stringify({ label: group.label, position: gi + 1 }, null, 2) + '\n');

    for (const [pi, page] of group.pages.entries()) {
      const html = await text(BASE + page.path);
      const { title, description, contentHtml } = parsePage(html);

      if (page.path === RELEASES_PATH) {
        for (const r of splitReleases(contentHtml)) {
          const file = `releases/${r.version}.md`;
          const body = await convertWithImages(r.html, 'releases', r.version.replace(/\./g, '-'), slugToPath, file);
          await write(file, frontMatter({ title: r.version, date: r.date }) + body);
          report.releases++;
        }
        continue;
      }

      const file = `docs/${group.section}/${page.slug}.md`;
      const body = await convertWithImages(contentHtml, group.section, page.slug, slugToPath, file);
      await write(file, frontMatter({
        title,
        sidebar_label: page.label !== title ? page.label : undefined,
        sidebar_position: pi + 1,
        description,
      }) + body);
      report.pages++;
      console.log(`✓ ${file}`);
    }
  }

  const list = (xs) => (xs.length ? xs.map((x) => `- ${x}`).join('\n') : '- none');
  await write('.design/migration-report.md', `# Migration report

Generated by scripts/migrate/run.mjs on ${new Date().toISOString().slice(0, 10)}.

- Doc pages: ${report.pages}
- Release posts: ${report.releases}
- Images downloaded: ${report.images}

## Notion links (owner to review)

${list(report.notion)}

## Mantle-hosted files (downloaded to .mantle-assets/, not committed)

${list(report.videos)}

## Dead links on Mantle (unlinked, text kept; owner to re-point or delete)

${list(report.deadLinks)}

## Bold-only lines in releases (tidy by hand)

${list(report.boldOnly)}

## Release dates to confirm

- releases/v1.15.0.md and releases/v1.16.0.md are dated 2024 on Mantle (likely 2025).
`);
  console.log(JSON.stringify({ pages: report.pages, releases: report.releases, images: report.images }));
}

main().catch((e) => { console.error(e); process.exit(1); });
