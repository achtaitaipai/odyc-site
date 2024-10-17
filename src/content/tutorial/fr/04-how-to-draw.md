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

Un sprite est représenté par une chaîne de caractères, chaque ligne correspondant à une rangée de pixels. Voici un exemple de sprite :

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

Chaque chiffre est interprété comme une couleur (0 : noir, 1 : blanc...), tandis que les espaces, les tabulations et les lignes vides sont ignorés. Les autres caractères représentent des pixels transparents.

Dans l'exemple, le caractère `.` est utilisé pour marquer les espaces vides, mais cela pourrait tout aussi bien être un tiret bas `_`.

> [!WARNING]
> En JavaScript, pour créer une chaîne de caractères sur plusieurs lignes, on utilise le caractère accent grave : `
>
> - Sur Windows : <kbd>AltGr</kbd> + <kbd>7</kbd> puis <kbd>Espace</kbd>
> - Sur Mac : <kbd>£</kbd> puis <kbd>Espace</kbd>

Essayez de dessiner un sprite pour le joueur.

> [!TIP]
> Si besoin vous pouvez piocher ou vous inspirer de [cette collection de sprites](/fr/sprites)
