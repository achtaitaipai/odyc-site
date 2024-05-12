---
title: Camera Control
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
      position: [16, 17],
    },
    templates: {
      X: {
        sprite: 0,
      },
      E: {
        end: "Well done"
      }
    },
    map: `
      XEXXXXXXXXXXXXXXXXXXXXXX
      X.XXXXXXXXXXXXXXXXXXXXXX
      X.X..................XXX
      X.X.X.XXXXXX.XXXXXXX.XXX
      X...X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X........X.......XXX
      XXXXXXXXXXXXXX.XXXXXXXXX
      X..............XXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.....................XX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXX.................XXXX
      XXX.XXXXX.XXXXXXXXX.XXXX
      XXX.XXXXX...........XXXX
      XXX.XXXXXXXXXXXXXXXXXXXX
      XXX.XX................XX
      XXX....XXXXXXXXXXXXXX.XX
      XXXXXXXXXXXXXXXXXXXXXEXX
    `,
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
      position: [16, 17],
    },
    templates: {
      X: {
        sprite: 0,
      },
      E: {
        end: "Well done"
      }
    },
    map: `
      XEXXXXXXXXXXXXXXXXXXXXXX
      X.XXXXXXXXXXXXXXXXXXXXXX
      X.X..................XXX
      X.X.X.XXXXXX.XXXXXXX.XXX
      X...X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X........X.......XXX
      XXXXXXXXXXXXXX.XXXXXXXXX
      X..............XXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.....................XX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXX.................XXXX
      XXX.XXXXX.XXXXXXXXX.XXXX
      XXX.XXXXX...........XXXX
      XXX.XXXXXXXXXXXXXXXXXXXX
      XXX.XX................XX
      XXX....XXXXXXXXXXXXXX.XX
      XXXXXXXXXXXXXXXXXXXXXEXX
    `,
    screenWidth: 12,
    screenHeight: 12,
    cameraWidth: 4,
    cameraHeight: 4,
  })
---

Camera management is crucial for providing an immersive and enjoyable gaming experience. By adjusting the camera view, you control how and what the player sees on the screen, directly influencing their perception and interaction with the game.

### Screen Size

The screen size determines the portion of the game world visible to the player. To modify it, use the `screenWidth` and `screenHeight` parameters:

```js
createGame({
	//...
	screenWidth: 16,
	screenHeight: 12
})
```

These adjustments allow you to widen or narrow the view based on gameplay objectives.

### Camera Tracking

For smooth player tracking, define an invisible central rectangle around which the camera will automatically adjust. If the player moves outside this rectangle, the camera will reposition to keep them in view:

```js
createGame({
	//...
	cameraWidth: 4,
	cameraHeight: 4
})
```

> [!NOTE]
> While adjusting these parameters might seem complex at first, experimenting with different values is crucial to finding the perfect balance for your game. They are a powerful tool for shaping the player's experience.

By refining camera management and screen view, you create a gameplay space that supports and enriches the narrative, challenges, and immersion in your game world.
