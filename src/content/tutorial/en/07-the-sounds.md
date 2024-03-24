---
title: Sound in the Game
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
    templates: {
      X:{
        sprite: `
          ..5555..
          .5....5.
          5......5
          5......5
          5......5
          5......5
          .5....5.
          ..5555..
        `,
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
    `
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
        sprite: `
          ..5555..
          .5....5.
          5......5
          5......5
          5......5
          5......5
          .5....5.
          ..5555..
        `,
        sound: createSound("POWERUP")
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
    `,
    volume: 0.8,
  })
---

Integrating sound effects into your game can greatly enhance the user experience by adding an immersive and interactive dimension. To do this, you should use the `sound` parameter in combination with the `createSound` function.

The setup looks like this:

```js
//...
  templates: {
    X: {
      //...
      sound: createSound('HIT', 123),
    },
  },
//...
```

The `createSound` function accepts two parameters: the sound type and an optional number which serves as a seed for sound generation.

There are 9 sound types available:

- `DEFAULT`
- `RANDOM`
- `PICKUP`
- `LASER`
- `EXPLOSION`
- `POWERUP`
- `HIT`
- `JUMP`
- `BLIP`

If no number is provided, the generated sound will be different each time the game is launched. To keep a specific sound, you can add a number. Each number will generate a unique sound.

Sounds are generated using the excellent tool [jfxr](https://jfxr.frozenfractal.com/).

> [!TIP]
> The overall game volume can be adjusted with the `volume` parameter, which accepts a value between 0 and 1.
>
> ```js
> createGame({
>   //...
>   volume: 0.8,
> });
> ```
