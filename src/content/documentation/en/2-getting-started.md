---
title: Getting Started
---

# Getting Started with OdycJs

## 1. Using the Online Editor

The easiest and quickest way to start creating a game is to use the [online editor](/en/playground).

## 2. Importing the Library from a CDN

For those who prefer working locally without a complex build setup, you can import the library from a CDN.

- Create an HTML file on your computer.
- Insert the following code:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://www.unpkg.com/odyc@0.0.18/dist/index.global.js"></script>
	</head>
	<body>
		<script>
			const game = odyc.createGame({
				title: 'My Awesome Game'
			})
		</script>
	</body>
</html>
```

- Open your `html` file in a browser.

## 3. Using a Bundler

If you want to use a bundler like [Vite](https://vitejs.dev/):

- Install OdyC via npm:

```bash
npm install odyc
```

- Import OdyC into your main JavaScript or TypeScript file:

```javascript
import { createGame } from 'odyc'

const game = createGame({
	title: 'My Awesome Game'
})
```
