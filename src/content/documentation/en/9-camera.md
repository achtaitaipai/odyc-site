---
title: The Camera
---

# The Camera

## Screen Size

The screen size determines the portion of the game world visible to the player. To adjust it, use the `screenWidth` and `screenHeight` parameters:

```js
createGame({
	//...
	screenWidth: 16,
	screenHeight: 12
})
```

## Camera Tracking

For smooth player tracking, define an invisible central rectangle around which the camera will automatically adjust. If the player moves outside of this rectangle, the camera will reposition to keep the player in view:

```js
createGame({
	//...
	cameraWidth: 4,
	cameraHeight: 4
})
```

> [!WARNING]
> To achieve smooth tracking, you must set values for both `cameraWidth` **and** `cameraHeight`.
