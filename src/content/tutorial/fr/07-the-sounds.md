---
title: Les Sons dans le Jeu
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
      X:{
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
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
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
      X:{
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
        sound:createSound("POWERUP")
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
    `,
    volume: 0.8,
  })
---

Intégrer des effets sonores dans votre jeu peut grandement améliorer l'expérience utilisateur en ajoutant une dimension immersive et interactive. Pour cela, vous devez utiliser le paramètre `sound` en combinaison avec la fonction `createSound`.

La configuration ressemble à ceci :

```js
//...
  templates: {
    X: {
      //...
      sound: createSound('HIT', 123),
    },
  },
//...
```

La fonction `createSound` accepte deux paramètres : le type de son et un nombre optionnel qui sert de graine pour la génération du son.

Il y a 9 types de sons disponibles :

- `DEFAULT`
- `RANDOM`
- `PICKUP`
- `LASER`
- `EXPLOSION`
- `POWERUP`
- `HIT`
- `JUMP`
- `BLIP`

Si aucun nombre n'est fourni, le son généré sera différent à chaque lancement du jeu. Pour conserver un son spécifique, vous pouvez ajouter un nombre. Chaque nombre générera un son unique.

Les sons sont générés grâce au superbe outil [jfxr](https://jfxr.frozenfractal.com/).

> [!TIP]
> Le volume général du jeu peut être ajusté avec le paramètre `volume`, qui accepte une valeur entre 0 et 1.
>
> ```js
> createGame({
>   //...
>   volume: 0.8,
> });
> ```
