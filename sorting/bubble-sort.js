const { swap } = require('./utils');

// In-place algorithm - O(1) space, O(n^2) runtime worst case
const bubbleSort = (items = []) => {
  for (let idx = 0; idx < items.length; idx += 1) {
    for (let idy = idx + 1; idy < items.length; idy += 1) {
      if (items[idx] > items[idy]) {
        swap(items, idx, idy);
      }
    }
  }
};

module.exports = bubbleSort;
