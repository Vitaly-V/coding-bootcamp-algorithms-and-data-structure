// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const d = 'delimiter';
  const nodes = [root, d];
  const arr = [1];
  while (nodes.length > 1) {
    const node = nodes.shift();
    if (node === d) {
      arr.push(nodes.length);
      nodes.push(d);
    } else {
      nodes.push(...node.children);
    }
  }
  return arr;
}

module.exports = levelWidth;
