let input = require('./day-5-input');
let marked = 0;

const jump = () => {
  const current = input[marked];
  current >= 3 ? input[marked]-- : input[marked]++;
  marked = marked + current;
  return input;
};

const fn = input => {
  let count = 0;
  while (input[marked] !== undefined) {
    jump();
    count++;
  }
  return count;
};

console.log(fn(input));
