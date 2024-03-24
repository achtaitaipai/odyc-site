---
title: Obtenir des informations
base: |
  const bnm = `
          ...00...
          ...00...
          .000000.
          0.0000.0
          0.0000.0
          ..0000..
          ..0..0..
          ..0..0..
      `
      
  const game = createGame({
      player: {
        sprite: bnm,
      },
      templates: {
        B: {
          dialog: "Bonjour",
          sprite: bnm,
          onCollide:function(target){
            const number = 0
            target.dialog= "Tu m'as déjà dit bonjour " + (number + 1) + " fois"
          }
        }
      },
      map: `
        ........
        ........
        .....B..
        ........
        ........
        ........
        ........
        ........
        `
  })
solution: |
  const bnm = `
          ...00...
          ...00...
          .000000.
          0.0000.0
          0.0000.0
          ..0000..
          ..0..0..
          ..0..0..
      `
      
  const game = createGame({
      player: {
        sprite: bnm,
      },
      templates: {
        B: {
          dialog: "Bonjour",
          sprite: bnm,
          onCollide:function(target){
            const number = game.getCollisionCount("B") 
            target.dialog= "Tu m'as déjà dit bonjour " + (number + 1) + " fois"
          }
        }
      },
      map: `
        ........
        ........
        .....B..
        ........
        ........
        ........
        ........
        ........
        `
  })
---

Vous avez la possibilité de savoir combien de fois des évènements ont eu lieu avec `getCollisionCount`, `getEnterCount` et `getLeaveCount`.

Ces trois fonctions sont fournies par l'objet `game`. Il y a deux façons de les utiliser : avec une position, ou avec le symbole d'un template.

```js
const game = createGame({
  //...
});

// le nombre de fois que le joueur est allé sur la case [3, 4]
game.getEnterCount(3, 4);
//le nombre de fois que le joueur est allé sur une case qui contenait un template X
game.getEnterCount("X");
```

Essayez de modifier la ligne 20, pour que le personnage indique combien de fois ils se sont dit bonjour.
