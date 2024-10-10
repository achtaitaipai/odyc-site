---
title: The Game Object
---

# The Game Object

## Modifying a Tile

### getCell

This method allows you to retrieve or modify an element at a known position. Use `getCell`, returned by `createGame`, by specifying the `x` and `y` coordinates.

```js
const game = createGame()
game.getCell(2, 0).visible = false
```

The `getCell` method accepts the `x` and `y` coordinates of the tile and returns an object with the following properties:

- **readonly** `symbol`: string | null
- `sprite`: Tile | null
- `solid`: boolean
- `sound`: string | null
- **readonly** `position`: [number, number]
- `dialog`: string | null
- `visible`: boolean
- `end`: string | null
- `remove`: () => void

### setCell

Use `setCell` to modify a tile at a known position. This method takes the `x` and `y` coordinates, followed by an object containing the properties to modify.

```js
const game = createGame()
game.setCell(3, 4, {
	visible: false,
	dialog: 'Hello'
})
```

## Modifying Multiple Elements

Use `setAll` to modify all elements with the same symbol. This method takes the symbol of the elements and an object containing the properties to modify.

```js
const game = createGame()
game.setAll('#', {
	visible: false
})
```

## Adding an Element to a Tile

`addToCell` allows you to add an element, defined in the templates, to a specific position.

```js
const game = createGame()
game.addToCell(3, 2, '#')
```

This method requires the `x` and `y` coordinates of the tile, along with the symbol of the template.

## Getting the World Dimensions

To get the dimensions of the world, use the `width` and `height` properties, which are read-only.

```js
const game = createGame()
alert(`width: ${game.width}, height: ${game.height}`)
```

## Loading a Map

To load a new map, use `loadMap`. This method takes a new map as an argument and, optionally, a new player position.

```js
const game = createGame()
game.loadMap(
	`
  ########
  #......#
  #......#
  #......#
  #......#
  #......#
  #......#
  ########
  `,
	[3, 5]
)
```
