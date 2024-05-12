---
title: Manipulation de la Cible de l'Événement
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

Dans la section précédente, `target.remove()` a été introduit comme moyen de supprimer un objet du jeu. Cependant, l'objet cible (`target`) dans les fonctions `onCollide`, `onEnter`, ou `onLeave` offre bien plus de possibilités.

### Propriétés Modifiables

Quand un événement est déclenché, l'objet cible est passé en paramètre à la fonction associée. Cela vous permet de modifier ou même de supprimer l'objet en question. Voici les propriétés que vous pouvez lire et modifier :

- **Sprite (`sprite`)** : Change l'apparence de l'objet.
- **Dialogue (`dialog`)** : Modifie le texte à afficher lors de l'interaction.
- **Solidité (`solid`)** : Détermine si l'objet est traversable.
- **Visibilité (`visible`)** : Contrôle l'affichage de l'objet.
- **Son (`sound`)** : Change le son joué lors de l'interaction.
- **Fin (`end`)** : Définit un message de fin ou une action de conclusion.

### Propriétés en Lecture Seule

Certaines propriétés sont uniquement disponibles en lecture :

- **Symbole (`symbol`)** : Le caractère représentant l'objet dans la `map`.
- **Position (`position`)** : Les coordonnées de l'objet dans le jeu.

### Suppression de l'Objet

L'objet peut être supprimé grâce à la méthode `remove()`, ce qui le retire du jeu :

```js
target.remove()
```

### Exemple Pratique

Imaginez vouloir rendre un objet `X` invisible ou visible alternativement à chaque collision avec le joueur. Utilisez la propriété `visible` dans une fonction `onCollide` :

```js
onCollide: function(target) {
  target.visible = !target.visible;
}
```
