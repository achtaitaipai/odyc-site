---
title: How to Draw?
base: |
  createGame({
    player: {
        sprite: 5,
        position: [4, 4]
    },
  })
solution: |
  createGame({
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
  })
---

A sprite is represented as a string of characters, with each line corresponding to a row of pixels. Here's an example of a sprite:

```js
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
```

Each digit is interpreted as a color (0: black, 1: white...), while spaces, tabs, and empty lines are ignored. Other characters represent transparent pixels.

In the example, the character `.` is used to mark empty spaces, but it could just as well be an underscore `_`.

> [!WARNING]
> In JavaScript, to create a multi-line string, we use the backtick character: `
>
> - On Windows: <kbd>AltGr</kbd> + <kbd>7</kbd> then <kbd>Space</kbd>
> - On Mac: <kbd>£</kbd> then <kbd>Space</kbd>

Try to design a sprite for the player.
