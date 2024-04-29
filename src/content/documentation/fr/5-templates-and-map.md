---
title: Les Templates et la Map
---

# Les Templates et la Map

Les `templates` permettent de définir tous les objets (obstacles, items, personnages...) de votre jeu. Chaque `template` est représenté par un caractère que vous définissez (e.g. "X", "$", "e", "#"). Vous pouvez ensuite définir un ensemble de propriétés pour chacun de ces `templates`, puis les utiliser dans la `map`.

Pour chaque `template`, vous pouvez définir les propriétés suivantes :

- `sprite` (optionnel) : Définit comment l'objet sera représenté ([voir sprites](/fr/documentation/sprites))
- `dialog` (optionnel): Définit un message à ouvrir dans la boîte de dialogue, lorsque le joueur intéragit avec cet objet.
- `sound` (optionnel): Définit un son qui sera jouer lorsque le joueur intéragit avec cet élément ([voir sons](/fr/documentation/sounds)).
- `solid` (optionnel): Définit si le joueur peut passer à travers cet élément ou non.
- `visible` (optionnel): Définit si l'élément est visible ou non.
- `end` (optionnel): Marque l'élément comme une condition de fin de jeu, déclenchant la fin du jeu lorsqu'on interagit avec lui. La propriété `end` est une chaîne de caractères représentant le message de fin affiché au joueur lorsqu'il rencontre l'élément.

```js
createGame({
  //...
  templates: {
    R: {
      sprite: 6,
      sound: createSound("HIT", 999),
      visible: false,
      end: "Perdu",
    },
    G: {
      sprite: 7,
      dialog: "Je suis de l'herbe.",
      solid: false,
    },
  },
  //...
});
```

## Map

La configuration de la `map` définit la disposition du monde du jeu en ASCII. Chaque caractère de la `map` correspond à un `template` défini dans la configuration des `templates`. La `map` représente la disposition spatiale des éléments du jeu tels que les murs, les sols, les obstacles, les objets interactifs...

Dessiner la map ressemble à dessiner une sprite.

- Chaque caractère utilisé dans les `templates` est interprété.
- Les espaces, les tabulations et les lignes vides sont ignorées.
- Tout autre caractère représente une case vide.

```js
createGame({
	//...
	templates:{
		X:{
			sprite: 0
		},
		G: {
			sprite: 7
		},
		R: {
			sprite: 4
		}
	}
	map: `
		XXXXXXXXXXXXXXXX
		X..............X
		X...........G..X
		X..............X
		X..............X
		X....R.........X
		X..............X
		XXXXXXXXXXXXXXXX
	`,
	//...
})
```
