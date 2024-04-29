---
title: L'objet jeu
---

# Modifier la carte

## Modifier une case

### getCell

Pour obtenir des informations ou modifier un élément dont vous connaissez la position. Vous pouvez utiliser la méthode `getCell` retournée par `createGame`.

```js
const game = createGame();
game.getCell(2, 0).visible = false;
```

La méthode `getCell` prend en argument les coordonnées `x` et `y` de la case et retourne un objet dont les propriétés sont les suivantes.

- readonly **symbol**: string | null
- **sprite**: Tile | null
- **solid**: boolean
- **sound**: string | null
- **readonly** position: [number, number]
- **dialog**: string | null
- **visible**: boolean
- **end**: string | null
- **remove**: () => void

### setCell

La méthode `setCell` vous permet de modifier un élément dont vous connaissez les coordonnées. Elle prend en arguments les coordonnées `x` et `y` suivies d'un objet contenant les propriétés que vous voulez modifier.

```js
const game = createGame({
  //...
});
game.setCell(3, 4, {
  visible: false,
  dialog: "Bonjour",
});
```

## Modifier plusieurs éléments

Pour modifer tous les éléments ayant le même symbole, vous pouvez utiliser la méthode `setAll`. Cette méthode prend en arguments le symbole des éléments suivi d'un objet contenant les propriétés que vous voulez modifier.

```js
const game = createGame({
  //...
  templates: {
    "#": {
      //...
    },
  },
});
game.setAll("#", {
  visible: false,
});
```

## Ajouter un élément sur une case

La méthode `addToCell` Vous permet d'ajouter un élément (préalablement défini dans les templates) à une position donnée

```js
const game = createGame();
game.addToCell(3, 2, "#");
```

Cette méthode prend en argument les coordonnées `x` et `y` de la case et le symbole du template.

## Charger une carte
