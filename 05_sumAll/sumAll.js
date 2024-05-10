const sumAll = function (from, to) {
  let output = 0;
  if (from > to) {
    let newFrom = to;
    let newTo = from;
    for (let i = newFrom; i <= newTo; i++) {
      output += i;
    }
  }
  for (let i = from; i <= to; i++) {
    output += i;
  }
  return output;
};
//code finished
// Do not edit below this line
module.exports = sumAll;
