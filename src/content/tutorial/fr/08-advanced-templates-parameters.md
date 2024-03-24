---
title: Paramètres Avancés des Templates
base: |
  createGame({
    player: {
      sprite: `
        ...55...
        ..5885..
        .666666.
        6.6666.6
        8.6666.8
        ..3333..
        .333333.
        ..9..9..
      `,
      position: [0, 4],
    },
    templates: {
      F: {
        sprite: 1,
        dialog: "Bouuh je suis un fantôme.",
      },
      E: {
        sprite: `
          01010101
          10101010
          01010101
          10101010
          01010101
          10101010
          01010101
          10101010
        `,
      }
    },
    map: `
      ........
      ........
      ........
      .......F
      ......FE
      .......F
      ........
      ........
    `,
    background: 2
  })
solution: |
  createGame({
    player: {
      sprite: `
        ...55...
        ..5885..
        .666666.
        6.6666.6
        8.6666.8
        ..3333..
        .333333.
        ..9..9..
      `,
      position: [0, 4],
    },
    templates: {
      F: {
        sprite: 1,
        dialog: "Bouuh je suis un fantôme.",
        solid: false,
        visible: false,
      },
      E: {
        sprite: `
          01010101
          10101010
          01010101
          10101010
          01010101
          10101010
          01010101
          10101010
        `,
        end: "Victoire",
      }
    },
    map: `
      ........
      ........
      ........
      .......F
      ......FE
      .......F
      ........
      ........
    `,
    background: 2
  })
---

Les paramètres avancés des templates ouvrent un éventail de possibilités pour enrichir votre jeu :

- **Solidité (`solid`)** : Ce paramètre détermine si un objet agit comme un obstacle infranchissable. Un template marqué comme `solid: true` bloquera le passage du joueur, simulant un mur ou un objet physique. À l'inverse, `solid: false` permet au joueur de passer à travers l'objet, idéal pour des éléments comme des fantômes ou des effets d'arrière-plan.

- **Visibilité (`visible`)** : Contrôle si l'objet doit être rendu visuellement sur la carte. `visible: false` rend l'objet invisible, bien qu'il puisse toujours interagir avec le joueur si d'autres paramètres le permettent. Cela peut être utile pour des pièges secrets ou des points de passage cachés.

- **Fin du jeu (`end`)** : Spécifie un message à afficher lorsque le joueur interagit avec l'objet. Cela peut marquer la fin d'un niveau ou la conclusion du jeu. Par exemple, `end: "Victoire"` peut afficher un message de félicitations avant de recommencer ou de terminer le jeu.

Dans notre exemple, le template `E` déclenche la fin du jeu avec un message de victoire lors de l'interaction, tandis que les fantômes `F` sont configurés pour être à la fois invisibles et intangibles, ajoutant une couche de mystère et de stratégie au gameplay.

Ces paramètres offrent une flexibilité considérable dans la conception de vos niveaux, permettant des interactions et des défis uniques adaptés à votre vision.
