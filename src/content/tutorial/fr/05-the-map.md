---
title: La carte
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
      X:{
        sprite: 9
      },
    },
    map:`
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

Pour configure **la carte** il faut définir les `templates`. On peut voir ceux-ci comme les modèles à partir desquels les objets de notre jeux vont être fabriqués.

Imaginons que nous souhaitons créer des murs.

```js
createGame({
  //...
  templates: {
    X: {
      sprite: 9,
    },
  },
});
```

Le charactère `X` peut-être remplacé par n'importe quel charactère. Choisissez celui qui vous semble le mieux correspondre visuellement, car nous allons maintenant dessiner avec!

Pour utiliser notre `template`, ça se passe dans le paramètre `map`. Celui-ci ressemble beaucoup aux `sprite`. C'est ici que l'on décrit le monde dans lequel évolue le joueur.

```js
createGame({
  //...
  map: `
      XXXXXXXX
      X......X
      X......X
      X......X
      X......X
      X......X
      X......X
      XXXXXXXX
    `,
});
```

- Chaque caractère présent dans `templates` sera interprété comme un objet du jeu.
- Les nouvelles lignes indiquent le début d'une nouvelle rangée
- Les espaces blancs, les tabulations et les lignes vides sont ignorés.
- Tout autre caractère représente une case vide.

À vous! Ajoutez des objets, agrandissez la map... Bref expérimentez!
