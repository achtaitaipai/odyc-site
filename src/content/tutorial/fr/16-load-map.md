---
title: Charger Dynamiquement des Cartes
base: |
  const room1 = `  
    xxxxxxxx
    x.....Ox
    x......x
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const room2 = ` 
    xxxxxxxx
    x....x.x
    x....xHx
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const game = createGame({
    player: {
      sprite: 4,
      position: [1, 1],
    },
    templates: {
      x: {
        sprite: 2,
      },
      H: {
        sprite: `        
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
        `,
      },
      O: {
        sprite: 0,
        solid: false,
        onEnter: function () {
        },
      },
    },
    map: room1,
  })
solution: |
  const room1 = `  
    xxxxxxxx
    x.....Ox
    x......x
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const room2 = ` 
    xxxxxxxx
    x....x.x
    x....xHx
    x......x
    x......x
    x......x
    x......x
    xxxxxxxx
  `

  const game = createGame({
    player: {
      sprite: 4,
      position: [1, 1],
    },
    templates: {
      x: {
        sprite: 2,
      },
      H: {
        sprite: `        
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
          .2.2.2.2
        `,
      },
      O: {
        sprite: 0,
        solid: false,
        onEnter: function () {
          game.loadMap(room2)
        },
      },
    },
    map: room1,
  })
---

Dans l'exemple ci-contre nous voudrions que lorsque le player arrive sur le carré noir, il soit téléporté dans la `room2`.

La méthode `loadMap` ouvre la voie à une variété d'applications telles que la progression à travers des niveaux, l'activation de téléporteurs, la découverte de portes secrètes...

### Usage Basique

Pour charger une nouvelle carte, invoquez la méthode `loadMap` sur l'objet `game`, en passant la carte désirée comme paramètre :

```js
game.loadMap(level2)
```

### Positionnement du Joueur

La fonction `loadMap` offre également la possibilité de repositionner le joueur à un nouvel emplacement sur la carte chargée, offrant ainsi une plus grande flexibilité dans la gestion des scènes et des transitions :

```js
game.loadMap(level2, [3, 5])
```

> [!WARNING]
> Lorsque vous mettez fin au jeu via le paramètre `end` d'un template ou la méthode `game.end`, le jeu sera réinitialisé à son état suivant le dernier appel à `game.loadMap`. Il est donc important de planifier l'utilisation de cette méthode dans le cadre de votre flux de jeu pour assurer une expérience utilisateur cohérente.
