import fs from 'fs';

export function getDataFromFile(filePath: string) {
  const text = fs.readFileSync(filePath, 'utf8');
  return text;
}

export function convertTextToArrayOfLines(text: string): string[] {
  return text.split('\n');
}

export function getFirstDigit(text: string): string {
  const numbers = text.match(/\d+/g);
  if (numbers === null) {
    return '0';
  }
  const firstNumber = numbers[0]; // example : 32
  const firstDigit = firstNumber[0]; // example : 3
  return firstDigit;
}

export function getLastDigit(text: string): string {
  const numbers = text.match(/\d+/g);
  if (numbers === null) {
    return '0';
  }
  const lastNumber = numbers[numbers.length - 1]; // example : 45
  const lastDigit = lastNumber[lastNumber.length - 1]; // example : 5
  return lastDigit;
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
