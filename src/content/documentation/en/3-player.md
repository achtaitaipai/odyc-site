---
title: The Player
---

# The Player

The `player` configuration allows you to define the initial characteristics of the playable character in your game.

- The `sprite` property defines the visual appearance of the `player`.
- The `position` property sets the initial position of the `player` in the game world, expressed as an array containing the x and y coordinates.

> [!NOTE]
> Coordinates are measured from top to bottom and left to right.
>
> For example:
>
> - `[0, 0]` places the player in the top-left corner.
> - `[3, 5]` places the player in the third column from the left and the fifth row from the top.

```js
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
		position: [3, 5]
	}
})
```

## Dynamically Modifying the `player` State

To modify or check the state of the `player`, you can use the `game` object returned by the `createGame` function.

```js
const game = createGame({
	// Initial game settings
})

game.player.sprite = 5 // Changes the player's appearance
game.player.position = [6, 6] // Moves the player to position [6, 6]
```
