import fs from 'fs';

import { findFewestNumberOfCubesPerGame } from './lib';

console.log('🐈 AoC 2023 - day 2 - part2 🦮');

const input = fs.readFileSync('src/data/input.txt').toString();
const fewestNumberOfCubesPerGame = findFewestNumberOfCubesPerGame(input);
const sum = fewestNumberOfCubesPerGame
  .map((x) => x.fewest)
  .map((x) => x.blue * x.green * x.red)
  .reduce((prev, cur) => prev + cur, 0);

const result = sum;

console.log('🎉');
console.log('result', result);
console.log('🎉');
