---
title: La Carte
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

La création d'une **carte** est essentielle pour donner vie à votre jeu. Celle-ci se compose de deux éléments principaux : les `templates` et le paramètre `map`.

### Les Templates

Les `templates` sont des modèles qui définissent les éléments réutilisables dans votre jeu, tels que les murs, les ennemis ou les trésors. Vous pouvez les imaginer comme des blocs de construction.

Pour définir un template pour un mur, par exemple :

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

Le caractère `X` représente ici un mur et est associé à un sprite spécifique. Vous pouvez utiliser n'importe quel caractère pour représenter différents éléments dans vos templates.

### Dessiner la Map

La `map` utilise les templates définis précédemment pour créer l'environnement du jeu. Chaque caractère dans la `map` correspond à un template et permet de dessiner la carte.

Voici comment utiliser le template de mur pour dessiner un enclos :

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

- Chaque caractère présent dans `templates` sera transformé en l'objet correspondant dans le jeu.
- Les nouvelles lignes marquent le début d'une nouvelle rangée.
- Les espaces, tabulations et lignes vides sont ignorés.
- Tout autre caractère est interprété comme un espace vide.

C'est à votre tour maintenant ! Ajoutez des objets, agrandissez la map, expérimentez pour créer un monde riche et intéressant pour votre jeu.
