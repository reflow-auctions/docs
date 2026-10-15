// Remark plugin: turns a Markdown leaf directive into the <YouTube> component.
//
//   ::youtube{#S9Yjatw2Jdo title="Set up a Buyer’s Fee"}
//
// The id is the 11-character YouTube video id ({#id} or {id="id"}).
// title="…" is the video title (accessibility + caption). This form survives the
// Pages CMS visual editor unchanged; the older ::youtube[Title]{#id} form also
// renders, but the editor escapes its brackets, so check-content rejects it.
// Works in plain .md files: Docusaurus parses directives in both md and mdx.
// The component itself is registered globally in src/theme/MDXComponents.js.

const ID_RE = /^[A-Za-z0-9_-]{11}$/;

function walk(node, visit) {
  if (!node.children) return;
  node.children.forEach((child, i) => {
    visit(child, i, node);
    walk(child, visit);
  });
}

function labelText(node) {
  let text = '';
  walk(node, (n) => { if (n.type === 'text' || n.type === 'inlineCode') text += n.value; });
  return text.trim();
}

export default function remarkYouTube() {
  return (tree, file) => {
    walk(tree, (node, index, parent) => {
      if (node.type !== 'leafDirective' || node.name !== 'youtube') return;
      const id = node.attributes?.id;
      if (!ID_RE.test(id ?? '')) {
        const where = `${file?.path ?? 'markdown'} line ${node.position?.start.line ?? '?'}`;
        throw new Error(
          `::youtube needs an 11-character YouTube video id, e.g. ::youtube{#S9Yjatw2Jdo title="Title"} `
          + `(got ${JSON.stringify(id)}) in ${where}`,
        );
      }
      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'YouTube',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'id', value: id },
          { type: 'mdxJsxAttribute', name: 'title', value: node.attributes?.title || labelText(node) || 'Video' },
        ],
        children: [],
      };
    });
  };
}
