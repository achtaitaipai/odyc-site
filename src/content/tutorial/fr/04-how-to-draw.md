---
title: Comment dessiner ?
base: |
  createGame({
    player: {
        sprite: 5,
        position: [4, 4]
    },
  })
solution: |
  createGame({
    player: {
        sprite: `
            ...99...
            ...88...
            .000000.
            0.0000.0
            8.0000.8
            ..3333..
            ..3..3..
            ..0..0..
        `,
        position: [4, 4],
    },
  })
---

Une sprite est représentée comme une chaîne de caractères, chaque ligne correspond à une rangée de pixels. Voici un exemple de sprite:

```js
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
```

Tous les chiffres sont interprétés comme une couleur (0: noir, 1: blanc...), les espaces, les tabulations et les lignes vides sont ignorées, les autres caractères sont des pixels transparents.

Dans l'exemple le caractère `.` est utilisé pour marquer les espaces vides, mais ça pourrait tout aussi bien être un `_`.

> [!WARNING]
> En javascript pour créer une chaîne de caractère sur plusieurs lignes on utilise le caractère accent grave : `
>
> - Sur Windows : <kbd>AltGr</kbd> + <kbd>7</kbd> puis <kbd>Espace</kbd>
> - Sur Mac : <kbd>£</kbd> puis <kbd>Espace</kbd>

Essayez de donner dessiner une sprite pour le player.
