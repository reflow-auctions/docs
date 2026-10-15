import { test } from 'node:test';
import assert from 'node:assert/strict';
import { convertHtml, rewriteHref } from './convert.mjs';

const opts = { resolveImage: (src) => `/img/docs/t/${src.split('/').pop()}`, slugToPath: { 'checkout-settings': '/settings/checkout-settings' } };
const md = (html) => convertHtml(html, opts);

test('admonitions become ::: blocks with blank lines', () => {
  assert.equal(md('<m-tip><p>Use drafts.</p></m-tip>'), ':::tip\n\nUse drafts.\n\n:::\n');
  for (const [tag, kind] of [['m-note', 'note'], ['m-info', 'info'], ['m-warning', 'warning'], ['m-danger', 'danger']]) {
    assert.match(md(`<${tag}><p>x</p></${tag}>`), new RegExp(`^:::${kind}\\n\\nx\\n\\n:::\\n$`));
  }
});

test('steps become a numbered list with bold titles', () => {
  const out = md('<m-steps><m-step title="Open"><p>Go there.</p></m-step><m-step title="Save"><p>Click it.</p></m-step></m-steps>');
  assert.equal(out, '1. **Open**\n\n   Go there.\n\n2. **Save**\n\n   Click it.\n');
});

test('accordions become ### headings', () => {
  const out = md('<m-accordiongroup><m-accordion title="Event Starts"><p>Fires.</p></m-accordion></m-accordiongroup>');
  assert.equal(out, '### Event Starts\n\nFires.\n');
});

test('cards become a bullet list, linked when href is set', () => {
  const out = md('<m-cardgroup><m-card title="A" href="/checkout-settings"><p>one</p></m-card><m-card title="B"><p>two</p></m-card></m-cardgroup>');
  assert.equal(out, '- **[A](/settings/checkout-settings)**\n\n  one\n\n- **B**\n\n  two\n');
});

test('m-frame is unwrapped and image src is resolved', () => {
  const out = md('<m-frame><p><img src="https://cdn.heymantle.com/x/image.png" alt="Shot"></p></m-frame>');
  assert.equal(out, '![Shot](/img/docs/t/image.png)\n');
});

test('nested admonition inside a step stays indented', () => {
  const out = md('<m-steps><m-step title="T"><p>a</p><m-note><p>b</p></m-note></m-step></m-steps>');
  assert.equal(out, '1. **T**\n\n   a\n\n   :::note\n\n   b\n\n   :::\n');
});

test('simple lists are tight; empty paragraphs and styles are dropped', () => {
  const out = md('<ul class="tappy-bullet-list"><li><p>one</p></li><li><p style="color:red">two</p></li></ul><p></p>');
  assert.equal(out, '- one\n- two\n');
});

test('curly braces in inline code survive', () => {
  assert.equal(md('<p>Use <code>{{idsForeachitem}}</code>.</p>'), 'Use `{{idsForeachitem}}`.\n');
});

test('unknown Mantle component throws', () => {
  assert.throws(() => md('<m-video src="x"></m-video>'), /Unknown Mantle component <m-video>/);
});

test('rewriteHref', () => {
  const map = { dashboard: '/analytics-reporting/dashboard' };
  assert.equal(rewriteHref('https://reflow.mantledocs.com/dashboard#customize-the-dashboard', map), '/analytics-reporting/dashboard#customize-the-dashboard');
  assert.equal(rewriteHref('/analytics-reporting/event-metrics', map), '/analytics-reporting/event-metrics');
  assert.equal(rewriteHref('https://reflow.mantledocs.com/resources/release-notes', map), '/releases');
  assert.equal(rewriteHref('https://www.notion.so/Draft-Orders-34a6?pvs=21', map), 'https://www.notion.so/Draft-Orders-34a6?pvs=21');
});

test('bare card text is not glued to the title', () => {
  assert.equal(md('<m-cardgroup><m-card title="A">Plain text.</m-card></m-cardgroup>'), '- **A**\n\n  Plain text.\n');
});

test('dead internal links are unlinked and reported; live ones kept', () => {
  const dead = [];
  const out = convertHtml(
    '<p><a href="/make-offer">Make Offer</a> and <a href="https://reflow.mantledocs.com/checkout-settings#x">Checkout</a></p>'
    + '<m-cardgroup><m-card title="Gone" href="/configuration/settings"><p>t</p></m-card></m-cardgroup>',
    { ...opts, knownPaths: new Set(['/settings/checkout-settings']), onDeadLink: (h) => dead.push(h) });
  assert.equal(out, 'Make Offer and [Checkout](/settings/checkout-settings#x)\n\n- **Gone**\n\n  t\n');
  assert.deepEqual(dead, ['/make-offer', '/configuration/settings']);
});

test('links to Mantle-hosted files use resolveAsset, or are unlinked', () => {
  const html = '<p><a href="https://cdn.heymantle.com/o/a/Buyers_20Fee_Product.mp4">Video</a></p>';
  assert.equal(convertHtml(html, { ...opts, resolveAsset: () => 'https://youtu.be/abc' }), '[Video](https://youtu.be/abc)\n');
  assert.equal(convertHtml(html, { ...opts, resolveAsset: () => null }), 'Video\n');
  assert.equal(md(html), 'Video\n');
});
