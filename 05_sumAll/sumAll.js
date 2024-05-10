const sumAll = function (from, to) {
  let output = 0;
  if (
    from < 0 ||
    to < 0 ||
    typeof from !== 'number' ||
    typeof to !== 'number'
  ) {
    return 'ERROR';
  }
  if (from > to) {
    [from, to] = [to, from];
  }
  for (let i = from; i <= to; i++) {
    output += i;
  }
  return output;
};
//code finished
// Do not edit below this line
module.exports = sumAll;
