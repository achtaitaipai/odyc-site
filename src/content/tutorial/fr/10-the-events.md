---
title: Les évènements
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
        solid: false,
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
        solid: false,
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

Jusqu'ici nous avons vu comment créer un jeu statique, le joueur peut se déplacer dedans, mais le monde n'évolue pas.

Pour palier à cela, nous allons créer des fonctions dans lesquels nous modifieront le jeu, lorsqu'un évènement a lieu.

Il est possible de définir des fonctions pour trois types d'évènements:

- lorsque le joueur rentre en collision avec l'objet : `onCollide`
- lorsque le joueur rentre dans une case qui contient l'objet : `onEnter`
- lorsque le joueur quitte une case qui contient l'objet : `onLeave`

Par exemple, pour que les pièces `C` disparaissent lorsque le `player` rentre sur leurs cases :

```js
createGame({
  //...
  templates: {
    C: {
      sprite: 5,
      sound: createSound("POWERUP"),
      onCollide: function (target) {
        target.remove();
      },
    },
  },
  //...
});
```
