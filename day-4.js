const input = require('./day-4-input');

// count the amount of times each unique value appears in an array
const valueCount = array =>
  array.reduce((acc, v) => {
    acc[v] = acc[v] ? acc[v] + 1 : 1;
    return acc;
  }, {});

const fn = input =>
  input
    .map(i => Object.values(valueCount(i.split(' '))).some(x => x > 1))
    .filter(x => x === false).length;

console.log(fn(input));
