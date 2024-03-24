---
title: Nommer son jeu
base: |
  createGame()
solution: |
  createGame({
      title: "Un jeu",
      background: 3,
  })
---

Nous allons commencer à personnaliser le jeu.
Pour celà nous allons ajouter une couleur de fond et un titre à notre jeu.

Pour pouvoir ajouter des paramètres vous devez décrire à la fonction `createGame` à quoi ressemble le jeu quevous souhaitez créer.

Voici à quoi ça va ressembler

```js
createGame({
  title: "Un jeu",
  background: 3,
});
```

> [!NOTE]
> À chaque fois que vous modifier le code, le jeu se relance du début.
> Lorsqu'un paramètre `title` est renseigné. Il faut d'abord appuyer sur espace ou entrée pour passer l'écran de titre.

Pour la propriété `background` vous pouvez préciser n'importe quel nombre entre 0 et 9. Chacun correspond à une couleur, si la palette de base ne vous plait pas vous verrez plus tard que vous pouvez définir vos propres couleurs.

Sur Mac :

- `{` : <kbd>Option</kbd> + <kbd>(</kbd>
- `}` : <kbd>Option</kbd> + <kbd>)</kbd>

Sur PC :

- `{` : <kbd>AltGr</kbd> + <kbd>4</kbd>
- `}` : <kbd>AltGr</kbd> + <kbd>9</kbd>
