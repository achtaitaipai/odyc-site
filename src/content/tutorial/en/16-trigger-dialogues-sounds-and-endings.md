---
title: Orchestration of Dialogues, Sounds, and Endings
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
            await game.openDialog("You asked for it! Now face the consequences.")
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

In a narrative game, the timing and order of dialogues, sound effects, and game endings play a crucial role in the player's experience. The standard method involves:

1. Playing a sound.
2. Displaying a dialogue.
3. Executing the event function.
4. Concluding with the end of the game.

However, this sequence might not be ideal in all situations. That's why the game context provides access to specific methods: `openDialog`, `playSound`, and `end`, allowing you to customize the order and timing of these elements.

### Advanced Usage

In some cases, you might want to take full control over the execution order to enhance a narrative moment or highlight an important action:

```js
onCollide: async function(){
  // Introduction or context-setting dialogue
  await game.openDialog("Beware! A great battle looms.")

  // Sound effect to increase intensity
  await game.playSound(createSound("DRUMROLL"))

  // Final dialogue before the conclusion
  await game.openDialog("The time has come! Prepare for the showdown.")

  // Game end with a specific message
  game.end("The fate of the universe is in your hands")
}
```

This approach allows you to weave complex sequences where each element - dialogue, sound, and conclusion - contributes to an immersive and memorable experience. Feel free to experiment with these methods to enrich the narration and emotional impact of your game.
