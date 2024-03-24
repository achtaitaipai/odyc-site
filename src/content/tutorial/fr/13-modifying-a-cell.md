---
title: Interagir avec les Cases Spécifiques
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

Dans cet exemple, la clé et la porte disparaissent lorsque le joueur arrive sur leurs cases. Nous souhaitons que, lorsque le joueur "ramasse" la clé, la porte ne soit plus solide, permettant ainsi au joueur de passer.

Pour réaliser cela, vous pouvez utiliser la fonction `getCell`, accessible via le contexte du jeu. Cette fonction prend deux nombres en arguments, correspondant à une position, et retourne l'objet situé à cette position. Voici comment l'utiliser :

```js
const game = createGame({
  // Configuration du jeu
});

// Rendre un objet invisible à une position spécifique
game.getCell(3, 4).visible = false;
// Supprimer un objet à une position spécifique
game.getCell(6, 6).remove();
```

Dans l'exemple fourni, nous utilisons `getCell` pour rendre la porte (située à la position [5, 4]) non solide après que le joueur ait ramassé la clé. Cela ouvre de nouvelles possibilités pour créer des puzzles et des mécanismes de jeu interactifs, où les actions du joueur peuvent avoir un impact direct sur l'environnement de jeu.

Expérimentez avec `getCell` pour modifier l'état des cases de manière dynamique, enrichissant ainsi l'expérience de jeu avec des interactions et des défis variés.
