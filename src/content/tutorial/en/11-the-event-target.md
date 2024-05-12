---
title: Event Target Manipulation
base: |
  createGame({
    templates: {
      X: {
        sprite: 3,
      }
    },
    map: `
        ........
        .X......
        ........
        ........
        ........
        ........
        ........
        ........
    `
  })
solution: |
  createGame({
    templates: {
      X: {
        sprite: 3,
        onCollide: function(target){
          target.visible = !target.visible
        }
      }
    },
    map: `
        ........
        .X......
        ........
        ........
        ........
        ........
        ........
        ........
    `
  })
---

In the previous section, `target.remove()` was introduced as a means to remove an object from the game. However, the target object (`target`) in the functions `onCollide`, `onEnter`, or `onLeave` offers much more potential.

### Modifiable Properties

When an event is triggered, the target object is passed as a parameter to the associated function. This allows you to modify or even delete the object in question. Here are the properties you can read and modify:

- **Sprite (`sprite`)**: Changes the appearance of the object.
- **Dialogue (`dialog`)**: Modifies the text displayed during interaction.
- **Solidity (`solid`)**: Determines whether the object is passable.
- **Visibility (`visible`)**: Controls the display of the object.
- **Sound (`sound`)**: Changes the sound played during interaction.
- **End (`end`)**: Defines an end message or concluding action.

### Read-Only Properties

Some properties are read-only:

- **Symbol (`symbol`)**: The character representing the object in the `map`.
- **Position (`position`)**: The coordinates of the object in the game.

### Object Removal

The object can be removed with the `remove()` method, which takes it out of the game:

```js
target.remove()
```

### Practical Example

Imagine wanting to toggle an object `X`'s visibility each time the player collides with it. Use the `visible` property in an `onCollide` function:

```js
onCollide: function(target) {
  target.visible = !target.visible;
}
```
