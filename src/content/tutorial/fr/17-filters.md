---
title: Les Filtres
base: |
  const game = createGame({
      player: {
        sprite:`
      ..111...
      .23132..
      1211121.
      1224221.
      1.121.1.
      2.2.2.2.
      3.1.1.3.
      ..3.3...
    `,
        position: [1, 1]
      },
      templates: {
        x: {
          sprite: `
      ........
      .111.11.
      .222.12.
      .....12.
      .11.....
      .12.111.
      .12.122.
      ........
    `,
        },
      },
      map: `
        xxxxxxxx
        x....x.x
        x....x.x
        x....x.x
        x......x
        x....x.x
        x....x.x
        xxxxxxxx
        `,
    background: 0,
  })
solution: |
  const game = createGame({
      player: {
        sprite:`
      ..111...
      .23132..
      1211121.
      1224221.
      1.121.1.
      2.2.2.2.
      3.1.1.3.
      ..3.3...
    `,
        position: [1, 1]
      },
      templates: {
        x: {
          sprite: `
      ........
      .111.11.
      .222.12.
      .....12.
      .11.....
      .12.111.
      .12.122.
      ........
    `,
        },
      },
      map: `
        xxxxxxxx
        x....x.x
        x....x.x
        x....x.x
        x......x
        x....x.x
        x....x.x
        xxxxxxxx
        `,
    background: 0,
    filter: {
        name:"crt",
        settings: {
          warp: 0.7,
          lineIntensity: 0.2,
          lineWidth: 0.6,
          lineCount: 85
        }
    }
  })
---

Dans certains cas, l’aspect pixelisé peut ne pas convenir à l’univers de votre jeu. Pour y remédier, vous pouvez utiliser les **filtres**.

Ces derniers modifient l’apparence globale du jeu.

```js
const game = createGame({
	///...
	filter: {
		name: 'crt' // crt | fractal | neon
	}
})
```

Si nécessaire, vous pouvez également ajuster les réglages du filtre. L’objet `filter` accepte une propriété `settings`, dont les paramètres varient selon le filtre utilisé. Consultez la documentation pour plus d’informations.

```js
const game = createGame({
	///...
	filter: {
		name: 'crt',
		settings: {
			warp: 0.7,
			lineIntensity: 0.2,
			lineWidth: 0.6,
			lineCount: 85
		}
	}
})
```

> \[!WARNING]
> L’utilisation des filtres peut avoir un impact important sur les performances du jeu. Un jeu avec filtre risque de ne pas fonctionner sur des machines trop anciennes.
