import {
  convertTextToArrayOfLines,
  convertToNumber,
  getDataFromFile,
  getFirstDigit,
  getLastDigit,
  joinDigits,
  sumValues,
} from './lib';

console.log('🐈 AoC 2023 - day 1 part 1 🦮');

const text = getDataFromFile('src/data/input.txt');
const lines = convertTextToArrayOfLines(text);

const joinedDigitsArray = lines
  .map((line) => {
    const digitFirst = getFirstDigit(line);
    const digitLast = getLastDigit(line);
    const joinedDigit = joinDigits(digitFirst, digitLast);
    return joinedDigit;
  })
  .map((digit) => convertToNumber(digit));

const total = sumValues(joinedDigitsArray);

console.log('🎉');
console.log('result', total);
console.log('🎉');
