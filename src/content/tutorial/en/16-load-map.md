---
title: Dynamically Loading Maps
base: |
  const room1 = `  
    xxxxxxxx
    x.....Ox
    x......x
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const room2 = ` 
    xxxxxxxx
    x....x.x
    x....xHx
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const game = createGame({
    player: {
      sprite: 4,
      position: [1, 1],
    },
    templates: {
      x: {
        sprite: 2,
      },
      H: {
        sprite: `        
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
        `,
      },
      O: {
        sprite: 0,
        solid: false,
        onEnter: function () {
        },
      },
    },
    map: room1,
  })
solution: |
  const room1 = `  
    xxxxxxxx
    x.....Ox
    x......x
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const room2 = ` 
    xxxxxxxx
    x....x.x
    x....xHx
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const game = createGame({
    player: {
      sprite: 4,
      position: [1, 1],
    },
    templates: {
      x: {
        sprite: 2,
      },
      H: {
        sprite: `        
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
        `,
      },
      O: {
        sprite: 0,
        solid: false,
        onEnter: function () {
          game.loadMap(room2)
        },
      },
    },
    map: room1,
  })
---

In the provided example, we want the player to be teleported to `room2` when they step on the black square.

The `loadMap` method opens the door to a variety of applications such as progressing through levels, activating teleporters, discovering secret doors, and more.

### Basic Usage

To load a new map, simply invoke the `loadMap` method on the `game` object, passing the desired map as a parameter:

```js
game.loadMap(level2)
```

### Player Positioning

The `loadMap` function also offers the ability to reposition the player to a new location on the loaded map, thus providing greater flexibility in scene and transition management:

```js
game.loadMap(level2, [3, 5])
```

> [!WARNING]
> When ending the game using the `end` parameter of a template or the `game.end` method, the game will be reset to its state following the last call to `game.loadMap`. Therefore, it's important to plan the use of this method within your game flow to ensure a consistent user experience.
