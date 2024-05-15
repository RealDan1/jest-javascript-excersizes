const leapYears = function (inputYear) {
  let isLeapYear = false;

  if (inputYear % 4 === 0) {
    if (inputYear % 400 === 0) {
      isLeapYear = true;
    } else if (inputYear % 100 === 0) {
      inputYear = false;
    } else {
      isLeapYear = true;
    }
  }

  return isLeapYear;
};
//Leap years are years divisible by four (like 1984 and 2004). However,
//years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400
//(like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

//Interesting IF ELSE logic problem encountered:
//divisible by 100 and 400 is conflicting? 1600 returns false
//try inputting just the two or statements on the first if, then !(100) on the second and another bolean to confirm for the conflicting scenario. Should work

// Do not edit below this line
module.exports = leapYears;
