---
title: Integrating Events
base: |
  createGame({
    player: {
        sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
        `,
        position: [4, 4],
    },
    templates: {
      C: {
        sprite: `
            ..5555..
            .5....5.
            5......5
            5......5
            5......5
            5......5
            .5....5.
            ..5555..
        `,
        sound: createSound("POWERUP"),
      }
    },
    map:`
    ........
    .C......
    .....C..
    ........
    .C......
    ......C.
    ........
    ...C....
    `
  })
solution: |
  createGame({
    player: {
        sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
        `,
        position: [4, 4],
    },
    templates: {
      C: {
        sprite: `
            ..5555..
            .5....5.
            5......5
            5......5
            5......5
            5......5
            .5....5.
            ..5555..
        `,
        sound: createSound("POWERUP"),
        onCollide: function(target){
          target.remove()
        }
      }
    },
    map:`
    ........
    .C......
    .....C..
    ........
    .C......
    ......C.
    ........
    ...C....
    `
  })
---

So far, we've learned to create a static game world where the player can move freely. However, to make this world dynamic and interactive, it's essential to integrate events that modify the game during certain actions.

### Event Example

To make the coins `C` disappear when touched by the player, you can use the `onCollide` event:

```js
createGame({
  //...
  templates: {
    C: {
      //...
      onCollide: function (target) {
        target.remove();
      },
    },
  },
  //...
});
```

This function is automatically triggered when a collision is detected between the player and the object `C`, leading to the removal of the object from the game.

### Types of Events

There are three main types of events you can use to enrich interaction in your game:

- **Collision (`onCollide`)**: Triggered when a collision between the player and the object occurs.
- **Entry (`onEnter`)**: Activated when the player enters a cell containing the object.
- **Exit (`onLeave`)**: Occurs when the player leaves a cell containing the object.

These events open the door to a multitude of interactive possibilities, allowing you to create puzzles, quests, or simply add elements of surprise and exploration to your game. Experiment with these functions to discover new ways to engage players in your game world.
