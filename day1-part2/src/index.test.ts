import { sumAllCalibration } from './lib';

test('from example', () => {
  const text = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;
  const result = sumAllCalibration(text);
  expect(result).toBe(281);
});
