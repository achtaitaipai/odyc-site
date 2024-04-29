---
title: Les Sprites
---

# Sprites

Les `sprites` sont des représentations graphiques constituées de chaînes de caractères multilignes. Chaque ligne correspond à une rangée de pixels, et chaque caractère représente un pixel.

- **Chiffres (0-9)** : Chaque chiffre est associé à une couleur spécifique, par exemple : 0 pour le noir, 1 pour le blanc, 2 pour le gris, etc.
- **Nouvelles lignes** : Indiquent le début d'une nouvelle rangée de pixels.
- **Espaces blancs, tabulations et lignes vides** : Sont ignorés et n’affectent pas l’affichage du sprite.
- **Autres caractères** : Représentent un pixel transparent.

> [!TIP]
> Pour créer un rectangle uni, indiquez simplement le chiffre correspondant à la couleur désirée.

### Dimensions

Par défaut, les `sprites` sont des carrés de 8x8 pixels. Vous pouvez ajuster cette taille en modifiant les propriétés `cellWidth` et `cellHeight`.

```js
createGame({
  //...
  cellWidth: 16,
  cellHeight: 32,
});
```

## Couleurs

### Couleurs par défaut

Voici une table des couleurs par défaut avec leur code hexadécimal :

| Index | Couleur                                                     | Code hexadécimal |
| ----- | ----------------------------------------------------------- | ---------------- |
| 0     | <span style="color: #212529">noir</span>                    | #212529          |
| 1     | <span style="color: #f8f9fa; background:black">blanc</span> | #f8f9fa          |
| 2     | <span style="color: #ced4da">gris</span>                    | #ced4da          |
| 3     | <span style="color: #228be6">bleu</span>                    | #228be6          |
| 4     | <span style="color: #fa5252">rouge</span>                   | #fa5252          |
| 5     | <span style="color: #fcc419">jaune</span>                   | #fcc419          |
| 6     | <span style="color: #ff922b">orange</span>                  | #ff922b          |
| 7     | <span style="color: #40c057">vert</span>                    | #40c057          |
| 8     | <span style="color: #f06595">rose</span>                    | #f06595          |
| 9     | <span style="color: #a52f01">marron</span>                  | #a52f01          |

> [!NOTE]
> Ces couleurs proviennent de l'exellente palette [open-color](https://yeun.github.io/open-color/)

### Personnalisation des couleurs

Vous pouvez personnaliser les couleurs utilisées pour les `sprites` en définissant un tableau de chaînes de caractères interprétables en tant que [couleurs CSS](https://developer.mozilla.org/fr/docs/Web/CSS/color_value). Ces couleurs peuvent être des codes hexadécimaux, des noms de couleurs, des valeurs RGB, etc.

Exemple :

```js
createGame({
  //...
  colors: [
    "red",
    "orange",
    "lab(50% 40 59.5)",
    "hwb(12 50% 0%)",
    "#f06595",
    "#f09",
    "oklch(60% 0.15 50)",
    "hsl(150 30% 60%)",
    "light-dark(white, black)",
    "black",
  ],
});
```
