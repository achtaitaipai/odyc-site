---
title: Events
---

# Events

Events allow you to trigger actions when certain interactions occur. To use them, you need to define them within the `templates`. There are three types of events:

- **onCollide**: Triggered when the player collides with the element.
- **onEnter**: Triggered when the player enters a tile that contains the element.
- **onLeave**: Triggered when the player leaves a tile that contains the element.

```js
createGame({
	templates: {
		x: {
			onCollide: function () {
				alert(1)
			},
			onEnter: function () {
				alert(2)
			},
			onLeave: function () {
				alert(3)
			}
		}
	}
})
```

## Event Target

When an event is triggered, the target object is passed as a parameter to the associated function. This allows you to modify or even remove the object in question.

### Modifiable Properties

Here are the properties that you can read and modify:

- **Sprite (`sprite`)**: Changes the appearance of the object.
- **Dialog (`dialog`)**: Modifies the text to be displayed during interaction.
- **Solid (`solid`)**: Determines whether the object can be passed through.
- **Visible (`visible`)**: Controls the display of the object.
- **Sound (`sound`)**: Changes the sound played during interaction.
- **End (`end`)**: Defines an end message or concluding action.

### Read-Only Properties

Some properties are read-only:

- **Symbol (`symbol`)**: The character representing the object in the `map`.
- **Position (`position`)**: The coordinates of the object in the game.

### Removing the Object

The object can be removed using the `remove()` method, which removes it from the game:

```js
target.remove()
```
