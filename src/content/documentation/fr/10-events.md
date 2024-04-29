---
title: Les Évènements
---

# Les Évènements

Les évènements vous permettent de déclencher des actions lorsque certaines interactions ont lieux. Pour les utiliser vous devez les définir au niveau des `templates`. Il existent trois évènements :

- **onCollide**: appelé lorsque le joueur rentre en collision avec l'élément.
- **onEnter**: appelé lorsque le joueur entre sur une case qui contient l'élément.
- **onLeave**: appelé lorsque le joueur quitte une case qui contient l'élément.

```js
createGame({
  templates: {
    x: {
      onCollide: function () {
        alert(1);
      },
      onEnter: function () {
        alert(2);
      },
      onEnter: function () {
        alert(3);
      },
    },
  },
});
```

## La cible de l'évènement

Quand un événement est déclenché, l'objet cible est passé en paramètre à la fonction associée. Cela vous permet de modifier ou même de supprimer l'objet en question.

### Propriétés modifiables

Voici les propriétés que vous pouvez lire et modifier :

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
target.remove();
```
