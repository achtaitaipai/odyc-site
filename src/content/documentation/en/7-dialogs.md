---
title: Dialogs
---

# Dialogs

The dialog box is triggered when the player interacts with an element whose `dialog` property is set.

```js
createGame({
	templates: {
		'@': {
			dialog: 'Hello, how are you?'
		}
	}
})
```

> [!NOTE]
> To define how the text will be broken into lines, you can insert line breaks.
>
> ```js
> //...
> dialog: "Hello,\nhow are you?",
> //...
> ```

## Dynamically Opening the Dialog Box

To open the dialog box dynamically, you can also use the `game` object returned by the `createGame` function.

```js
const game = createGame()

game.openDialog('Hello!')
```

## Configuring the Dialog Box

To configure the colors of the dialog box, you need to use the `dialogColor` and `dialogBackground` parameters. These parameters accept strings that can be interpreted as [CSS colors](https://developer.mozilla.org/en/docs/Web/CSS/color_value).

```js
createGame({
	//...
	dialogColor: 'red',
	dialogBackground: '#228be6'
})
```
