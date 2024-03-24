---
title: Modifier le héros
base: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            //lorsque le joueur entre dans la zone noire
          },
          onLeave: function(){
            //lorsque le joueur quitte la zone noire
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
solution: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            game.player.sprite = 1
          },
          onLeave: function(){
            game.player.sprite = 0
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
---

La fonction `createGame` que l'on utilise depuis le début de ce tutoriel, donne accès au contexte du jeu.

Avec ce contexte vous allez pouvoir modifier votre jeu de façon dynamique. Vous pouvez le faire à l'intérieur et à l'extérieur du jeu!

Par exemple pour modifier le player vous pourriez le faire de cette façon:

```js
const game = createGame({
  //....
});
game.player.sprite = 8;
game.player.position = [4, 4];
```

Essayez de faire en sorte que le joueur devienne blanc lorsqu'il rentre dans la zone noire et qu'il redevienne noire en quittant cette zone.
