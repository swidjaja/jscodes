const bubbleSort = require('./bubble-sort');
const selectionSort = require('./selection-sort');
const insertionSort = require('./insertion-sort');

let items = [1, 8, -1, 10, 200, 120, 121, 111];
bubbleSort(items);
console.log(items.join(' '));

items = [1, 8, -1, 10, 200, 120, 121, 111];
selectionSort(items);
console.log(items.join(' '));

items = [1, 8, -1, 10, 200, 120, 121, 111];
insertionSort(items);
console.log(items.join(' '));
