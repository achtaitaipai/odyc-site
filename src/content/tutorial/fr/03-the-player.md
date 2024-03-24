---
title: Le héros
base: createGame({})
solution: |
  createGame({
    player: {
        sprite: 5,
        position: [4, 4]
    },
  })
---

Il est maintenant temps de configurer notre héros.

Pour ce faire il faut s'attaquer au paramètre `player`. Il s'agit d'un objet qui prend lui même deux paramètres : `position` et `sprite`.

Dans la prochaine section nous verrons comment dessiner, mais pour l'instant nous allons simplement changer sa couleur.

Par défaut ses paramètres sont :

```js
player: {
    sprite: 0,
    position: [0, 0]
}
```

Sur Mac :

- `[` : <kbd>Maj</kbd> + <kbd>Option</kbd> + <kbd>(</kbd>
- `]` : <kbd>Maj</kbd> + <kbd>Option</kbd> + <kbd>)</kbd>

Sur PC :

- `[` : <kbd>AltGr</kbd> + <kbd>5</kbd>
- `]` : <kbd>AltGr</kbd> + <kbd>°</kbd>

N'hésitez pas à modifier les paramètres pour mieux comprendre comment ils fonctionnent.
