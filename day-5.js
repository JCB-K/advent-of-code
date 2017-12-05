const mark = (input, index, marked) => {
  input[index] = Object.assign(input[index], { marked });
  return input;
};

const input = mark(require('./day-5-input').map(val => ({ val })), 0, true);

const jump = input => {
  const current = input.find(x => x.marked);
  const currentIndex = input.findIndex(x => x.marked);
  const nextIndex = currentIndex + current.val;
  mark(input, currentIndex, false);
  if (input[nextIndex]) {
    mark(input, nextIndex, true);
  }
  input[currentIndex].val = input[currentIndex].val + 1;
  return input;
};

const fn = input => {
  let count = 1;
  while (jump(input).find(x => x.marked)) {
    count++;
  }
  return count;
};

console.log(fn(input));
