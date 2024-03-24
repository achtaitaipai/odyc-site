---
title: The Hero
base: createGame({})
solution: |
  createGame({
    player: {
        sprite: 5,
        position: [4, 4]
    },
  })
---

It's now time to introduce our hero into the game.

To do this, we will use the `player` parameter. This parameter is an object that contains two properties: `sprite` and `position`.

Although we will cover the creation of custom sprites in a later section, for now, we'll simply change our hero's color by using an existing sprite.

The default player parameters are as follows:

```js
player: {
    sprite: 0,
    position: [0, 0]
}
```

These parameters position the player at the top left of the screen using the first default sprite. Let's modify these values to customize the appearance and the initial position of our hero.

To add your hero to the game, specify the sprite you wish to use to represent them and their initial position on the grid.

Coordinates are given in the form of an array `[x, y]`, where `x` represents the column and `y` represents the line on the game grid. For example, `[4, 4]` places the hero in the center if your grid is 8x8 in size.

Keyboard shortcuts for adding brackets:

On Mac:

- `[` : <kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>(</kbd>
- `]` : <kbd>Shift</kbd> + <kbd>Option</kbd> + <kbd>)</kbd>

On PC:

- `[` : <kbd>AltGr</kbd> + <kbd>5</kbd>
- `]` : <kbd>AltGr</kbd> + <kbd>°</kbd>

Experiment with different values for `sprite` and `position` to better understand their impact on the game. This will help you visualize how to position and customize elements in your game.
