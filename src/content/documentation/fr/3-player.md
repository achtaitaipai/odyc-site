---
title: Le Player
---

# Le Player

La configuration du `player` vous permet de définir les caractéristiques initiales du personnage jouable dans votre jeu.

- La propriété `sprite` définit l'aspect visuel du `player`.
- La propriété `position` définit la position initiale du `player` dans le monde du jeu, exprimée par un tableau contenant les coordonnées x et y.

> [!NOTE]
> Les coordonnées sont mesurées de haut en bas et de gauche à droite.
>
> Par exemple :
>
> - `[0, 0]` place le joueur dans le coin supérieur gauche.
> - `[3, 5]` place le joueur à la troisième colonne depuis la gauche et à la cinquième ligne depuis le haut.

```js
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
    position: [3, 5],
  },
});
```

## Modification dynamique de l'état du `player`

Pour modifier ou consulter l'état du `player`, vous pouvez utiliser l'objet `game` retourné par la fonction `createGame`.

```js
const game = createGame({
  // Paramètres initiaux du jeu
});

game.player.sprite = 5; // Change l'apparence du joueur
game.player.position = [6, 6]; // Déplace le joueur à la position [6, 6]
```
