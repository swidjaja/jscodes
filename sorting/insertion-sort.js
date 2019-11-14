const { swap } = require('./utils');

// In-place algorithm O(1) space and O(n^2) runtime worst case
// Worst case happens when list are in reversed order
module.exports = (items) => {
  for (let idx = 1; idx < items.length; idx += 1) {
    for (let idy = idx; idy > 0; idy -= 1) {
      if (items[idy] < items[idy - 1]) {
        swap(items, idy, idy - 1);
      }
    }
  }
};
