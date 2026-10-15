import { test } from 'node:test';
import assert from 'node:assert/strict';
import { splitReleases, normalizeLabel } from './releases.mjs';

const PAGE = [
  '<h2>Release Notes</h2><p>Intro.</p><m-note><p>Format note.</p></m-note>',
  '<h3><span style="color:red">v1.53.0 09/24/2026</span></h3>',
  '<div><p><span>Main fixes and improvements:</span></p></div><ul><li><p>Fixed A</p></li></ul><hr>',
  '<h3>v1.45.0 06/09/2026</h3><p><span>Features:</span></p><ul><li><p>New B</p></li></ul>',
  '<p><strong>Note:</strong></p><p>Careful.</p><hr>',
  '<h2>v1.31.0 09/23/2025</h2><p><strong>Main improvements — Admin App:</strong></p><ul><li><p>C</p></li></ul>',
  '<p><strong>Resolved</strong></p><p>minor bugs.</p><hr>',
  '<h2>v1.15.0 01/13/2024</h2><h3>Features:</h3><ul><li><p>D</p></li></ul>',
].join('');

test('splits on version headings of any level; drops intro and <hr>', () => {
  const rs = splitReleases(PAGE);
  assert.deepEqual(rs.map((r) => [r.version, r.date]), [
    ['v1.53.0', '2026-09-24'], ['v1.45.0', '2026-06-09'], ['v1.31.0', '2025-09-23'], ['v1.15.0', '2024-01-13'],
  ]);
  assert.ok(!rs.some((r) => r.html.includes('<hr') || r.html.includes('Intro')));
});

test('standardizes labels in every wrapper shape', () => {
  const [a, b, c, d] = splitReleases(PAGE);
  assert.ok(a.html.startsWith('<h2>Fixes</h2>'));
  assert.ok(b.html.startsWith('<h2>Features</h2>'));
  assert.ok(c.html.startsWith('<h2>Improvements (Admin app)</h2>'));
  assert.ok(d.html.startsWith('<h2>Features</h2>'));
});

test('Note and Resolved stay as content', () => {
  const [, b, c] = splitReleases(PAGE);
  assert.match(b.html, /<strong>Note:<\/strong>/);
  assert.match(c.html, /<strong>Resolved<\/strong>/);
});

test('unknown label throws', () => {
  assert.throws(() => splitReleases('<h3>v1.0.0 01/01/2026</h3><p><strong>Breaking changes:</strong></p>'),
    /Unknown release section label: "Breaking changes:"/);
});

test('normalizeLabel', () => {
  assert.equal(normalizeLabel(' User Side – Main fixes/improvements: '), 'user side - main fixes/improvements');
});
