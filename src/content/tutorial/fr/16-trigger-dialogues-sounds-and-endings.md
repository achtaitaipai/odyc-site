---
title: Déclencher les dialogues, les sons et la fin
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
          sprite: bnm,
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
          sprite: bnm,
          onCollide: async function(){
            await game.openDialog("Tu l'auras voulu! Je te frappe!")
            await game.playSound(createSound("EXPLOSION"))
            game.end("Game Over")
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

Par défaut, lorsque le joueur interagit avec un autre élément voici ce qu'il se passe:

1. Lecture du son.
2. Lecture du dialogue.
3. Appel de la fonction de l'évènement.
4. Fin du jeu.

Dans certain cas, cet ordre pourrait ne pas convenir. Pour cette raison, le contexte du jeu donne accés aux méthodes: `openDialog`, `playSound` et `end`

Voici un exemple d'utilisation:

```js
//...
onCollide: async function(){
  await game.openDialog("Tu l'auras voulu! Je te frappe!")
  await game.playSound(createSound("EXPLOSION"))
  game.end("Game Over")
}
//...
```
