const celsiusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

const roundToTwoDecimalPlace = (num) => {
  return num.toFixed(2);
};


const celsiusToFahrenhiteAndKelvin = () => {
  const celsiusTemp = parseFloat(celsiusInput.value);
  const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
  const kelvinTemp = celsiusTemp + 273.15;

  fahrenheitInput.value = roundToTwoDecimalPlace(fahrenheitTemp);
  kelvinInput.value = roundToTwoDecimalPlace(kelvinTemp);
};


const fahrenheitToCelsiusAndKelvin = () => {
  const fahrenheitTemp = parseFloat(fahrenheitInput.value);
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  const kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);

  celsiusInput.value = roundToTwoDecimalPlace(celsiusTemp);
  kelvinInput.value = roundToTwoDecimalPlace(kelvinTemp);
};

const kelvinToCelsiusAndFahrenhite = () => {
  const kelvinTemp = parseFloat(kelvinInput.value);
  const celsiusTemp = kelvinTemp - 273;
  const fahrenheitTemp =  1.8 * (kelvinTemp - 273) + 32;

  celsiusInput.value = roundToTwoDecimalPlace(celsiusTemp);
  fahrenheitInput.value = roundToTwoDecimalPlace(fahrenheitTemp);
};


(function main () {
  celsiusInput.addEventListener('input', celsiusToFahrenhiteAndKelvin);
  fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
  kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenhite);
})();

