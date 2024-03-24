---
title: Dynamic Hero Modification
base: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            // When the player enters the specified area
          },
          onLeave: function(){
            // When the player leaves the specified area
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
solution: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            game.player.sprite = 1 // Changes the player sprite to white
          },
          onLeave: function(){
            game.player.sprite = 0 // Changes the player sprite back to black
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
---

The `createGame` function, which we've been using since the beginning of this tutorial, provides access to the game's context. This context allows you to dynamically modify the game, whether within event functions or outside the main game logic.

### Modifying the Hero

To interact with and modify the player's properties, you can act directly on the `player` object accessible through the game's context:

```js
const game = createGame({
  // Initial game setup
});
// Modifying the player's appearance
game.player.sprite = 8;
// Repositioning the player
game.player.position = [4, 4];
```

### Interaction Through Events

The `onEnter`, `onCollide`, and `onLeave` events offer a unique opportunity to modify the player's state based on their interaction with the environment.

### Usage Example

Imagine you want to change the player's color when they pass through a specific area to indicate a change in state, such as a power-up or a temporary effect:

```js
// When entering the area, the player becomes white
onEnter: function() {
  game.player.sprite = 1;
}
// When leaving the area, the player turns back to black
onLeave: function() {
  game.player.sprite = 0;
}
```

This method allows for the creation of dynamic interactions and visual effects that enrich the gaming experience and encourage exploration. Experiment with different properties and events to discover new ways to engage players in your game world.
