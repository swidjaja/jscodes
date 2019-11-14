function TreeNode(left, value, right) {
  this.left = left;
  this.value = value;
  this.right = right;
}

const tree8 = new TreeNode(null, 8, null);
const tree9 = new TreeNode(null, 9, null);
const tree4 = new TreeNode(tree8, 4, tree9);
const tree5 = new TreeNode(null, 5, null);
const tree2 = new TreeNode(tree4, 2, tree5);

const tree6 = new TreeNode(null, 6, null);
const tree7 = new TreeNode(null, 7, null);
const tree3 = new TreeNode(tree6, 3, tree7);

const tree1 = new TreeNode(tree2, 1, tree3);

// Recursive style - can do iteratively?
const traverseByLevel = (tree, cb) => {
  const storage = [];

  const storeTreePerLevel = (node, level) => {
    if (!storage[level]) {
      storage[level] = [];
    }
    storage[level].push(node);
  
    if (node.left) {
      storeTreePerLevel(node.left, level + 1);
    }
    if (node.right) {
      storeTreePerLevel(node.right, level + 1);
    }
  }

  storeTreePerLevel(tree1, 0);

  if (cb) {
    storage.forEach((nodes, idx) => {
      console.log(`Level ${idx}`);
      nodes.forEach((node) => {
        cb(node);
      });
    });
  }
};

const printValueOfNode = node => console.log(`Processing node with value ${node.value}`);

traverseByLevel(tree1, printValueOfNode);
