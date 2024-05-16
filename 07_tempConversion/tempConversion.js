const convertToCelsius = function (farhenheitInput) {
  let celsiusOutput = (farhenheitInput - 32) * (5 / 9);
  return Number(celsiusOutput.toFixed(1));
};

const convertToFahrenheit = function (celsiusInput) {
  let farhenheitOutput = celsiusInput * (9 / 5) + 32;
  return Number(farhenheitOutput.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
