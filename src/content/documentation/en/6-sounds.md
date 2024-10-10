---
title: Sounds
---

# Sounds

The `sound` property in `templates` associates a sound effect with a game element. You can use different types of sounds, ranging from predefined templates to custom sounds or URLs from [PFXR](https://achtaitaipai.github.io/pfxr/).

## Creating a Sound Effect with a Predefined Template

The `createSound` method accepts two parameters:

1. The type of sound, which can be one of the following:
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
2. An optional parameter: **the seed**.

The **seed** is a number used to initialize the sound generator in a random but deterministic way. This means that if you generate a sound with a certain type (e.g., `PICKUP`) and provide a seed, the same sound will be produced every time you reuse that seed. If no seed is provided, a different random sound will be generated each time.

Example of generating a predictable sound using a seed:

```js
createGame({
	templates: {
		G: {
			sound: createSound('PICKUP', 32) // The sound will always be the same with seed 32
		}
		//...
	},
	volume: 0.8
})
```

If you do not pass a seed, each generation will produce a different sound.

## Creating a Sound from a PFXR URL

You can also create a sound from a URL generated through the [PFXR](https://achtaitaipai.github.io/pfxr/) interface. The URL contains the parameters to generate a specific sound.

Example of assigning a sound generated via a PFXR URL to a template:

```js
createGame({
	templates: {
		G: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			)
		}
		// Other templates...
	},
	volume: 0.8
})
```

## Creating a Custom Sound with a `Sound` Object

For advanced customization, you can create a `Sound` object and use it as the value for the `sound` property in a template. The object can contain parameters such as `waveForm`, `frequency`, `sustainTime`, and `decayTime`.

You can find the complete documentation of the available parameters for the `Sound` object in the official [PFXR repository](https://github.com/achtaitaipai/pfxr/tree/main/packages/synth#sound).

Example of assigning a custom sound to a template:

```js
const customSound = {
	waveForm: 2, // Triangle
	frequency: 440, // Frequency in Hertz
	sustainTime: 0.2, // Sustain time
	decayTime: 0.5 // Decay time
}

createGame({
	templates: {
		G: {
			sound: customSound
		}
		//...
	},
	volume: 0.8
})
```

## Playing a Sound Dynamically

To play a sound independently of the `templates`, you can use the `game` object returned by the `createGame` function. The `game.playSound` method allows you to play a dynamic sound.

Example:

```js
const game = createGame()

game.playSound('LASER', 123) // With seed 123 to generate the same sound every time
game.playSound(
	'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
)
game.playSound({
	waveForm: 2, // Triangle
	frequency: 440, // Frequency in Hertz
	sustainTime: 0.2, // Sustain time
	decayTime: 0.5 // Decay time
})
```

## Full Example

Here is an example showing how to assign sounds to different templates and how to play them dynamically:

```js
import { createGame, createSound } from 'odyc'

const game = createGame({
	templates: {
		G1: {
			sound: createSound('PICKUP', 32) // Sound based on a predefined template with seed 32
		},
		G2: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			) // Sound based on a PFXR URL
		},
		G3: {
			sound: {
				waveForm: 2,
				frequency: 440,
				sustainTime: 0.2,
				decayTime: 0.5
			}
		}
	},
	volume: 0.8
})

// Playing a sound dynamically
game.playSound('HIT', 999) // The same sound will be generated every time with seed 999
```
