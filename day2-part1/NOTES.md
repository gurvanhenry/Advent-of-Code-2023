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