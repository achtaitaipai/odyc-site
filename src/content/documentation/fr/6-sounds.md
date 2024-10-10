---
title: Les Sons
---

# Sons

La propriété `sound` des `templates` associe un effet sonore à un élément du jeu. Vous pouvez utiliser différents types de sons, allant des templates prédéfinis aux sons personnalisés en passant par des URL [PFXR](https://achtaitaipai.github.io/pfxr/).

## Créer un effet sonore avec un template prédéfini

La méthode `createSound` accepte deux paramètres :

1. Le type de son parmi les suivants :
   - `DEFAULT`
   - `RANDOM`
   - `PICKUP`
   - `LASER`
   - `EXPLOSION`
   - `POWERUP`
   - `HIT`
   - `JUMP`
   - `BLIP`
   - `FALL`
   - `FART`
2. Un paramètre optionnel : **la graine (seed)**.

La **graine** est un nombre utilisé pour initialiser le générateur de sons de manière aléatoire mais déterministe. Cela signifie que si vous générez un son avec un certain type (par exemple, `PICKUP`) et que vous fournissez une graine, le même son sera produit à chaque fois que vous réutiliserez cette graine. Si vous ne spécifiez pas de graine, un son aléatoire différent sera produit à chaque exécution.

Exemple avec un son généré de manière prédictible en utilisant une graine :

```js
createGame({
	templates: {
		G: {
			sound: createSound('PICKUP', 32) // Le son sera toujours le même avec la graine 32
		}
		//...
	},
	volume: 0.8
})
```

Si vous ne passez pas de graine, chaque génération produira un son différent.

## Créer un son à partir d'une URL PFXR

Vous pouvez également créer un son à partir d'une URL générée via l'interface [PFXR](https://achtaitaipai.github.io/pfxr/). L'URL contient les paramètres pour générer un son spécifique.

Exemple d'attribution d'un son généré via une URL PFXR à un template :

```js
createGame({
	templates: {
		G: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			)
		}
		// Autres templates...
	},
	volume: 0.8
})
```

## Créer un son personnalisé avec un objet `Sound`

Pour une personnalisation avancée, vous pouvez créer un objet `Sound` et l'utiliser comme valeur pour la propriété `sound` dans un template. L'objet peut contenir des paramètres tels que `waveForm`, `frequency`, `sustainTime`, et `decayTime`.

Vous pouvez consulter la documentation complète des paramètres disponibles pour l'objet `Sound` sur le dépôt officiel de [PFXR](https://github.com/achtaitaipai/pfxr/tree/main/packages/synth#sound).

Exemple d'attribution d'un son personnalisé à un template :

```js
const customSound = {
	waveForm: 2, // Triangle
	frequency: 440, // Fréquence en Hertz
	sustainTime: 0.2, // Temps de maintien
	decayTime: 0.5 // Temps de décroissance
}

createGame({
	templates: {
		G: {
			sound: customSound
		}
		//...
	},
	volume: 0.8
})
```

## Jouer un son de manière dynamique

Pour jouer un son indépendamment des `templates`, vous pouvez utiliser l’objet `game` retourné par la fonction `createGame`. La méthode `game.playSound` vous permet de jouer un son dynamique.

Exemple :

```js
const game = createGame()

game.playSound('LASER', 123) // Avec une graine de 123 pour générer le même son à chaque fois
game.playSound(
	'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
)
game.playSound({
	waveForm: 2, // Triangle
	frequency: 440, // Fréquence en Hertz
	sustainTime: 0.2, // Temps de maintien
	decayTime: 0.5 // Temps de décroissance
})
```

## Exemple complet

Voici un exemple montrant comment attribuer des sons à différents templates et comment les jouer dynamiquement :

```js
import { createGame, createSound } from 'odyc'

const game = createGame({
	templates: {
		G1: {
			sound: createSound('PICKUP', 32) // Son basé sur un template prédéfini avec une graine de 32
		},
		G2: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			) // Son basé sur une URL PFXR
		},
		G3: {
			sound: {
				waveForm: 2,
				frequency: 440,
				sustainTime: 0.2,
				decayTime: 0.5
			}
		}
	},
	volume: 0.8
})

// Jouer un son dynamiquement
game.playSound('HIT', 999) // Le même son sera généré à chaque fois avec la graine 999
```
