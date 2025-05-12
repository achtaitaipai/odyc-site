---
title: The Filters
base: |
  const game = createGame({
      player: {
        sprite:`
      ..111...
      .23132..
      1211121.
      1224221.
      1.121.1.
      2.2.2.2.
      3.1.1.3.
      ..3.3...
    `,
        position: [1, 1]
      },
      templates: {
        x: {
          sprite: `
      ........
      .111.11.
      .222.12.
      .....12.
      .11.....
      .12.111.
      .12.122.
      ........
    `,
        },
      },
      map: `
        xxxxxxxx
        x....x.x
        x....x.x
        x....x.x
        x......x
        x....x.x
        x....x.x
        xxxxxxxx
        `,
    background: 0,
  })
solution: |
  const game = createGame({
      player: {
        sprite:`
      ..111...
      .23132..
      1211121.
      1224221.
      1.121.1.
      2.2.2.2.
      3.1.1.3.
      ..3.3...
    `,
        position: [1, 1]
      },
      templates: {
        x: {
          sprite: `
      ........
      .111.11.
      .222.12.
      .....12.
      .11.....
      .12.111.
      .12.122.
      ........
    `,
        },
      },
      map: `
        xxxxxxxx
        x....x.x
        x....x.x
        x....x.x
        x......x
        x....x.x
        x....x.x
        xxxxxxxx
        `,
    background: 0,
    filter: {
        name:"crt",
        settings: {
          warp: 0.7,
          lineIntensity: 0.2,
          lineWidth: 0.6,
          lineCount: 85
        }
    }
  })
---

In some cases, the pixelated look may not fit the style of your game. To address this, you can use **filters**.

Filters change the overall appearance of your game.

```js
const game = createGame({
	///...
	filter: {
		name: 'crt' // crt | fractal | neon
	}
})
```

If needed, you can also adjust the filter settings. The `filter` object accepts a `settings` property, whose parameters vary depending on the selected filter. Check the documentation for more details.

```js
const game = createGame({
	///...
	filter: {
		name: 'crt',
		settings: {
			warp: 0.7,
			lineIntensity: 0.2,
			lineWidth: 0.6,
			lineCount: 85
		}
	}
})
```

> \[!WARNING]
> Using filters can have a significant impact on game performance. A game with a filter may not run properly on older machines.
