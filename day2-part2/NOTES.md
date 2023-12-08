# part 1

**example**

```
Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
```

rule: only 12 red cubes, 13 green cubes, and 14 blue cubes

=> possible game : 1 2 5 
=> impossible game : 3 (20 green) 4 (15 blue)

RESULT : sum(possible_games[]) = 1 + 2 + 5 = 8

**note**

steps:
- convert all games to objet :
  games = [
    { id: 1 , 
      reveals : [ { blue:2, red:0, green:1 } ; { blue:2, red:0, green:3 } ]
    } ,
  ...]
- for each game, check that each `cubes` of every `reveal` is lower than maxime => (valid game)
- sum all `possible game`

# part 2 

In each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

    In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
    Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
    Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
    Game 4 required at least 14 red, 3 green, and 15 blue cubes.
    Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.


    The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

    For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?

G1 : 4 red 2 grenn 6 blue
G2 : 1 red 3 green 4 blue
G3 : 20 red 6 blue 13 green
G4 : 14 red 3 green 15 blue
G5 6 red 3 green 2 blue

*rule : r-min-in-the-bag = max(r) on all reveals*

power G1 : 4x2x6 = 48
G1 ...

sum all power = 2286