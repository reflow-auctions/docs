import * as cheerio from 'cheerio';

const VERSION_RE = /^v(\d+\.\d+\.\d+)\s+(\d{2})\/(\d{2})\/(\d{4})$/;

// Spec: "Release section label mapping". Keys are normalized (lowercase,
// trailing colon stripped, dashes unified to "-").
export const LABEL_MAP = {
  'features': 'Features',
  'main improvements': 'Improvements',
  'improvements': 'Improvements',
  'main improvements - admin app': 'Improvements (Admin app)',
  'other fixes/improvements': 'Fixes',
  'fixes/improvements': 'Fixes',
  'main fixes and improvements': 'Fixes',
  'other fixes': 'Fixes',
  'user side - main fixes/improvements': 'Fixes (User side)',
  'admin app - main fixes/improvements': 'Fixes (Admin app)',
};

function norm(text) {
  return text.replace(/\s+/g, ' ').trim();
}

export function normalizeLabel(text) {
  return norm(text).replace(/:$/, '').replace(/[–—]/g, '-').toLowerCase();
}

// Bold-only paragraphs that are content, not section labels. Kept as-is and
// listed in the migration report for a human to tidy.
export const NOT_LABELS = new Set(['note', 'resolved']);

/**
 * Is this top-level element a section label? Any short <h3>/<div>/<p> whose
 * text is a known label maps to its heading. NOT_LABELS stay paragraphs.
 * An unknown short <h3>, <div>, or bold-only <p> throws.
 */
export function labelFor($, el) {
  const text = norm($(el).text());
  if (!text || text.length > 60) return null;
  const tag = el.tagName;
  const boldOnly =
    tag === 'p' && $(el).children().length === 1 &&
    $(el).children('strong').length === 1 && norm($(el).children('strong').text()) === text;
  const key = normalizeLabel(text);
  if (NOT_LABELS.has(key)) return null;
  // Known labels are recognized in any wrapper (some were pasted as plain text).
  if (['h3', 'div', 'p'].includes(tag) && LABEL_MAP[key]) return LABEL_MAP[key];
  const isLabelShape = tag === 'h3' || tag === 'div' || boldOnly;
  if (!isLabelShape) return null;
  throw new Error(`Unknown release section label: "${text}"`);
}

/**
 * Split the release-notes #page-content HTML into releases.
 * Returns [{version: 'v1.53.0', date: '2026-09-24', html: '<…>'}], newest first,
 * with section labels replaced by <h2> headings and <hr> separators removed.
 */
export function splitReleases(contentHtml) {
  const $ = cheerio.load(`<div id="root">${contentHtml}</div>`, null, false);
  const releases = [];
  let current = null;
  for (const el of $('#root').children().toArray()) {
    const text = norm($(el).text());
    const m = /^h[1-4]$/.test(el.tagName) ? VERSION_RE.exec(text) : null;
    if (m) {
      current = { version: `v${m[1]}`, date: `${m[4]}-${m[2]}-${m[3]}`, parts: [] };
      releases.push(current);
      continue;
    }
    if (!current) continue; // page intro (title, blurb, m-note) is dropped
    if (el.tagName === 'hr') continue;
    const heading = labelFor($, el);
    current.parts.push(heading ? `<h2>${heading}</h2>` : $.html(el));
  }
  return releases.map(({ version, date, parts }) => ({ version, date, html: parts.join('') }));
}
