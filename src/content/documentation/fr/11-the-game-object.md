---
title: L'Objet Game
---

# L'objet game

## Modifier une case

### getCell

Cette méthode permet d'obtenir ou de modifier un élément dont vous connaissez la position. Utilisez `getCell`, retournée par `createGame`, en spécifiant les coordonnées `x` et `y`.

```js
const game = createGame();
game.getCell(2, 0).visible = false;
```

La méthode `getCell` accepte les coordonnées `x` et `y` de la case et retourne un objet avec les propriétés suivantes :

- **readonly** `symbol`: string | null
- `sprite`: Tile | null
- `solid`: boolean
- `sound`: string | null
- **readonly** `position`: [number, number]
- `dialog`: string | null
- `visible`: boolean
- `end`: string | null
- `remove`: () => void

### setCell

Utilisez `setCell` pour modifier une case en connaissant ses coordonnées. Cette méthode prend les coordonnées `x` et `y`, suivies d'un objet contenant les propriétés à modifier.

```js
const game = createGame();
game.setCell(3, 4, {
  visible: false,
  dialog: "Bonjour",
});
```

## Modifier plusieurs éléments

Utilisez `setAll` pour modifier tous les éléments ayant le même symbole. Cette méthode prend le symbole des éléments et un objet contenant les propriétés à modifier.

```js
const game = createGame();
game.setAll("#", {
  visible: false,
});
```

## Ajouter un élément sur une case

`addToCell` permet d'ajouter un élément, défini dans les templates, à une position spécifique.

```js
const game = createGame();
game.addToCell(3, 2, "#");
```

Cette méthode requiert les coordonnées `x` et `y` de la case, ainsi que le symbole du template.

## Connaître les dimensions du monde

Pour obtenir les dimensions du monde, utilisez les propriétés `width` et `height`, qui sont en lecture seule.

```js
const game = createGame();
alert(`largeur: ${game.width}, hauteur: ${game.height}`);
```

## Charger une carte

Pour charger une nouvelle carte, utilisez `loadMap`. Cette méthode prend en argument une nouvelle carte et, optionnellement, une nouvelle position pour le joueur.

```js
const game = createGame();
game.loadMap(
  `
  ########
  #......#
  #......#
  #......#
  #......#
  #......#
  #......#
  ########
  `,
  [3, 5]
);
```
