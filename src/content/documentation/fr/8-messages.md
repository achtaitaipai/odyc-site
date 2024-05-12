---
title: Les Messages
---

# La Boîte de message

La boîte de message est un composant utilisé pour afficher des informations importantes telles que le titre du jeu, les messages de fin, ou encore d'autres notifications dynamiques au cours du jeu.

## Le Titre

Au démarrage du jeu, vous pouvez configurer un écran de titre en utilisant le paramètre `title`.

```js
createGame({
	title: 'Mon Super Jeu'
})
```

Vous avez la possibilité d'ajouter des sauts de ligne pour gérer la façon don s'affiche votre titre.

```js
createGame({
	title: `** UN SUPER JEU **






          par John Doe`
})
```

## La fin

La même boîte de message est utilisée pour signaler la fin du jeu. Ceci se fait généralement en interagissant avec un élément qui déclenche le paramètre `end`.

```js
createGame({
	//...
	templates: {
		X: {
			sprite: 2,
			end: 'Fin...'
		}
	}
	//...
})
```

Vous pouvez également mettre fin au jeu en utilisant l’objet `game` retourné par la fonction `createGame`.

```js
const game = createGame()

game.end('Fin...')
```

## Ouvrir la boîte de messages de façon dynamique

Pour afficher des messages dynamiquement pendant le jeu, utilisez la méthode `openMessage` de l’objet `game` :.

```js
const game = createGame()

game.openMessage('Ceci est un message')
```

## Afficher plusieurs messages à la suite

Dans toutes les situations vue précédemment vous avez la possibilité d'ouvrir plusieurs messages à la suite. Pour celà vous devez fournir un tableau de chaîne de caractère.

```js
const game = createGame({
	title: ['Jeu', "par quelqu'un"]
})
```

## Configurer la boîte de message

Pour configurer les couleurs de la boîte de message, vous devrez utiliser les paramètres: `messageColor` et `messageBackground`. Ces paramètres reçoivent des chaînes de caractères interprétables en tant que [couleurs CSS](https://developer.mozilla.org/fr/docs/Web/CSS/color_value).

```js
createGame({
	//...
	messageColor: 'red',
	messageBackground: '#228be6'
})
```
