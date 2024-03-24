---
title: Dialogues
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
        dialog: 'Your ad here'
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

Adding dialogues to your game can significantly enhance the narrative and interactivity. By setting the `dialog` property for each template, you can introduce conversations, hints, or story elements.

Whenever a `dialog` parameter is set for a template, a dialogue box will open when the `player` interacts with it. This allows for dynamic storytelling and player engagement.

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
      dialog: "I am a signpost"
    },
},
//...
```
