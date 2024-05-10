const sumAll = function (from, to) {
  let output = 0;
  if (from > to) {
    [from, to] = [to, from];
  }
  for (let i = from; i <= to; i++) {
    output += i;
  }
  const numbers = [10, 20, 30, 40];

  // Skips the second element
  const [first, , third] = numbers;
  console.log(first);
  console.log(third);
  return output;
};
//code finished
// Do not edit below this line
module.exports = sumAll;
