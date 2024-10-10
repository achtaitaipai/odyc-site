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

Integrating sound effects into your game can greatly enhance the user experience by adding an immersive and interactive dimension. To do this, you need to use the `sound` parameter in combination with the `createSound` function.

### The `createSound` Function

The `createSound` function accepts several types of parameters to generate sounds in your game.

1. **Predefined Sound Type**: You can choose from several predefined sound types, such as:

   - `DEFAULT`
   - `RANDOM`
   - `PICKUP`
   - `LASER`
   - `EXPLOSION`
   - `POWERUP`
   - `HIT`
   - `JUMP`
   - `BLIP`
   - `FALL`
   - `FART`

2. **Seed**: An optional number that allows you to generate a specific sound deterministically. Each seed produces a unique sound, and if you want to obtain the same sound in every game session, you just need to reuse the same seed. If no seed is provided, a different random sound will be generated each time the game is launched.

Example of assigning a sound to the `X` element:

```js
createGame({
	templates: {
		X: {
			sound: createSound('POWERUP', 123) // Sound determined by the "POWERUP" type and seed 123
		}
	}
})
```

### Using a URL for a Custom Sound

It is also possible to generate sounds using a URL from the [PFXR](https://achtaitaipai.github.io/pfxr/) interface. This option allows you to create a complex sound using the graphical interface and reuse it directly in your game.

Example of using a URL for a sound in a template:

```js
createGame({
	templates: {
		X: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			) // Sound generated via a PFXR URL
		}
	}
})
```

### Creating a Custom Sound with a `Sound` Object

You can also create more complex or custom sounds by passing a `Sound` object instead of a predefined sound type. For example:

```js
const customSound = {
	waveForm: 2, // Triangle wave form
	frequency: 440, // Frequency in Hertz
	sustainTime: 0.2, // Sustain duration in seconds
	decayTime: 0.5 // Decay duration in seconds
}

createGame({
	templates: {
		X: {
			sound: customSound // Custom sound for the X element
		}
	}
})
```

For more details on sound customization, you can refer to the [official PFXR documentation](https://github.com/achtaitaipai/pfxr/tree/main/packages/synth#sound).

- **Global Game Volume**: The overall volume can be controlled using the `volume` parameter. It accepts a value between 0 (muted) and 1 (maximum volume).

```js
createGame({
	volume: 0.8 // Volume set to 80%
})
```
