/**
 * Turns every [square-bracketed] gap in a legal document into a red placeholder, so the text in the
 * CMS stays plain and the gap still shows on the page and in check:placeholders (data-placeholder).
 * Only files under src/content/legal/ are touched: elsewhere brackets are ordinary text.
 */
const BRACKET = /\[[^\[\]\n]+\]/g;

function split(text) {
  const nodes = [];
  let last = 0;
  for (const match of text.matchAll(BRACKET)) {
    if (match.index > last) nodes.push({ type: 'text', value: text.slice(last, match.index) });
    nodes.push({
      type: 'element',
      tagName: 'span',
      properties: { className: ['bracket-placeholder'], dataPlaceholder: '' },
      children: [{ type: 'text', value: match[0] }],
    });
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push({ type: 'text', value: text.slice(last) });
  return nodes;
}

function walk(node) {
  if (!node.children) return;
  node.children = node.children.flatMap((child) => {
    if (child.type === 'text' && BRACKET.test(child.value)) {
      BRACKET.lastIndex = 0;
      return split(child.value);
    }
    walk(child);
    return [child];
  });
}

export default function rehypeBracketPlaceholders() {
  return (tree, file) => {
    const path = (file.path ?? file.history?.[0] ?? '').replace(/\\/g, '/');
    if (path.includes('/content/legal/')) walk(tree);
  };
}
