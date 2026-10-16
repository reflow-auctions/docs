import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSidebar, sidebarProblems } from './sidebar.mjs';

// docs on disk: { section: [page slugs] }
const DOCS = {
  'quick-start': ['welcome', 'overview', 'installation'],
  settings: ['checkout-settings', 'buyers-fee'],
};

const ORDER = [
  { section: 'settings', label: 'Settings', pages: ['buyers-fee', 'checkout-settings'] },
  { section: 'quick-start', label: 'Quick Start', pages: ['welcome', 'installation'] },
];

test('builds sections and pages in the dragged order', () => {
  assert.deepEqual(buildSidebar(ORDER, DOCS), [
    { type: 'category', label: 'Settings', collapsible: false, collapsed: false,
      items: ['settings/buyers-fee', 'settings/checkout-settings'] },
    { type: 'category', label: 'Quick Start', collapsible: false, collapsed: false,
      items: ['quick-start/welcome', 'quick-start/installation', 'quick-start/overview'] },
  ]);
});

test('pages and sections missing from the file are appended, never lost', () => {
  const docs = { ...DOCS, automation: ['shopify-flow'] };
  const items = buildSidebar(ORDER, docs);
  assert.equal(items.at(-1).label, 'automation');
  assert.deepEqual(items.at(-1).items, ['automation/shopify-flow']);
  assert.ok(items[1].items.includes('quick-start/overview'));
});

test('unknown sections/pages are skipped by the builder', () => {
  const order = [{ section: 'settings', label: 'Settings', pages: ['nope', 'buyers-fee'] },
    { section: 'ghost', label: 'Ghost', pages: ['x'] }];
  const items = buildSidebar(order, DOCS);
  assert.deepEqual(items[0].items, ['settings/buyers-fee', 'settings/checkout-settings']);
  assert.ok(!items.some((c) => c.label === 'Ghost'));
});

test('slugs may be typed as "page", "page.md" or "section/page"', () => {
  const order = [{ section: 'settings', label: 'Settings', pages: ['settings/buyers-fee', 'checkout-settings.md'] }];
  assert.deepEqual(buildSidebar(order, DOCS)[0].items, ['settings/buyers-fee', 'settings/checkout-settings']);
});

test('sidebarProblems reports typos, duplicates and missing entries', () => {
  const order = [
    { section: 'settings', label: 'Settings', pages: ['buyers-fe', 'checkout-settings', 'checkout-settings'] },
    { section: 'ghost', label: 'Ghost', pages: [] },
    { section: 'settings', label: 'Again', pages: [] },
  ];
  assert.deepEqual(sidebarProblems(order, DOCS), [
    'sidebar.yml: section "settings" lists unknown page "buyers-fe" (pages: checkout-settings, buyers-fee)',
    'sidebar.yml: section "settings" lists page "checkout-settings" twice',
    'sidebar.yml: unknown section "ghost" (folders: quick-start, settings)',
    'sidebar.yml: section "settings" is listed twice',
    'sidebar.yml: section "quick-start" is missing (it will show at the end)',
    'sidebar.yml: section "settings" doesn\'t list page "buyers-fee" (it will show at the end)',
  ]);
});

test('a page listed under the wrong section is reported clearly', () => {
  const order = [{ section: 'settings', label: 'Settings', pages: ['welcome', 'checkout-settings', 'buyers-fee'] },
    { section: 'quick-start', label: 'Quick Start', pages: ['welcome', 'overview', 'installation'] }];
  assert.deepEqual(sidebarProblems(order, DOCS), [
    'sidebar.yml: section "settings" lists unknown page "welcome" (pages: checkout-settings, buyers-fee). '
      + 'Pages can\'t move between sections: the folder is part of the web address',
  ]);
});

test('a complete, correct file has no problems', () => {
  const order = [
    { section: 'quick-start', label: 'Quick Start', pages: ['welcome', 'overview', 'installation'] },
    { section: 'settings', label: 'Settings', pages: ['checkout-settings', 'buyers-fee'] },
  ];
  assert.deepEqual(sidebarProblems(order, DOCS), []);
});
