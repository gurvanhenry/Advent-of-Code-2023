import fs from 'fs';

import { findPossibleGameIds } from './lib';

console.log('🐈 AoC 2023 - day 2 - part1 🦮');

const input = fs.readFileSync('src/data/input.txt').toString();
const possibleGameIds: number[] = findPossibleGameIds(input);
const sum = possibleGameIds.reduce((prev, cur) => prev + cur, 0);

const result = sum;

console.log('🎉');
console.log('result', result);
console.log('🎉');
