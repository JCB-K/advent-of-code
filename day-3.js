const findDiffBetweenIntegers = (a, b) => (a - b >= 0 ? a - b : -(a - b));

const findClosestNumberInArray = (needle, haystack) =>
  haystack.reduce(function(prev, curr) {
    return Math.abs(curr - needle) < Math.abs(prev - needle) ? curr : prev;
  });

const getLayerForGivenNumber = input => {
  let biggestNumberInLayer = 1;
  let rowLength = 1;
  while (input > biggestNumberInLayer) {
    biggestNumberInLayer = Math.pow(rowLength, 2);
    rowLength = rowLength + 2;
  }
  const layer = Math.floor(rowLength / 2);
  const biggestNumberToMiddle = layer - 1;
  const middlePoints = [1, 3, 5, 7].map(x => biggestNumberInLayer - biggestNumberToMiddle * x);
  const closestMiddlePoint = findClosestNumberInArray(input, middlePoints);
  let distanceToClosestMiddlePoint = findDiffBetweenIntegers(closestMiddlePoint, input);
  return distanceToClosestMiddlePoint + (layer - 1);
};

const input = 265149;

console.log(getLayerForGivenNumber(input));

