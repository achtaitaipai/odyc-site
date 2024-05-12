---
title: Les Sons
---

# Sons

La propriété `sound` des `templates` associe un effet sonore à l'élément.

## Créer un effet sonore

La méthode `createSound` accepte deux paramètres : le type de son (`RANDOM`, `PICKUP`, `LASER`, `EXPLOSION`, `POWERUP`, `HIT`, `JUMP` ou `BLIP`) et un nombre optionnel qui sert de graine pour la génération du son.

## Contrôle du volume

Vous pouvez ajuster le volume général du jeu en définissant le paramètre `volume`, celui-ci accepte un nombre entre 0 et 1.

> [!NOTE]
> Les sons sont générés grâce au superbe outil [jfxr](https://jfxr.frozenfractal.com/).

```js
createGame({
	//...
	templates: {
		G: {
			sound: createSound('HIT', 999)
			//...
		}
	},
	volume: 0.8
})
```

## Jouer un son de manière dynamique

Pour lancer un son indépendament des `templates`, vous pouvez utiliser l’objet `game` retourné par la fonction `createGame`.

```js
const game = createGame()

game.playSound('HIT', 999)
```
