---
title: Templates and the Map
---

# Templates and the Map

`Templates` allow you to define all the objects (obstacles, items, characters...) in your game. Each `template` is represented by a character that you define (e.g., "X", "$", "e", "#"). You can then define a set of properties for each of these `templates` and use them in the `map`.

For each `template`, you can define the following properties:

- `sprite` (optional): Defines how the object will be represented ([see sprites](/en/documentation/sprites))
- `dialog` (optional): Defines a message to open in the dialog box when the player interacts with this object.
- `sound` (optional): Defines a sound to play when the player interacts with this object ([see sounds](/en/documentation/sounds)).
- `solid` (optional): Defines whether the player can pass through this element or not.
- `visible` (optional): Defines whether the element is visible or not.
- `end` (optional): Marks the element as a game-ending condition, triggering the end of the game when interacted with. The `end` property is a string representing the end message displayed to the player when they encounter the element.

```js
createGame({
	//...
	templates: {
		R: {
			sprite: 6,
			sound: createSound('HIT', 999),
			visible: false,
			end: 'Game Over'
		},
		G: {
			sprite: 7,
			dialog: 'I am grass.',
			solid: false
		}
	}
	//...
})
```

## Map

The `map` configuration defines the layout of the game world in ASCII. Each character in the `map` corresponds to a `template` defined in the `templates` configuration. The `map` represents the spatial arrangement of game elements like walls, floors, obstacles, and interactive objects.

Drawing the map is similar to drawing a sprite.

- Each character used in the `templates` is interpreted.
- Spaces, tabs, and empty lines are ignored.
- Any other character represents an empty tile.

```js
createGame({
	//...
	templates: {
		X: {
			sprite: 0
		},
		G: {
			sprite: 7
		},
		R: {
			sprite: 4
		}
	},
	map: `
		XXXXXXXXXXXXXXXX
		X..............X
		X...........G..X
		X..............X
		X..............X
		X....R.........X
		X..............X
		XXXXXXXXXXXXXXXX
	`
	//...
})
```
