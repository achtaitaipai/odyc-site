---
title: Modifier une case
base: |
  const game = createGame({
      player: {
         sprite: `
            ...00...
            ...00...
            .000000.
            0.0000.0
            0.0000.0
            ..0000..
            ..0..0..
            ..0..0..
        `,
        position: [1, 0]
      },
      templates: {
        X: {
          sprite: 2,
        },
        D:{
            sprite: `
                ...99...
                ..9999..
                .999999.
                .999999.
                .999959.
                .999999.
                .999999.
                .999999.
            `,
            onEnter: function(target){
              target.remove()
            }
        },
        E: {
            sprite: `
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
            `,
            sound: createSound("POWERUP"),
            end: "Bravo"
        },
      K:{
        sprite: `
          ...5....
          ..5.5...
          ..5.5...
          ...5....
          ...55...
          ...5....
          ...55...
          ...5....
          `,
          dialog: "Vous avez trouvé une clé!",
          sound: createSound("PICKUP"),
          solid: false,
          onEnter: function(target){
            target.remove()
          }
        }
      },
      map: `
        .....X..
        .....X..
        .....X..
        .....X..
        .....D.E
        .....X..
        .....X..
        .K...X..
        `
  })
solution: |
  const game = createGame({
      player: {
         sprite: `
            ...00...
            ...00...
            .000000.
            0.0000.0
            0.0000.0
            ..0000..
            ..0..0..
            ..0..0..
        `,
        position: [1, 0]
      },
      templates: {
        X: {
          sprite: 2,
        },
        D:{
            sprite: `
                ...99...
                ..9999..
                .999999.
                .999999.
                .999959.
                .999999.
                .999999.
                .999999.
            `,
            onEnter: function(target){
                target.remove()
            }
        },
        E: {
            sprite: `
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
                01010101
                10101010
            `,
            sound: createSound("POWERUP"),
            end: "Bravo"
        },
      K:{
        sprite: `
          ...5....
          ..5.5...
          ..5.5...
          ...5....
          ...55...
          ...5....
          ...55...
          ...5....
          `,
          dialog: "Vous avez trouvé une clé!",
          sound: createSound("PICKUP"),
          solid: false,
          onEnter: function(target){
            target.remove()
            game.getCell(5,4).solid = false
          }
        }
      },
      map: `
        .....X..
        .....X..
        .....X..
        .....X..
        .....D.E
        .....X..
        .....X..
        .K...X..
        `
  })
---

Dans l'exemple ci-contre la clé et la porte disparaissent lorsque le `player` arrive sur leurs cases.

Nous voudrions que lorsque le `player` "ramasse" la clé, la porte ne soit plus solide.

Vous aurez besoin de la fonction `getCell` fournie par le contexte du jeu. Celle-ci prend en argument deux nombres correspondant à une position, puis retourne l'objet qui se trouve à cette position. Voici comment elle s'utilise :

```js
const game = createGame({
  //...
});

game.getCell(3, 4).visible = false;
game.getCell(6, 6).remove();
```

Dans l'exemple ci-dessus, nous rendons invisble l'obet à la position [3, 4] et nous supprimons l'objet à la position [6, 6].

À vous de jouer (la porte est en position [5, 4])
