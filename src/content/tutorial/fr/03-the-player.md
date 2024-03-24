---
title: Le Héros
base: createGame({})
solution: |
  createGame({
    player: {
        sprite: 5,
        position: [4, 4]
    },
  })
---

Il est maintenant temps d'introduire notre héros dans le jeu.

Pour cela, nous allons utiliser le paramètre `player`. Ce paramètre est un objet qui contient deux propriétés : `sprite` et `position`.

Bien que nous aborderons la création de sprites personnalisés dans une section ultérieure, pour l'instant, nous allons simplement changer la couleur de notre héros en utilisant un sprite existant.

Les paramètres par défaut du joueur sont les suivants :

```js
player: {
    sprite: 0,
    position: [0, 0]
}
```

Ces paramètres positionnent le joueur en haut à gauche de l'écran et utilisent le premier sprite par défaut. Modifions ces valeurs pour personnaliser l'apparence et la position initiale de notre héros.

Pour ajouter votre héros au jeu, spécifiez le sprite que vous souhaitez utiliser pour le représenter et sa position initiale sur la grille.

Les coordonnées sont indiquées sous forme de tableau `[x, y]`, où `x` représente la colonne et `y` la ligne sur la grille du jeu. Par exemple, `[4, 4]` place le héros au centre si votre grille est de taille 8x8.

Raccourcis clavier pour ajouter des crochets :

Sur Mac :

- `[` : <kbd>Maj</kbd> + <kbd>Option</kbd> + <kbd>(</kbd>
- `]` : <kbd>Maj</kbd> + <kbd>Option</kbd> + <kbd>)</kbd>

Sur PC :

- `[` : <kbd>AltGr</kbd> + <kbd>5</kbd>
- `]` : <kbd>AltGr</kbd> + <kbd>°</kbd>

Expérimentez avec différentes valeurs pour `sprite` et `position` afin de mieux comprendre leur impact sur le jeu. Cela vous aidera à visualiser comment positionner et personnaliser les éléments de votre jeu.
