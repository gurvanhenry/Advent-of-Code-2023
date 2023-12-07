import fs from 'fs';

export function sumAllCalibration(text: string) {
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
  return total;
}

// --------------------

export function getDataFromFile(filePath: string) {
  const text = fs.readFileSync(filePath, 'utf8');
  return text;
}

export function convertTextToArrayOfLines(text: string): string[] {
  return text.split('\n');
}

export function joinDigits(d1: string, d2: string): string {
  return d1 + d2;
}

export function convertToNumber(text: string): number {
  return parseInt(text, 10);
}

export function sumValues(values: number[]): number {
  return values.reduce((prev, current) => prev + current, 0);
}

const DIGITS_IN_LETTER = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
const REGEX = /\d|one|two|three|four|five|six|seven|eight|nine/g;

export function getFirstDigit(text: string): string {
  const matchResult = regexMatchWithOverlapping(text, REGEX);
  if (matchResult.length === 0) {
    return '0';
  }
  const digitInString = matchResult[0];
  if (DIGITS_IN_LETTER.includes(digitInString)) {
    return convertNumberInLetterToDigit(digitInString);
  } else {
    return digitInString;
  }
}

export function getLastDigit(text: string): string {
  const matchResult = regexMatchWithOverlapping(text, REGEX);
  if (matchResult.length === 0) {
    return '0';
  }
  const digitInString = matchResult[matchResult.length - 1];
  if (DIGITS_IN_LETTER.includes(digitInString)) {
    return convertNumberInLetterToDigit(digitInString);
  } else {
    return digitInString;
  }
}

export function regexMatchWithOverlapping(text: string, regex: RegExp) {
  const results = [];
  let match;
  while ((match = regex.exec(text))) {
    regex.lastIndex = match.index + 1; // set next exec just after first letter of last match
    const value = match[0];
    results.push(value);
  }
  return results;
}

function convertNumberInLetterToDigit(numberInLetter: string): string {
  switch (numberInLetter) {
    case 'one':
      return '1';
    case 'two':
      return '2';
    case 'three':
      return '3';
    case 'four':
      return '4';
    case 'five':
      return '5';
    case 'six':
      return '6';
    case 'seven':
      return '7';
    case 'eight':
      return '8';
    case 'nine':
      return '9';
    default:
      throw new Error('numberInLetter not found');
  }
}
