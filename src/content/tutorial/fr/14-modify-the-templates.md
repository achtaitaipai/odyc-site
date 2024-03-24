---
title: Modifier les modèles
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

En utilisant la fonction `setAll` fournie par l'objet `game`, vous pouvez modifier en une seule fois tous les objets qui ont le même symbole.

Cette fonction a besoin de deux paramètres : le symbole des éléments que l'on veut modifer et un objet qui représente les nouveaux paramètres.

```js
const game = createGame({
  //...
  templates: {
    X: {
      //...
    },
  },
  //...
});

game.setAll("X", {
  dialog: "Bonjour",
  sprite: 6,
});
```

> [!TIP]
> Il est également possible de supprimer tous les éléments ayant le même symbole et de créer un nouvel objet :
>
> ```js
> //supprime tous les "X"
> game.removeAll("X");
>
> //Crée un nouveau "X" à la case [3, 5]
> game.addToCell(3, 5, "X");
> ```

Essayer de modifier les `X` lorsque le joueur entre en collision avec l'un d'entre eux.
