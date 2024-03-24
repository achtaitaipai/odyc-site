---
title: La cible de l'évènement
base: |
  createGame({
    templates: {
      X: {
        sprite: 3,
      }
    },
    map: `
        ........
        .X......
        ........
        ........
        ........
        ........
        ........
        ........
    `
  })
solution: |
  createGame({
    templates: {
      X: {
        sprite: 3,
        onCollide: function(target){
          target.visible = !target.visible
        }
      }
    },
    map: `
        ........
        .X......
        ........
        ........
        ........
        ........
        ........
        ........
    `
  })
---

Vous vous demandez sûrement à quoi correspond `target.remove()` de la section précédente.

Les fonctions définies pour `onCollide`, `onEnter` ou `onLeave` sont appelées avec en paramètre l'objet cible.

Ce paramètre permet de modifier certaines propriétés ou même de supprimer l'objet.

Vous pouvez lire et modifier les propriétés suivantes: `sprite`, `dialog`, `solid`, `visible`, `sound` et `end`.

Vous pouvez lire les propriétés: `symbol` et `position`

Vous pouvez supprimer l'objet avec la méthode `remove`.

Essayez d'inverser la visibilité de notre objet `X` à chaque fois que le joueur rentre en contact avec lui!
