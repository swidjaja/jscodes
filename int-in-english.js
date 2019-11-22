/**
 * Prints very large number in English
 */
const dict = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety'
};

const units = {
  h: 'hundred',
  th: 'thousand',
  m: 'million',
  b: 'billion',
  tr: 'trillion'
};

const processTwoDigits = (num) => {
  if (num < 20) {
    return dict[num];
  } else {
    const tenth = Math.floor(num / 10) * 10;
    const oneth = num % 10;

    return `${dict[tenth]} ${oneth !== 0 ? dict[oneth] : ''}`;
  }
}

const processThreeDigits = (num) => {
  const results = [];
  const hundredth = Math.floor(num / 100);
  const secondPart = num - (hundredth * 100);

  results.push(`${dict[hundredth]} ${units.h}${hundredth > 1 ? 's': ''}`);
  if (secondPart) {
    results.push('and');
    results.push(processTwoDigits(secondPart));
  }

  return results.join(' ');
}

const sayNumberInEnglish = (num) => {
  const str = '' + num;

  if (str.length <= 2) return processTwoDigits(num); 
  if (str.length === 3) return processThreeDigits(num);

  const groupings = [];
  let threeGroupingsBefore = 0;
  let j = str.length - 1;

  while (true) {
    if (j < 0) break;

    let i = j - 2;
    const thisGroupVal = str.substring(i, j + 1);

    if (thisGroupVal) {
      if (parseInt(thisGroupVal, 10) > 0) {
        groupings.unshift({ value: thisGroupVal, threeGroupingsBefore });
      }
      threeGroupingsBefore += 1;
      j -= 3;
    } else {
      break;
    }
  }

  const results = [];
  for (let idx = 0; idx < groupings.length; idx += 1) {
    const { value, threeGroupingsBefore } = groupings[idx];
    results.push(sayNumberInEnglish(parseInt(value, 10)));
    if (threeGroupingsBefore === 1) {
      results.push(units.th + (value > 1 ? 's': ''));
    } else if (threeGroupingsBefore === 2) {
      results.push(units.m + (value > 1 ? 's': ''));
    } else if (threeGroupingsBefore === 3) {
      results.push(units.b + (value > 1 ? 's': ''));
    } else if (threeGroupingsBefore === 4) {
      results.push(units.tr + (value > 1 ? 's': ''));
    }
  }

  return results.join(' ');
}

for (let idx = 0; idx <= 10000; idx += 1) {
  console.log(sayNumberInEnglish(idx));
}