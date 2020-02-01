const isSimilarInOneRemoveOrAddHelper = (str1, str2) => {
  let idy = 0;
  let numberOfMismatches = 0;
  for (let idx = 0; idx < str1.length; idx += 1) {
    if (str1[idx] === str2[idy]) {
      idy += 1;
    }
    else {
      numberOfMismatches += 1;
      if (numberOfMismatches >= 2) {
        return false;
      }
    }
  }
  return true;
}

const isSimilarInOneRemoveOrAdd = (str1, str2) => {
  const idy = 0;
  if (str1.length > str2.length) return isSimilarInOneRemoveOrAddHelper(str1, str2);
  return isSimilarInOneRemoveOrAddHelper(str2, str1);
}

const isSimilarInOneReplace = (str1, str2) => {
  let numberOfMismatches = 0;
  for (let idx = 0; idx < str1.length; idx += 1) {
    if (str1[idx] !== str2[idx]) {
      numberOfMismatches += 1;
      if (numberOfMismatches === 2) return false;
    }
  } 
  return true;
}

/**
 * This function checks whether we can either add, replace, or remove
 * exactly one character in first string to make it the same as 
 * second string
 * note: This is a subset of levenshtein distance problem
 */
const canMakeSimilarInOneMode = (str1, str2) => {
  if (str1 === str2) return true;
  // string has same length, so true if number of mismatches is 1
  if (str1.length === str2.length) {
    return isSimilarInOneReplace(str1, str2);
  } else {
    const delta = Math.abs(str1.length - str2.length);
    // If delta is at least 2, then none can do
    if (delta > 1) return false;
    return isSimilarInOneRemoveOrAdd(str1, str2);
  }
};

module.exports = canMakeSimilarInOneMode;

// Exactly the same - 
// console.log(canMakeSimilarInOneMode('abc', 'abc'));
// Same length with 1 diff
// console.log(canMakeSimilarInOneMode('abc', 'abd'));
// Same length with > 1 diff
// console.log(canMakeSimilarInOneMode('abc', 'aed'));
// Different length with > 1 diff
// console.log(canMakeSimilarInOneMode('abcd', 'ad'));
// Different length with 1 diff
// console.log(canMakeSimilarInOneMode('ace', 'ce'));

