import {
  convertTextToArrayOfLines,
  convertToNumber,
  getDataFromFile,
  getFirstDigit,
  getLastDigit,
  joinDigits,
  sumValues,
} from './lib';

describe('read data', () => {
  test('from file', () => {
    const inputText: string = getDataFromFile('src/data/input.txt');
    const fistLine: string = inputText.split('\n')[0];
    expect(fistLine).toBe('kjrqmzv9mmtxhgvsevenhvq7');
  });
});

describe('convert text to array of lines', () => {
  test('simple case', () => {
    const text = 'line1\nline2\nline3';
    const lines = convertTextToArrayOfLines(text);
    expect(lines).toHaveLength(3);
    expect(lines[0]).toBe('line1');
  });
});

describe('get digit', () => {
  test('first', () => {
    const firstDigit: string = getFirstDigit('--1-2-3--');
    expect(firstDigit).toBe('1');
  });

  test('last', () => {
    const lastDigit: string = getLastDigit('--1-2-3--');
    expect(lastDigit).toBe('3');
  });

  test('no digit => return 0', () => {
    const firstDigit = getFirstDigit('------');
    expect(firstDigit).toBe('0');
    const lastDigit = getLastDigit('------');
    expect(lastDigit).toBe('0');
  });

  test('edge case 1', () => {
    const lastDigit: string = getLastDigit('1------');
    expect(lastDigit).toBe('1');
  });

  test('edge case 2', () => {
    const lastDigit: string = getLastDigit('------1');
    expect(lastDigit).toBe('1');
  });

  test('edge case 3', () => {
    const lastDigit: string = getLastDigit('---4---');
    expect(lastDigit).toBe('4');
  });

  test('edge case 4', () => {
    const lastDigit: string = getLastDigit('4------');
    expect(lastDigit).toBe('4');
  });

  test('edge case 5 - number with more than one digit', () => {
    const firstDigit: string = getFirstDigit('--12----');
    expect(firstDigit).toBe('1');
    const lastDigit: string = getLastDigit('-45-----');
    expect(lastDigit).toBe('5');
  });
});

describe('join digits', () => {
  test('join 1 and 2', () => {
    const joinedDigits: string = joinDigits('1', '2');
    expect(joinedDigits).toBe('12');
  });
});

describe('convert string to number', () => {
  test('convert "12" to 12', () => {
    const text = '12';
    const value = convertToNumber(text);
    expect(value).toBe(12);
  });
});

describe('sum all numbers', () => {
  test('from example', () => {
    const values = [12, 38, 15, 77];
    const result = sumValues(values);
    expect(result).toBe(142);
  });

  test('edge case', () => {
    const values = [1];
    const result = sumValues(values);
    expect(result).toBe(1);
  });

  test('edge case', () => {
    const values = [] as number[];
    const result = sumValues(values);
    expect(result).toBe(0);
  });
});
