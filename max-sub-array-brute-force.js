// Brute-force soln - O(n^2)
const maxSumArray = (arr) => {
  let currSum;
  let bestSum = Number.MIN_SAFE_INTEGER;
  let bestLeftIdx = null;
  let bestRightIdx = null;

  for (let i = 0; i < arr.length; i++) {
    currSum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (currSum + arr[j] > currSum && currSum > bestSum) {
        bestLeftIdx = i;
        bestRightIdx = j;
        bestSum = currSum;
      } else if (currSum > bestSum) {
        // both are negative in descending order.
        bestLeftIdx = i;
        bestRightIdx = i;
        bestSum = currSum;
      }
      currSum += arr[j];
    }
  }
  return { bestLeftIdx, bestRightIdx, bestSum };
}

console.log(maxSumArray([4,5,1,2]));
console.log(maxSumArray([-4,-5,-1,-2]));
console.log(maxSumArray([-4,5,1,-2]));
console.log(maxSumArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
