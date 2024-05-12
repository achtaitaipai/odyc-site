---
title: Intégration des Événements
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

Jusqu'à présent, nous avons appris à créer un univers de jeu statique où le joueur peut se déplacer librement. Toutefois, pour dynamiser cet univers et le rendre interactif, il est essentiel d'intégrer des événements qui modifient le jeu lors de certaines actions.

### Exemple d'Événement

Pour que les pièces `C` disparaissent lorsqu'elles sont touchées par le joueur, vous pouvez utiliser l'événement `onCollide` :

```js
createGame({
	//...
	templates: {
		C: {
			//...
			onCollide: function (target) {
				target.remove()
			}
		}
	}
	//...
})
```

Cette fonction se déclenche automatiquement lorsqu'une collision est détectée entre le joueur et l'objet `C`, entraînant la suppression de l'objet du jeu.

### Types d'Événements

Il existe trois types d'événements principaux que vous pouvez exploiter pour enrichir l'interaction dans votre jeu :

- **Collision (`onCollide`)** : Se déclenche lorsqu'une collision entre le joueur et l'objet se produit.
- **Entrée (`onEnter`)** : Activé quand le joueur pénètre dans une case contenant l'objet.
- **Sortie (`onLeave`)** : Se produit lorsque le joueur quitte une case contenant l'objet.
