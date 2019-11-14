const { findMinIdx, swap } = require('./utils');

// In-place algorithm O(1) space, O(n^2) runtime worst case
const selectionSort = (items) => {
  for (let idx = 0; idx < items.length; idx += 1) {
    const minIdx = findMinIdx(items, idx);
    swap(items, idx, minIdx);
  }
};

module.exports = selectionSort;
