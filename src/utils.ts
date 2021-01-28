export const randomValueInRange = (minValue: number, maxValue: number) =>
  Math.floor(minValue + Math.random() * (maxValue - minValue));
