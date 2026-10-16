import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { readSidebarOrder } from './docs-tree.mjs';

const withFile = (yamlText) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sb-'));
  fs.writeFileSync(path.join(dir, 'sidebar.yml'), yamlText);
  return dir;
};

test('reads sections nested under "sections:" (Pages CMS form)', () => {
  const dir = withFile('sections:\n  - label: Settings\n    section: settings\n    pages: [buyers-fee]\n');
  assert.deepEqual(readSidebarOrder(dir), [{ label: 'Settings', section: 'settings', pages: ['buyers-fee'] }]);
});

test('still reads a top-level list', () => {
  const dir = withFile('- section: settings\n  label: Settings\n');
  assert.deepEqual(readSidebarOrder(dir), [{ section: 'settings', label: 'Settings' }]);
});

test('missing or empty file gives no sections', () => {
  assert.deepEqual(readSidebarOrder(fs.mkdtempSync(path.join(os.tmpdir(), 'sb-'))), []);
  assert.deepEqual(readSidebarOrder(withFile('')), []);
});
