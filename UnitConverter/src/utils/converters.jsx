// LENGTH - Meter
export const lengthFactors = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.34,
};

export function convertUnits(value, fromUnit, toUnit, factors) {
  const valueInBase = value * factors[fromUnit];
  return valueInBase / factors[toUnit];
}

// WEIGHT - Gram
export const weightFactors = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495,
  pound: 453.592,
};

// TEMPERATURE
export function convertTemperature(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) return value;

  let celsius;

  if (fromUnit === "celsius") celsius = value;
  if (fromUnit === "fahrenheit") celsius = (value - 32) * (5 / 9);
  if (fromUnit === "kelvin") celsius = value - 273.15;

  if (toUnit === "celsius") return celsius;
  if (toUnit === "fahrenheit") return celsius * (9 / 5) + 32;
  if (toUnit === "kelvin") return celsius + 273.15;
}
