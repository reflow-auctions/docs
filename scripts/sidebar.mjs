// Sidebar order from sidebar.yml (edited with drag-and-drop in Pages CMS).
//
// sidebar.yml is a list of sections; each lists its pages in display order:
//   - name: Settings             # heading shown in the sidebar
//     pages:                     # page slugs (file names without .md)
//       - checkout-settings
//       - buyers-fee
// The folder under docs/ is the name, slugified ("Bidding & Purchasing" ->
// bidding-purchasing). The older form `section: <folder>` + `label: <heading>`
// is still accepted.
//
// Safety: pages or sections missing from the file are appended at the end, so
// a new page always shows up. Unknown or duplicate entries are skipped here and
// reported by sidebarProblems() (run in `npm run check`).

/** "Bidding & Purchasing" -> "bidding-purchasing" (lowercase, dashes, no accents/symbols). */
export function slugify(name) {
  return String(name ?? '')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Folder + heading for an entry: { name } or legacy { section, label }. */
function sectionOf(entry) {
  const name = String(entry?.name ?? entry?.label ?? '').trim();
  const folder = String(entry?.section ?? '').trim() || slugify(name);
  return { folder, heading: name || folder };
}

/** Normalize "page", "page.md", "section/page", "docs/section/page.md" to "page". */
function pageSlug(value) {
  return String(value ?? '').trim().replace(/\.mdx?$/, '').split('/').pop();
}

/**
 * @param {Array<{section: string, label?: string, pages?: string[]}>} order
 * @param {Record<string, string[]>} docs  section folder -> page slugs on disk
 * @returns Docusaurus sidebar items (non-collapsible categories of doc ids)
 */
export function buildSidebar(order, docs) {
  const seenSections = new Set();
  const items = [];
  const category = (section, label, pages) => ({
    type: 'category',
    label,
    collapsible: false,
    collapsed: false,
    items: pages.map((p) => `${section}/${p}`),
  });

  for (const entry of order ?? []) {
    const { folder: section, heading } = sectionOf(entry);
    if (!docs[section] || seenSections.has(section)) continue;
    seenSections.add(section);
    const listed = [];
    for (const raw of entry.pages ?? []) {
      const slug = pageSlug(raw);
      if (docs[section].includes(slug) && !listed.includes(slug)) listed.push(slug);
    }
    const rest = docs[section].filter((p) => !listed.includes(p));
    items.push(category(section, heading, [...listed, ...rest]));
  }

  for (const section of Object.keys(docs)) {
    if (!seenSections.has(section)) items.push(category(section, section, docs[section]));
  }
  return items.filter((c) => c.items.length > 0);
}

/** Human-readable problems with sidebar.yml, for `npm run check`. */
export function sidebarProblems(order, docs) {
  const problems = [];
  const seenSections = new Set();
  const listedBySection = {};
  const owner = {};
  for (const [section, pages] of Object.entries(docs)) for (const p of pages) owner[p] = section;

  for (const entry of order ?? []) {
    const { folder: section, heading } = sectionOf(entry);
    if (!docs[section]) {
      problems.push(entry?.section
        ? `sidebar.yml: unknown section "${section}" (folders: ${Object.keys(docs).join(', ')})`
        : `sidebar.yml: no folder "docs/${section}" for section "${heading}". Section names must match their folder `
          + `(folders: ${Object.keys(docs).join(', ')}). Renaming a section changes its web addresses, so ask a developer`);
      continue;
    }
    if (seenSections.has(section)) {
      problems.push(`sidebar.yml: section "${section}" is listed twice`);
      continue;
    }
    seenSections.add(section);
    const listed = (listedBySection[section] = []);
    for (const raw of entry.pages ?? []) {
      const slug = pageSlug(raw);
      if (!docs[section].includes(slug)) {
        const moved = owner[slug] && owner[slug] !== section
          ? '. Pages can\'t move between sections: the folder is part of the web address'
          : '';
        problems.push(`sidebar.yml: section "${section}" lists unknown page "${slug}" (pages: ${docs[section].join(', ')})${moved}`);
      } else if (listed.includes(slug)) {
        problems.push(`sidebar.yml: section "${section}" lists page "${slug}" twice`);
      } else {
        listed.push(slug);
      }
    }
  }

  for (const section of Object.keys(docs)) {
    if (!seenSections.has(section)) {
      problems.push(`sidebar.yml: section "${section}" is missing (it will show at the end)`);
      continue;
    }
    for (const p of docs[section]) {
      if (!listedBySection[section].includes(p)) {
        problems.push(`sidebar.yml: section "${section}" doesn't list page "${p}" (it will show at the end)`);
      }
    }
  }
  return problems;
}
