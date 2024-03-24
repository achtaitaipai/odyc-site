---
title: Les autres paramètres des templates
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
        end: "Gagné",
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

Pour configurer les objets vous avez à votre disposition d'autres paramètres:

- `solid`: Définit si le `template`, agit comme un mur. Il peut être `true` ou `false`
- `visible`: Définit si le `template` doit être dessiné. Il peut être `true` ou `false`
- `end`: Permet de définir un message de fin. Lorsque le `player` interagit avec un `template` dont le paramètre `end` est définit. Le message de fin s'affiche, puis le jeu est relancé.

Dans l'exemple ci-contre, nous voudrions que le drapeau d'arrivée `E` déclenche la fin du jeu et que les fantômes `F` soient invisibles et traversables.
