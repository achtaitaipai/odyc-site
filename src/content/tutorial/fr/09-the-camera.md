---
title: La Caméra
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

La gestion de la caméra est un aspect crucial pour offrir une expérience de jeu immersive et agréable. En ajustant la vue de la caméra, vous pouvez contrôler comment et ce que le joueur voit à l'écran, ce qui influence directement sa perception et son interaction avec le jeu.

### Taille de l'Écran

La taille de l'écran détermine la portion du monde du jeu visible pour le joueur. Pour la modifier, utilisez les paramètres `screenWidth` et `screenHeight` :

```js
createGame({
	//...
	screenWidth: 16,
	screenHeight: 12
})
```

Ces ajustements vous permettent d'élargir ou de réduire la vue selon les objectifs de gameplay.

### Suivi de la Caméra

Pour un suivi fluide du joueur, définissez un rectangle central invisible autour duquel la caméra s'ajustera automatiquement. Si le joueur se déplace en dehors de ce rectangle, la caméra se repositionnera pour le garder en vue :

```js
createGame({
	//...
	cameraWidth: 4,
	cameraHeight: 4
})
```

> [!NOTE]
> Bien que l'ajustement de ces paramètres puisse sembler complexe au premier abord, expérimenter avec différentes valeurs est essentiel pour trouver l'équilibre parfait pour votre jeu. Ils constituent un outil puissant pour façonner l'expérience du joueur.

En affinant la gestion de la caméra et la vue de l'écran, vous créez un espace de jeu qui soutient et enrichit la narration, les défis et l'immersion dans votre univers ludique.
