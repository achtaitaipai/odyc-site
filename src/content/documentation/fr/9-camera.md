---
title: La Caméra
---

# La Caméra

## Taille de l'Écran

La taille de l'écran détermine la portion du monde du jeu visible pour le joueur. Pour la modifier, utilisez les paramètres `screenWidth` et `screenHeight` :

```js
createGame({
	//...
	screenWidth: 16,
	screenHeight: 12
})
```

## Suivi de la Caméra

Pour un suivi fluide du joueur, définissez un rectangle central invisible autour duquel la caméra s'ajustera automatiquement. Si le joueur se déplace en dehors de ce rectangle, la caméra se repositionnera pour le garder en vue :

```js
createGame({
	//...
	cameraWidth: 4,
	cameraHeight: 4
})
```

> [!WARNING]
> Pour obtenir un suivi fluide vous devez définir une valeur pour `cameraWidth` **et** `cameraHeight`
