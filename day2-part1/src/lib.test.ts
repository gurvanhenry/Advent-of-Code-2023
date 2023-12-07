import { describe, expect, test } from 'vitest';

import { buildGame, buildGames, findPossibleGameIds } from './lib';

describe('findPossibleGameIds', () => {
  test('example - 1 2 5 possible', () => {
    const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
`;
    const possibleGameIds: number[] = findPossibleGameIds(input);
    const sum = possibleGameIds.reduce((prev, cur) => prev + cur, 0);
    expect(sum).toBe(8);
  });

  test('other case - 1 possible', () => {
    const input = `
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
`;
    const possibleGameIds: number[] = findPossibleGameIds(input);
    const sum = possibleGameIds.reduce((prev, cur) => prev + cur, 0);
    expect(sum).toBe(1);
  });
});

describe('buildGame', () => {
  test('basic', () => {
    const line = 'Game 23: 3 blue, 4 red; 2 green';
    const game = buildGame(line);
    expect(game).toEqual({
      id: 23,
      reveals: [
        { blue: 3, red: 4, green: 0 },
        { blue: 0, red: 0, green: 2 },
      ],
    });
  });
});

describe('buildAllGames', () => {
  test('basic', () => {
    const lines = `
Game 23: 4 red
Game 50: 3 blue; 2 green
`;
    const games = buildGames(lines);
    expect(games).toEqual([
      {
        id: 23,
        reveals: [{ blue: 0, red: 4, green: 0 }],
      },
      {
        id: 50,
        reveals: [
          { blue: 3, red: 0, green: 0 },
          { blue: 0, red: 0, green: 2 },
        ],
      },
    ]);
  });
});
