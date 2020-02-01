/**
 * Given a list of time ranges (full hour), return an array of condensed time ranges
 * ex:
 *[[8, 10], [10,12], [11, 13], [13, 16], [17, 18]]
 * will return
 * [[8, 16], [17,18]]
 */
const condenseTimes = (times) => {
  times.sort((ta, tb) => ta[0] - tb[0]);

  const results = [];
  let currentPair = times[0];

  for (let idx = 1; idx < times.length; idx += 1) {
    const nextPair = times[idx];
    if (nextPair[0] === currentPair[1]) {
      currentPair = [currentPair[0], nextPair[1]];
    } else if (nextPair[0] > currentPair[0] && nextPair[0] < currentPair[1]) {
      currentPair = [currentPair[0], (currentPair[1] > nextPair[1]) ? currentPair[1] : nextPair[1]];
    } else {
      results.push(currentPair);
      currentPair = nextPair;
    }
  }

  results.push(currentPair);

  return results;
}

console.log(condenseTimes([[8, 10], [10,12], [11, 13], [13, 16], [17, 18], [12, 14], [15, 16]]));