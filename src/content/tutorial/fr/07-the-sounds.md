---
title: Les Sons dans le Jeu
base: |
  createGame({
    player: {
      sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
      `,
      position: [4, 4],
    },
    templates: {
      X:{
        sprite: `
          ..5555..
          .5....5.
          5......5
          5......5
          5......5
          5......5
          .5....5.
          ..5555..
        `,
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
    `
  })

solution: |
  createGame({
    player: {
      sprite: `
        ...99...
        ...88...
        .000000.
        0.0000.0
        8.0000.8
        ..3333..
        ..3..3..
        ..0..0..
      `,
      position: [4, 4],
    },
    templates: {
      X:{
        sprite: `
          ..5555..
          .5....5.
          5......5
          5......5
          5......5
          5......5
          .5....5.
          ..5555..
        `,
        sound:createSound("POWERUP")
      },
    },
    map:`
      ........
      ........
      ........
      ........
      ......X.
      ........
      ........
      ........
    `,
    volume: 0.8,
  })
---

Intégrer des effets sonores dans votre jeu peut grandement améliorer l'expérience utilisateur en ajoutant une dimension immersive et interactive. Pour cela, vous devez utiliser le paramètre `sound` en combinaison avec la fonction `createSound`.

### La fonction `createSound`

La fonction `createSound` accepte plusieurs types de paramètres pour générer des sons dans votre jeu.

1. **Type de son prédéfini** : Vous pouvez choisir parmi plusieurs types de sons prédéfinis tels que :

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

2. **Graine (seed)** : Un nombre optionnel qui permet de générer un son spécifique de manière déterministe. Chaque graine produit un son unique, et si vous souhaitez obtenir le même son à chaque exécution, il vous suffit de réutiliser la même graine. Si la graine n'est pas fournie, un son aléatoire sera généré à chaque lancement du jeu.

Exemple d'attribution d'un son à l'élément `X` :

```js
createGame({
	templates: {
		X: {
			sound: createSound('POWERUP', 123) // Son déterminé par le type "POWERUP" et la graine 123
		}
	}
})
```

### Utiliser une URL pour un son personnalisé

Il est également possible de générer des sons en utilisant une URL provenant de l'interface [PFXR](https://achtaitaipai.github.io/pfxr/). Cette option vous permet de créer un son complexe via l'interface graphique, puis de le réutiliser directement dans votre jeu.

Exemple d'utilisation d'une URL pour un son dans un template :

```js
createGame({
	templates: {
		X: {
			sound: createSound(
				'https://achtaitaipai.github.io/pfxr/?fx=1,0,0.44,0,0.28,460,-460,1,0.16,16,18,12,0.02,0,0,4000,0,100,50,0,0'
			) // Son généré via une URL PFXR
		}
	}
})
```

### Créer un son personnalisé avec un objet `Sound`

Vous pouvez également créer des sons plus complexes ou personnalisés en passant un objet `Sound` au lieu d'un type de son prédéfini. Par exemple :

```js
const customSound = {
	waveForm: 2, // Forme d'onde Triangle
	frequency: 440, // Fréquence en Hertz
	sustainTime: 0.2, // Durée de maintien en secondes
	decayTime: 0.5 // Durée de décroissance en secondes
}

createGame({
	templates: {
		X: {
			sound: customSound // Son personnalisé pour l'élément X
		}
	}
})
```

Pour plus de détails sur la personnalisation des sons, vous pouvez consulter la [documentation officielle PFXR](https://github.com/achtaitaipai/pfxr/tree/main/packages/synth#sound).

- **Volume global du jeu** : Le volume général peut être contrôlé via le paramètre `volume`. Il accepte une valeur comprise entre 0 (son coupé) et 1 (volume maximum).

  Exemple :

  ```js
  createGame({
  	volume: 0.8 // Volume réglé à 80%
  })
  ```
