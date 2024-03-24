---
title: La caméra
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
      position: [16, 17],
    },
    templates: {
      X: {
        sprite: 0,
      },
      E: {
        end: "Bravo"
      }
    },
    map: `
      XEXXXXXXXXXXXXXXXXXXXXXX
      X.XXXXXXXXXXXXXXXXXXXXXX
      X.X..................XXX
      X.X.X.XXXXXX.XXXXXXX.XXX
      X...X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X........X.......XXX
      XXXXXXXXXXXXXX.XXXXXXXXX
      X..............XXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.....................XX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXX.................XXXX
      XXX.XXXXX.XXXXXXXXX.XXXX
      XXX.XXXXX...........XXXX
      XXX.XXXXXXXXXXXXXXXXXXXX
      XXX.XX................XX
      XXX....XXXXXXXXXXXXXX.XX
      XXXXXXXXXXXXXXXXXXXXXEXX
    `,
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
      position: [16, 17],
    },
    templates: {
      X: {
        sprite: 0,
      },
      E: {
        end: "Bravo"
      }
    },
    map: `
      XEXXXXXXXXXXXXXXXXXXXXXX
      X.XXXXXXXXXXXXXXXXXXXXXX
      X.X..................XXX
      X.X.X.XXXXXX.XXXXXXX.XXX
      X...X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X.XXXXXX.XXXXXXX.XXX
      XXX.X........X.......XXX
      XXXXXXXXXXXXXX.XXXXXXXXX
      X..............XXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.XXXXXXX.XXXXXXXXXXXXXX
      X.....................XX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXXXXXXXX.XXXXXXXXXXXXXX
      XXX.................XXXX
      XXX.XXXXX.XXXXXXXXX.XXXX
      XXX.XXXXX...........XXXX
      XXX.XXXXXXXXXXXXXXXXXXXX
      XXX.XX................XX
      XXX....XXXXXXXXXXXXXX.XX
      XXXXXXXXXXXXXXXXXXXXXEXX
    `,
    screenWidth: 12,
    screenHeight: 12,
    cameraWidth: 4,
    cameraHeight: 4,
  })
---

Par défaut, l'écran mesure 8 par 8 cases et la caméra s'ajuste à chaque fois que le joueur sort de son champs.

Pour modifier la taille de l'écran il faut utiliser les paramètres `screenWidth` et `screenHeight`:

```js
createGame({
  //...
  screenWidth: 16,
  screenHeight: 12,
});
```

Pour que la caméra suive le joueur d'une manière plus fluide, vous pouvez définir un rectangle invisible au centre de l'écran. À chaque fois que le `player` sortira de ce rectangle, la caméra s'ajustera.

```js
createGame({
  //...
  cameraWidth: 4,
  cameraHeight: 4,
});
```

> [!NOTE]
> Ces paramètres peuvent sembler un peu abstrait et c'est tout à fait normal. Pour mieux vous les approprier essayez en plusieurs. Ils sont un moyen puissant de modifier l'impression que donne votre jeu.
