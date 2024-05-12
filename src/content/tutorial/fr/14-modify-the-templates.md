---
title: Modification Globale des Modèles
base: |
  const game = createGame({
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
      X: {
        sprite: 9
      },
    },
    map: `
      XXXXXXXX
      X.X....X
      X.X.XX.X
      X.X..X.X
      X.X..X.X
      X.XXXX.X
      X......X
      XXXXXXXX
    `
  })
solution: |
  const game = createGame({
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
      X: {
        sprite: 9,
        onCollide: function(){
          game.setAll("X", 
            {
              sprite: game.player.sprite
            }
          )
        }
      },
    },
    map: `
      XXXXXXXX
      X.X....X
      X.X.XX.X
      X.X..X.X
      X.X..X.X
      X.XXXX.X
      X......X
      XXXXXXXX
    `
  })
---

Utiliser la fonction `setAll` de l'objet `game` permet de modifier simultanément tous les objets partageant le même symbole. Cette fonction nécessite deux paramètres : le symbole des éléments à modifier et un objet représentant les nouveaux paramètres à appliquer.

```js
const game = createGame({
	// Configuration initiale du jeu
	templates: {
		X: {
			// Configuration initiale de X
		}
	}
	// Autres configurations
})

game.setAll('X', {
	dialog: 'Bonjour',
	sprite: 6
})
```

> [!TIP]
> Vous pouvez également supprimer tous les éléments ayant le même symbole et ensuite créer un nouvel objet à une position spécifique :
>
> ```js
> // Supprime tous les "X"
> game.removeAll('X')
>
> // Crée un nouveau "X" à la position [3, 5]
> game.addToCell(3, 5, 'X')
> ```

Cette fonctionnalité permet de créer des mécanismes de jeu où les interactions du joueur avec un élément peuvent influencer l'ensemble du niveau, comme changer l'apparence de tous les obstacles similaires lors d'une collision. Expérimentez avec cette capacité pour dynamiser vos niveaux et proposer des puzzles interactifs et évolutifs qui enrichissent l'expérience de jeu.
