import * as cheerio from 'cheerio';

/** Parse Mantle's sidebar into [{label, section, pages:[{path, slug, label}]}]. */
export function parseNav(html) {
  const $ = cheerio.load(html);
  return $('#docs-sidebar .Navigation-Group').toArray().map((g) => {
    const pages = $(g).find('a.Navigation-Page-Link').toArray().map((a) => {
      const path = $(a).attr('href');
      const [, section, slug] = path.split('/');
      return { path, section, slug, label: $(a).text().trim() };
    });
    return {
      label: $(g).find('.Navigation-Group-Label').first().text().trim(),
      section: pages[0]?.path.split('/')[1],
      pages,
    };
  });
}

/** Title, description and inner content HTML of one Mantle page. */
export function parsePage(html) {
  const $ = cheerio.load(html);
  const content = $('#page-content');
  if (content.length !== 1) throw new Error('No #page-content on page');
  return {
    title: $('h1.Page-Title').first().text().trim(),
    description: ($('meta[name="description"]').attr('content') || '').trim(),
    contentHtml: content.html(),
  };
}

/** Front matter block. JSON strings are valid YAML double-quoted scalars. */
export function frontMatter(fields) {
  const lines = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== '')
    .map(([k, v]) => `${k}: ${typeof v === 'number' ? v : JSON.stringify(v)}`);
  return `---\n${lines.join('\n')}\n---\n\n`;
}

/** "<slug>-<n>.<ext>" for the n-th image (1-based) on a page. */
export function imageFileName(slug, n, src) {
  const ext = (new URL(src).pathname.match(/\.(png|jpe?g|gif|webp|svg)$/i)?.[1] || 'png').toLowerCase();
  return `${slug}-${n}.${ext}`;
}
