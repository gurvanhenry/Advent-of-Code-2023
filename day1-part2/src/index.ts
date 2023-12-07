import { getDataFromFile, sumAllCalibration } from './lib';

console.log('🐈 AoC 2023 - day 1 - part2 🦮');

const text = getDataFromFile('src/data/input.txt');
const result = sumAllCalibration(text);

console.log('🎉');
console.log('result', result);
console.log('🎉');
