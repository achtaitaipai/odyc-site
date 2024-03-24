---
title: Un peu de son
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

Pour paramétrer les effets sonores, il faut utiliser le paramètre `sound` et la fonction `createSound`.

Voici à quoi ça ressemble :

```js
//...
  templates: {
    X: {
      //...
      sound: createSound('HIT',123),
    },
  },
//...
```

La fonction `createSound` prend deux paramètres: le type de son et un nombre facultatif.

Pour le type de son vous avez 9 possibilités :

- `DEFAULT`
- `RANDOM`
- `PICKUP`
- `LASER`
- `EXPLOSION`
- `POWERUP`
- `HIT`
- `JUMP`
- `BLIP`

Si vous ne fournissez pas de nombre le son sera différent à chaque fois que le jeu se relancera. Pour éviter celà vous pouvez ajouter un nombre. Pour chaque nombre vous aurez un son différent.

Les sons sont générés avec l'incroyable outil [jfxr](https://jfxr.frozenfractal.com/).

> [!TIP]
> Vous pouvez régler le volume général du jeu avec le paramètre `volume` celui-ci accepte un nombre entre 0 et 1
>
> ```js
> createGame({
>   //...
>   volume: 0.8,
> });
> ```
