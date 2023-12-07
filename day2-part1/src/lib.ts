const MAXIMUM_RED = 12;
const MAXIMUM_GREEN = 13;
const MAXIMUM_BLUE = 14;

export function findPossibleGameIds(input: string): number[] {
  const games = buildGames(input);
  const possibleGames = games
    .filter((game) => isPossibleGame(game))
    .map((game) => game.id);
  return possibleGames;
}

function isPossibleGame(game: Game) {
  return game.reveals.every(
    (x) =>
      x.blue <= MAXIMUM_BLUE &&
      x.green <= MAXIMUM_GREEN &&
      x.red <= MAXIMUM_RED,
  );
}

type Game = {
  id: number;
  reveals: { blue: number; red: number; green: number }[];
};

export function buildGames(lines: string): Game[] {
  return lines
    .split('\n')
    .filter((line) => line !== '')
    .map((line) => buildGame(line));
}

export function buildGame(line: string): Game {
  const match = line.match('Game (\\d+): (.*)');
  if (match === null) throw new Error('Invalid line');
  const id: number = Number(match[1]);
  const revealsLine: string = match[2];
  const reveals = parseReveals(revealsLine);
  return { id, reveals };
}

/**
 * input : "3 blue, 1 red; 1 red, 2 green, 6 blue"
 * output : [ { blue: 3, red: 1, green: 0 }, { blue: 6, red: 1, green: 2 }]
 */
function parseReveals(
  revealsLine: string,
): { blue: number; red: number; green: number }[] {
  const revealLineArray = revealsLine.split(';');
  const reveals = revealLineArray.map((x) => parseReveal(x));
  return reveals;
}

/**
 * input : "3 blue, 1 red"
 * output : { blue: 3, red: 1, green: 0 }
 */
function parseReveal(revealLine: string): {
  blue: number;
  red: number;
  green: number;
} {
  const matchBlue = revealLine.match('(\\d+) blue');
  const blue = matchBlue ? Number(matchBlue[1]) : 0;
  const matchRed = revealLine.match('(\\d+) red');
  const red = matchRed ? Number(matchRed[1]) : 0;
  const matchGreen = revealLine.match('(\\d+) green');
  const green = matchGreen ? Number(matchGreen[1]) : 0;
  return { blue, red, green };
}
