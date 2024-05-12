---
title: Modification Dynamique du Héros
base: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            // Lorsque le joueur entre dans la zone spécifiée
          },
          onLeave: function(){
            // Lorsque le joueur quitte la zone spécifiée
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
solution: |
  const game = createGame({
      templates: {
        X: {
          sprite: 0,
          solid: false,
          onEnter: function(){
            game.player.sprite = 1 // Change le sprite du joueur en blanc
          },
          onLeave: function(){
            game.player.sprite = 0 // Rechange le sprite du joueur en noir
          },
        },
      },
      map: `
        ........
        ........
        ........
        ........
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        XXXXXXXX
        `
  })
---

La fonction `createGame`, que nous utilisons depuis le début de ce tutoriel, fournit un accès au contexte du jeu. Ce contexte vous permet de modifier le jeu de manière dynamique, que ce soit à l'intérieur des événements ou en dehors de la logique principale du jeu.

### Modifier le Héros

Pour interagir avec le joueur et modifier ses propriétés, vous pouvez agir directement sur l'objet `player` accessible via le contexte du jeu :

```js
const game = createGame({
	// Configuration initiale du jeu
})
// Modifier l'apparence du joueur
game.player.sprite = 8
// Repositionner le joueur
game.player.position = [4, 4]
```

### Interaction via les Événements

Les événements `onEnter`, `onCollide` et `onLeave` offrent une opportunité unique de modifier l'état du joueur en fonction de son interaction avec l'environnement.

### Exemple d'Utilisation

Imaginons que vous souhaitiez changer la couleur du joueur lorsqu'il traverse une zone spécifique pour indiquer un changement d'état, comme une augmentation de puissance ou un effet temporaire :

```js
// Lors de l'entrée dans la zone, le joueur devient blanc
onEnter: function() {
  game.player.sprite = 1;
}
// Lors de la sortie de la zone, le joueur redevient noir
onLeave: function() {
  game.player.sprite = 0;
}
```

Cette méthode permet de créer des interactions et des effets visuels dynamiques qui enrichissent l'expérience de jeu et encouragent l'exploration. Expérimentez avec différentes propriétés et événements pour découvrir de nouvelles façons d'engager les joueurs dans votre univers de jeu.
