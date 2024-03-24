---
title: Suivi des Interactions et Informations Dynamiques
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

La possibilité de connaître le nombre de fois où des événements ont eu lieu grâce à `getCollisionCount`, `getEnterCount`, et `getLeaveCount` offre une grande flexibilité pour concevoir des expériences de jeu interactives et évolutives.

Ces fonctions, fournies par l'objet `game`, peuvent être utilisées de deux manières : en spécifiant une position ou le symbole d'un template.

```js
const game = createGame({
  // Configuration initiale du jeu
});

// Nombre de fois que le joueur est entré sur la case [3, 4]
game.getEnterCount(3, 4);
// Nombre de fois que le joueur est entré sur une case contenant un template "X"
game.getEnterCount("X");
```

Cette capacité de suivre les interactions permet de créer des mécanismes de jeu où les actions répétées du joueur peuvent débloquer des dialogues uniques, des événements spéciaux, ou même modifier l'environnement de jeu en temps réel.

### Application Pratique

Imaginez un scénario où un personnage non-joueur (NPC) reconnaît le joueur à chaque nouvelle rencontre, modifiant son dialogue en conséquence. Utiliser `getCollisionCount` pour ajuster dynamiquement le dialogue en fonction du nombre d'interactions précédentes enrichit l'expérience narrative et encourage le joueur à explorer et interagir davantage avec son environnement.

Expérimentez avec ces fonctions pour introduire des éléments de surprise, des récompenses basées sur la persévérance, ou des secrets qui ne se révèlent qu'après plusieurs interactions, ajoutant ainsi de la profondeur et de la rejouabilité à votre jeu.
