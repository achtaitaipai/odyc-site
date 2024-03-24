---
title: Nommer Votre Jeu
base: |
  createGame()
solution: |
  createGame({
      title: "Mon Jeu",
      background: 3,
  })
---

Il est temps de commencer à personnaliser votre jeu. Pour cela, nous allons ajouter une couleur de fond et un titre.

Pour ajouter des paramètres, vous devez informer la fonction `createGame` de l'apparence souhaitée pour votre jeu.

Voici un exemple :

```js
createGame({
  title: "Mon Jeu",
  background: 3,
});
```

> [!NOTE]
> Chaque fois que vous modifiez le code, le jeu redémarre depuis le début.
> Lorsqu'un paramètre `title` est spécifié, vous devez appuyer sur la touche espace ou entrée pour passer l'écran du titre.

Pour la propriété `background`, vous pouvez spécifier n'importe quel nombre entre 0 et 9. Chaque numéro correspond à une couleur différente. Si la palette par défaut ne vous convient pas, vous apprendrez plus tard comment définir vos propres couleurs.

Raccourcis clavier pour ajouter des accolades :

Sur Mac :

- `{` : <kbd>Option</kbd> + <kbd>(</kbd>
- `}` : <kbd>Option</kbd> + <kbd>)</kbd>

Sur PC :

- `{` : <kbd>AltGr</kbd> + <kbd>4</kbd>
- `}` : <kbd>AltGr</kbd> + <kbd>9</kbd>
