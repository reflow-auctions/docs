import { test } from 'node:test';
import assert from 'node:assert/strict';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkYouTube from './youtube.mjs';

/** Parse Markdown, run the plugin, return the resulting top-level nodes. */
function run(md) {
  const processor = unified().use(remarkParse).use(remarkDirective).use(remarkYouTube);
  return processor.runSync(processor.parse(md)).children;
}

test('::youtube becomes a <YouTube> JSX element with id and title', () => {
  const [node] = run('::youtube[Set up a Buyer’s Fee]{#S9Yjatw2Jdo}');
  assert.equal(node.type, 'mdxJsxFlowElement');
  assert.equal(node.name, 'YouTube');
  assert.deepEqual(node.attributes, [
    { type: 'mdxJsxAttribute', name: 'id', value: 'S9Yjatw2Jdo' },
    { type: 'mdxJsxAttribute', name: 'title', value: 'Set up a Buyer’s Fee' },
  ]);
  assert.deepEqual(node.children, []);
});

test('id may also be given as id="…"', () => {
  const [node] = run('::youtube[Admin setup]{id="0mdLfrYy6RQ"}');
  assert.equal(node.attributes[0].value, '0mdLfrYy6RQ');
});

test('missing title falls back to a generic label', () => {
  const [node] = run('::youtube{#60WVHBK7aPM}');
  assert.equal(node.attributes[1].value, 'Video');
});

test('an invalid id fails the build with the file position', () => {
  assert.throws(() => run('::youtube[x]{id="https://youtu.be/S9Yjatw2Jdo"}'),
    /::youtube needs an 11-character YouTube video id.*"https:\/\/youtu\.be\/S9Yjatw2Jdo".*line 1/);
  assert.throws(() => run('::youtube[x]'), /::youtube needs an 11-character YouTube video id/);
});

test('other directives and normal content are left alone', () => {
  const nodes = run('Hello\n\n::other[x]{#abc}\n\n:::tip\n\nHi\n\n:::');
  assert.equal(nodes[0].type, 'paragraph');
  assert.equal(nodes[1].type, 'leafDirective');
  assert.equal(nodes[1].name, 'other');
  assert.equal(nodes[2].type, 'containerDirective');
});
