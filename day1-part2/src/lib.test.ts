import {
  convertTextToArrayOfLines,
  convertToNumber,
  getDataFromFile,
  getFirstDigit,
  getLastDigit,
  joinDigits,
  regexMatchWithOverlapping,
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

describe('regex with overlapping', () => {
  test('eight and two', () => {
    const text = '1one-eightwo3';
    const regex = /one|eight|two/g;
    const results = regexMatchWithOverlapping(text, regex);
    expect(results).toEqual(['one', 'eight', 'two']);
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

  describe('new request: digit can be written with letters', () => {
    test('just a "one"', () => {
      const firstDigit: string = getFirstDigit('--one-8-two-nine--');
      expect(firstDigit).toBe('1');
    });

    test('edge case #1', () => {
      const firstDigit: string = getFirstDigit('--8-one-two-nine--');
      expect(firstDigit).toBe('8');
    });

    test('edge case #2 - only number in letter', () => {
      const firstDigit: string = getFirstDigit('--two-nine--');
      expect(firstDigit).toBe('2');
    });

    test('edge case #3 - no number in letter', () => {
      const firstDigit: string = getFirstDigit('--1-2--');
      expect(firstDigit).toBe('1');
    });

    test('edge case #4 - only number in letter', () => {
      const firstDigit: string = getFirstDigit('--one--');
      expect(firstDigit).toBe('1');
    });

    test('last digit - number-in-letter', () => {
      const lastDigit: string = getLastDigit('--one-8-two-nine--');
      expect(lastDigit).toBe('9');
    });

    test('last digit - number', () => {
      const lastDigit: string = getLastDigit('--nine-4');
      expect(lastDigit).toBe('4');
    });

    test('edge cas #5 - same number begin and end (need last index)', () => {
      const lastDigit: string = getLastDigit('3onesix3');
      expect(lastDigit).toBe('3');
    });

    test('edge cas #5 - overlapping word', () => {
      const lastDigit: string = getLastDigit('one--eightwor');
      expect(lastDigit).toBe('2');
    });
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
