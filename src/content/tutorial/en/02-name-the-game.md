---
title: Naming Your Game
base: |
  createGame()
solution: |
  createGame({
      title: "My Game",
      background: 3,
  })
---

Now, let's start customizing your game. We'll begin by adding a background color and a title.

To add parameters, you need to tell the `createGame` function what you want your game to look like.

Here's an example:

```js
createGame({
	title: 'My Game',
	background: 3
})
```

> [!NOTE]
> Every time you modify the code, the game restarts from the beginning.
> When a `title` parameter is provided, you need to press space or enter to bypass the title screen.

For the `background` property, you can specify any number between 0 and 9. Each number corresponds to a different color. If the default palette doesn't suit your taste, you'll learn later how you can define your own colors.

Keyboard shortcuts for adding curly braces:

On Mac:

- `{` : <kbd>Option</kbd> + <kbd>(</kbd>
- `}` : <kbd>Option</kbd> + <kbd>)</kbd>

On PC:

- `{` : <kbd>AltGr</kbd> + <kbd>4</kbd>
- `}` : <kbd>AltGr</kbd> + <kbd>9</kbd>
