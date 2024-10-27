---
title: Sprites
---

# Sprites

`Sprites` are graphical representations made up of multi-line character strings. Each line corresponds to a row of pixels, and each character represents an individual pixel.

- **Digits (0-9)**: Each digit corresponds to a specific color, for instance: 0 for black, 1 for white, 2 for gray, etc.
- **New lines**: Indicate the start of a new row of pixels.
- **Whitespace, tabs, and blank lines**: Are ignored and do not affect the sprite's display.
- **Other characters**: Represent a transparent pixel.

> [!TIP]
> To create a solid rectangle, simply use the digit for the desired color.

### Dimensions

By default, `sprites` are 8x8 pixel squares. You can adjust this size by modifying the `cellWidth` and `cellHeight` properties.

```js
createGame({
	//...
	cellWidth: 16,
	cellHeight: 32
})
```

## Colors

### Default Colors

Here is a table of default colors with their hexadecimal codes:

| Index | Color                                                       | Hex Code |
| ----- | ----------------------------------------------------------- | -------- |
| 0     | <span style="color: #212529">black</span>                   | #212529  |
| 1     | <span style="color: #f8f9fa; background:black">white</span> | #f8f9fa  |
| 2     | <span style="color: #ced4da">gray</span>                    | #ced4da  |
| 3     | <span style="color: #228be6">blue</span>                    | #228be6  |
| 4     | <span style="color: #fa5252">red</span>                     | #fa5252  |
| 5     | <span style="color: #fcc419">yellow</span>                  | #fcc419  |
| 6     | <span style="color: #ff922b">orange</span>                  | #ff922b  |
| 7     | <span style="color: #40c057">green</span>                   | #40c057  |
| 8     | <span style="color: #f06595">pink</span>                    | #f06595  |
| 9     | <span style="color: #a52f01">brown</span>                   | #a52f01  |

> [!NOTE]
> These colors come from the excellent [open-color](https://yeun.github.io/open-color/) palette.

### Customizing Colors

You can customize the colors used for `sprites` by defining an array of strings that can be interpreted as [CSS colors](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value). These colors can be hexadecimal codes, color names, RGB values, etc.

Example:

```js
createGame({
	//...
	colors: [
		'red',
		'orange',
		'lab(50% 40 59.5)',
		'hwb(12 50% 0%)',
		'#f06595',
		'#f09',
		'oklch(60% 0.15 50)',
		'hsl(150 30% 60%)',
		'light-dark(white, black)',
		'black'
	]
})
```
