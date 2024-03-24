---
title: Global Model Modification
base: |
  const game = createGame({
    player: {
      sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
      `,
      position: [4, 4],
    },
    templates: {
      X: {
        sprite: 9
      },
    },
    map: `
      XXXXXXXX
      X.X....X
      X.X.XX.X
      X.X..X.X
      X.X..X.X
      X.XXXX.X
      X......X
      XXXXXXXX
    `
  })
solution: |
  const game = createGame({
    player: {
      sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
      `,
      position: [4, 4],
    },
    templates: {
      X: {
        sprite: 9,
        onCollide: function(){
          game.setAll("X", 
            {
              sprite: game.player.sprite
            }
          )
        }
      },
    },
    map: `
      XXXXXXXX
      X.X....X
      X.X.XX.X
      X.X..X.X
      X.X..X.X
      X.XXXX.X
      X......X
      XXXXXXXX
    `
  })
---

Using the `setAll` function provided by the `game` object allows for the simultaneous modification of all objects sharing the same symbol. This function requires two parameters: the symbol of the elements to be modified and an object representing the new parameters to be applied.

```js
const game = createGame({
  // Initial game setup
  templates: {
    X: {
      // Initial configuration for X
    },
  },
  // Other configurations
});

game.setAll("X", {
  dialog: "Hello",
  sprite: 6,
});
```

> [!TIP]
> You can also remove all elements with the same symbol and then create a new object at a specific position:
>
> ```js
> // Removes all "X"
> game.removeAll("X");
>
> // Creates a new "X" at position [3, 5]
> game.addToCell(3, 5, "X");
> ```

This feature enables the creation of game mechanics where the player's interaction with an element can influence the entire level, such as changing the appearance of all similar obstacles upon a collision. Experiment with this capability to energize your levels and offer interactive and evolving puzzles that enrich the gaming experience.
