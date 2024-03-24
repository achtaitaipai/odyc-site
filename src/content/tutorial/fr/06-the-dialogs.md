---
title: Les dialogues
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

Pour pouvoir rajouter un peu de narration dans notre jeu, nous pouvons ajouter des dialogues.

Pour cela vous pouvez paramètrer le `dialog` de chaque template.

Si le paramètre `dialog` est renseigné pour un template, une boîte de dialogue s'ouvrira lorsque le `player` interagit avec lui.

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
