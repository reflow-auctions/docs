import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findProblems } from './check-content.mjs';

const rel = (name, title, date) => ({ file: `releases/${name}`, content: `---\ntitle: "${title}"\ndate: ${date}\n---\n\nBody\n` });

test('valid release and clean doc pass', () => {
  assert.deepEqual(findProblems([rel('v1.53.0.md', 'v1.53.0', '2026-09-24'), { file: 'docs/a/b.md', content: 'Hi' }]), []);
});

test('Mantle references are flagged', () => {
  assert.deepEqual(findProblems([{ file: 'docs/a.md', content: '![x](https://cdn.heymantle.com/i.png)' }]), ['docs/a.md: references Mantle']);
});

test('slugified file name is flagged', () => {
  assert.deepEqual(findProblems([rel('v1530.md', 'v1.53.0', '2026-09-24')]), ['releases/v1530.md: file name must be v1.53.0.md']);
});

test('bad title and bad date are flagged', () => {
  assert.deepEqual(findProblems([rel('x.md', '1.53', '09/24/2026')]), [
    'releases/x.md: title must look like v1.2.3 (got 1.53)',
    'releases/x.md: date must be YYYY-MM-DD (got 09/24/2026)',
  ]);
});

test('::youtube must use the editor-safe form with an 11-character id', () => {
  const ok = { file: 'docs/a.md', content: '::youtube{#S9Yjatw2Jdo title="Set up a Buyer’s Fee"}\n::youtube{id="0mdLfrYy6RQ"}' };
  const bad = { file: 'docs/b.md', content: 'x\n::youtube{#https://youtu.be/S9Yjatw2Jdo}\n::youtube[Old form]{#S9Yjatw2Jdo}\n   ::youtube{#S9Yjatw2Jdo}' };
  const hint = '::youtube needs the form ::youtube{#VIDEO_ID title="Title"} with an 11-character video id';
  assert.deepEqual(findProblems([ok]), []);
  assert.deepEqual(findProblems([bad]), [`docs/b.md:2: ${hint}`, `docs/b.md:3: ${hint}`, `docs/b.md:4: ${hint}`]);
});
