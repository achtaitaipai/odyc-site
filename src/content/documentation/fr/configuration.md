---
title: Configuration
---

# La configuration

## Configuration par défaut

La configuration par défaut est la suivante:

```js
{
	messageBackground: '#212529',
	messageColor: '#f8f9fa',
	dialogBackground: '#212529',
	dialogColor: '#f8f9fa',
	colors: [
		'#212529', //black
		'#f8f9fa', //white
		'#ced4da', //gray
		'#228be6', //blue
		'#fa5252', //red
		'#fcc419', //yellow
		'#ff922b', //orange
		'#40c057', //green
		'#f06595', //pink
		'#a52f01', //brown
	],
	screenWidth: 8,
	screenHeight: 8,
	cellWidth: 8,
	cellHeight: 8,
	background: 1,
	volume: 0.5,
	controls: {
		LEFT: 'ArrowLeft',
		RIGHT: 'ArrowRight',
		UP: 'ArrowUp',
		DOWN: 'ArrowDown',
		ACTION: ['Enter', 'Space'],
	},
	player: {
		sprite: 0,
	},
	templates: {},
	map: `
		........
		........
		........
		........
		........
		........
		........
		........
	`,
}
```
