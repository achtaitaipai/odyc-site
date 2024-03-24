---
title: Advanced Template Parameters
base: |
  createGame({
    player: {
      sprite: `
        ...55...
        ..5885..
        .666666.
        6.6666.6
        8.6666.8
        ..3333..
        .333333.
        ..9..9..
      `,
      position: [0, 4],
    },
    templates: {
      F: {
        sprite: 1,
        dialog: "Boo! I am a ghost.",
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
      }
    },
    map: `
      ........
      ........
      ........
      .......F
      ......FE
      .......F
      ........
      ........
    `,
    background: 2
  })
solution: |
  createGame({
    player: {
      sprite: `
        ...55...
        ..5885..
        .666666.
        6.6666.6
        8.6666.8
        ..3333..
        .333333.
        ..9..9..
      `,
      position: [0, 4],
    },
    templates: {
      F: {
        sprite: 1,
        dialog: "Boo! I am a ghost.",
        solid: false,
        visible: false,
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
        end: "Victory",
      }
    },
    map: `
      ........
      ........
      ........
      .......F
      ......FE
      .......F
      ........
      ........
    `,
    background: 2
  })
---

Advanced template parameters unlock a range of possibilities to enrich your game:

- **Solidity (`solid`)**: This parameter determines whether an object acts as an impassable obstacle. A template marked as `solid: true` will block the player's path, simulating a wall or a physical object. Conversely, `solid: false` allows the player to pass through the object, ideal for elements like ghosts or background effects.

- **Visibility (`visible`)**: Controls whether the object should be visually rendered on the map. `visible: false` makes the object invisible, though it can still interact with the player if other parameters allow. This can be useful for secret traps or hidden passages.

- **Game End (`end`)**: Specifies a message to display when the player interacts with the object. This can mark the end of a level or the game's conclusion. For example, `end: "Victory"` could display a congratulatory message before restarting or finishing the game.

In our example, the `E` template triggers the game's end with a victory message upon interaction, while the ghosts `F` are set to be both invisible and intangible, adding a layer of mystery and strategy to the gameplay.

These parameters offer considerable flexibility in designing your levels, allowing for unique interactions and challenges tailored to your vision.
