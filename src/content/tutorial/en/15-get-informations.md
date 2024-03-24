---
title: Tracking Interactions and Dynamic Information
base: |
  const bnm = `
          ...00...
          ...00...
          .000000.
          0.0000.0
          0.0000.0
          ..0000..
          ..0..0..
          ..0..0..
      `
      
  const game = createGame({
      player: {
        sprite: bnm,
      },
      templates: {
        B: {
          dialog: "Hello",
          sprite: bnm,
          onCollide:function(target){
            const number = 0
            target.dialog= "You've already said hello " + (number + 1) + " times"
          }
        }
      },
      map: `
        ........
        ........
        .....B..
        ........
        ........
        ........
        ........
        ........
        `
  })
solution: |
  const bnm = `
          ...00...
          ...00...
          .000000.
          0.0000.0
          0.0000.0
          ..0000..
          ..0..0..
          ..0..0..
      `
      
  const game = createGame({
      player: {
        sprite: bnm,
      },
      templates: {
        B: {
          dialog: "Hello",
          sprite: bnm,
          onCollide:function(target){
            const number = game.getCollisionCount("B") 
            target.dialog= "You've already said hello " + (number + 1) + " times"
          }
        }
      },
      map: `
        ........
        ........
        .....B..
        ........
        ........
        ........
        ........
        ........
        `
  })
---

The ability to know how many times events have occurred with `getCollisionCount`, `getEnterCount`, and `getLeaveCount` provides great flexibility for designing interactive and evolving gameplay experiences.

These functions, provided by the `game` object, can be used in two ways: by specifying a position or the symbol of a template.

```js
const game = createGame({
  // Initial game setup
});

// Number of times the player has entered cell [3, 4]
game.getEnterCount(3, 4);
// Number of times the player has entered a cell containing a template "X"
game.getEnterCount("X");
```

This ability to track interactions allows for the creation of gameplay mechanics where the player's repeated actions can unlock unique dialogues, special events, or even change the game environment in real-time.

### Practical Application

Imagine a scenario where a non-player character (NPC) recognizes the player with each new encounter, changing its dialogue accordingly. Using `getCollisionCount` to dynamically adjust the dialogue based on the number of previous interactions enriches the narrative experience and encourages the player to explore and interact more with their environment.

Experiment with these functions to introduce elements of surprise, perseverance-based rewards, or secrets that only reveal themselves after multiple interactions, thus adding depth and replayability to your game.
