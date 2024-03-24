---
title: Les Dialogues
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
      P:{
        sprite: `
          99999999
          91111119
          91111119
          99999999
          ...99...
          ...99...
          ...99...
          ...99...
        `,
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......P.
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
      P:{
        sprite: `
          99999999
          91111119
          91111119
          99999999
          ...99...
          ...99...
          ...99...
          ...99...
        `,
        dialog: 'Votre pub ici'
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......P.
      ........
      ........
      ........
    `
  })
---

Ajouter des dialogues à votre jeu peut considérablement enrichir la narration et l'interactivité. En configurant la propriété `dialog` pour chaque template, vous pouvez introduire des conversations, des indices ou des éléments d'histoire.

Lorsqu'un paramètre `dialog` est défini pour un template, une boîte de dialogue s'ouvre lorsque le `player` interagit avec lui. Cela permet une narration dynamique et engage le joueur.

```js
//...
templates: {
    P:{
      sprite: `
        99999999
        91111119
        91111119
        99999999
        ...99...
        ...99...
        ...99...
        ...99...
      `,
      dialog: "Je suis une pancarte"
    },
},
//...
```
