---
title: Messages
---

# The Message Box

The message box is a component used to display important information such as the game title, end messages, or other dynamic notifications during gameplay.

## The Title

At the start of the game, you can set up a title screen using the `title` parameter.

```js
createGame({
	title: 'My Awesome Game'
})
```

You can add line breaks to control how your title is displayed.

```js
createGame({
	title: `** AN AWESOME GAME **






          by John Doe`
})
```

## The End

The same message box is used to signal the end of the game. This typically happens by interacting with an element that triggers the `end` parameter.

```js
createGame({
	//...
	templates: {
		X: {
			sprite: 2,
			end: 'Game Over...'
		}
	}
	//...
})
```

You can also end the game by using the `game` object returned by the `createGame` function.

```js
const game = createGame()

game.end('Game Over...')
```

## Dynamically Opening the Message Box

To display dynamic messages during the game, use the `openMessage` method from the `game` object:

```js
const game = createGame()

game.openMessage('This is a message')
```

## Displaying Multiple Messages in Sequence

In all the previously mentioned situations, you can open multiple messages in sequence. To do this, you need to provide an array of strings.

```js
const game = createGame({
	title: ['Game', 'by someone']
})
```

## Configuring the Message Box

To configure the colors of the message box, you need to use the `messageColor` and `messageBackground` parameters. These parameters accept strings that can be interpreted as [CSS colors](https://developer.mozilla.org/en/docs/Web/CSS/color_value).

```js
createGame({
	//...
	messageColor: 'red',
	messageBackground: '#228be6'
})
```
