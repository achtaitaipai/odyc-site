---
title: The Map
base: |
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
    templates: {
      X:{
        sprite: 9
      },
    },
    map:`
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

Creating a **map** is essential for bringing your game to life. It consists of two main elements: `templates` and the `map` parameter.

### Templates

Templates are models that define reusable elements in your game, such as walls, enemies, or treasures. You can think of them as building blocks.

For example, to define a template for a wall:

```js
createGame({
  //...
  templates: {
    X: {
      sprite: 9,
    },
  },
});
```

Here, the character `X` represents a wall and is associated with a specific sprite. You can use any character to represent different elements in your templates.

### Drawing the Map

The `map` uses the previously defined templates to create the game environment. Each character in the `map` corresponds to a template and allows you to draw the map.

Here's how to use the wall template to draw an enclosure:

```js
createGame({
  //...
  map: `
      XXXXXXXX
      X......X
      X......X
      X......X
      X......X
      X......X
      X......X
      XXXXXXXX
    `,
});
```

- Each character present in `templates` will be transformed into the corresponding object in the game.
- New lines indicate the start of a new row.
- Spaces, tabs, and empty lines are ignored.
- Any other character is interpreted as an empty space.

Now it's your turn! Add objects, expand the map, experiment to create a rich and interesting world for your game.
