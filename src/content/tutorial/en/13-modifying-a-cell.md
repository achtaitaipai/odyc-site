---
title: Modifying a Cell
base: |
  const game = createGame({
      player: {
         sprite: `
            ...00...
            ...00...
            .000000.
            0.0000.0
            0.0000.0
            ..0000..
            ..0..0..
            ..0..0..
        `,
        position: [1, 0]
      },
      templates: {
        X: {
          sprite: 2,
        },
        D:{
            sprite: `
                ...99...
                ..9999..
                .999999.
                .999999.
                .999959.
                .999999.
                .999999.
                .999999.
            `,
            onEnter: function(target){
              target.remove()
            }
        },
        E: {
            sprite: `
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
            `,
            sound: createSound("POWERUP"),
            end: "Well done"
        },
      K:{
        sprite: `
          ...5....
          ..5.5...
          ..5.5...
          ...5....
          ...55...
          ...5....
          ...55...
          ...5....
          `,
          dialog: "You have found a key!",
          sound: createSound("PICKUP"),
          solid: false,
          onEnter: function(target){
            target.remove()
          }
        }
      },
      map: `
        .....X..
        .....X..
        .....X..
        .....X..
        .....D.E
        .....X..
        .....X..
        .K...X..
        `
  })
solution: |
  const game = createGame({
      player: {
         sprite: `
            ...00...
            ...00...
            .000000.
            0.0000.0
            0.0000.0
            ..0000..
            ..0..0..
            ..0..0..
        `,
        position: [1, 0]
      },
      templates: {
        X: {
          sprite: 2,
        },
        D:{
            sprite: `
                ...99...
                ..9999..
                .999999.
                .999999.
                .999959.
                .999999.
                .999999.
                .999999.
            `,
            onEnter: function(target){
                target.remove()
            }
        },
        E: {
            sprite: `
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
            `,
            sound: createSound("POWERUP"),
            end: "Well done"
        },
      K:{
        sprite: `
          ...5....
          ..5.5...
          ..5.5...
          ...5....
          ...55...
          ...5....
          ...55...
          ...5....
          `,
          dialog: "You have found a key!",
          sound: createSound("PICKUP"),
          solid: false,
          onEnter: function(target){
            target.remove()
            game.getCell(5,4).solid = false
          }
        }
      },
      map: `
        .....X..
        .....X..
        .....X..
        .....X..
        .....D.E
        .....X..
        .....X..
        .K...X..
        `
  })
---

In the example provided, both the key and the door disappear when the player reaches their cells.

We would like to ensure that when the player "picks up" the key, the door becomes non-solid, allowing the player to pass through.

To achieve this, you can use the `getCell` function provided by the game's context. This function takes two numbers as arguments, corresponding to a position, and returns the object located at that position. Here's how to use it:

```js
const game = createGame({
	// Game configuration
})

// Making an object at a specific position invisible
game.getCell(3, 4).visible = false
// Removing an object at a specific position
game.getCell(6, 6).remove()
```

In the example above, we use `getCell` to make the door (located at position [5, 4]) non-solid after the player has picked up the key. This opens up new possibilities for creating interactive puzzles and game mechanics, where the player's actions can have a direct impact on the game environment.

Experiment with `getCell` to dynamically modify cell states, thus enriching the gameplay with varied interactions and challenges.
