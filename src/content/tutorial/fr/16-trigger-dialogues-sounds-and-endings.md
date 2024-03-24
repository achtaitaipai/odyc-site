---
title: Orchestration des Dialogues, Sons, et Fins de Jeu
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
            await game.openDialog("Tu l'auras voulu! Maintenant, affronte les conséquences.")
            await game.playSound(createSound("EXPLOSION"))
            game.end("Fin de la Partie")
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

Dans un jeu narratif, le timing et l'ordre des dialogues, des effets sonores et des fins de jeu jouent un rôle crucial dans l'expérience du joueur. La méthode standard consiste à :

1. Jouer un son.
2. Afficher un dialogue.
3. Exécuter la fonction de l'événement.
4. Conclure avec la fin du jeu.

Cependant, cette séquence peut ne pas être idéale dans toutes les situations. C'est pourquoi le contexte du jeu offre accès à des méthodes spécifiques : `openDialog`, `playSound`, et `end`, vous permettant de personnaliser l'ordre et le timing de ces éléments.

### Utilisation Avancée

Dans certains cas, vous souhaiterez peut-être prendre le contrôle total sur l'ordre d'exécution pour renforcer un moment narratif ou souligner une action importante :

```js
onCollide: async function(){
  // Dialogue d'introduction ou de mise en contexte
  await game.openDialog("Attention! Une grande bataille s'annonce.")

  // Effet sonore pour augmenter l'intensité
  await game.playSound(createSound("POWERUP"))

  // Dialogue final avant la conclusion
  await game.openDialog("C'est l'heure! Prépare-toi à l'affrontement.")

  // Fin de jeu avec un message spécifique
  game.end("Le destin de l'univers est entre tes mains")
}
```

Cette approche vous permet de tisser des séquences complexes où chaque élément - dialogue, son et conclusion - contribue à une expérience immersive et mémorable. N'hésitez pas à expérimenter avec ces méthodes pour enrichir la narration et l'impact émotionnel de votre jeu.
