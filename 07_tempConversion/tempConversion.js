const convertToCelsius = function (farhenheitInput) {
  let celsiusOutput = (farhenheitInput - 32) * (5 / 9);
  celsiusOutput = celsiusOutput.toFixed(1);
  return Number(celsiusOutput);
};

const convertToFahrenheit = function (celsiusInput) {
  let farhenheitOutput = celsiusInput * (9 / 5) + 32;
  farhenheitOutput = farhenheitOutput.toFixed(1);
  return Number(farhenheitOutput);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
