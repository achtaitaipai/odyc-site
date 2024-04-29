---
title: Les Dialogues
---

# Les Dialogues

La boîte de dialogue se déclenche lorsque le joueur intéragit avec un élément dont la propriété `dialog` est paramétrée.

```js
crateGame({
  templates: {
    "@": {
      dialog: "Bonjour, comment allez-vous ?",
    },
  },
});
```

> [!NOTE]
> Pour définir la façon dont le texte sera découpé vous pouvez insérer des retours à la ligne
>
> ```js
> //...
> dialog: "Bonjour,\ncomment allez-vous ?",
> //...
> ```

## Ouvrir dynamiquement la boîte de dialogue

Pour ouvrir la boîte de dialogue vous pouvez également utiliser l’objet `game` retourné par la fonction `createGame`.

```js
const game = createGame();

game.openDialog("Bonjour!");
```

## Configurer la boîte de dialogue

Pour configurer les couleurs de la boîte de dialogue, vous devrez utiliser les paramètres: `dialogColor` et `dialogBackground`. Ces paramètres reçoivent des chaînes de caractères interprétables en tant que [couleurs CSS](https://developer.mozilla.org/fr/docs/Web/CSS/color_value).

```js
createGame({
  //...
  dialogColor: "red",
  dialogBackground: "#228be6",
});
```
