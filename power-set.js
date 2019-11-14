const powerSet = (arr) => {
  const helper = (soln, front, tail) => {
    for (let idx = 0; idx < tail.length; idx += 1) {
      const combined = [...front, tail[idx]];
      soln.push(combined);
      helper(soln, combined, tail.slice(idx + 1));
    }
  }

  const soln = [[]];

  if (arr.length) {
    // O(n)
    for (let idx = 0; idx < arr.length; idx += 1) {
      const front = [arr[idx]];
      // 1-item per-set
      soln.push(front);
      const tail = arr.slice(idx + 1);
      // O(2^n)
      helper(soln, front, tail);
    }
    // total = O(n x 2^n)
  }
  return soln;
};

// console.log(powerSet([]));
// console.log(powerSet([1]));
// console.log(powerSet([1,2]));
// console.log(powerSet([1,2,3]));
// console.log(powerSet([1,2,3,4]));
// console.log(powerSet([1,2,3,4,5]));

module.exports = powerSet;
