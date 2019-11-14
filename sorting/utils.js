const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const findMinIdx = (items, start) => {
  let minIdx = start;

  for (let idx = start + 1; idx < items.length; idx += 1) {
    if (items[idx] < items[minIdx]) {
      minIdx = idx;
    }
  }

  return minIdx;
};

module.exports = {
  swap,
  findMinIdx
};