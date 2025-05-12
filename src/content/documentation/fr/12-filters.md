---
title: Les Filtres
---

# Les Filtres

Les **filtres** permettent de modifier l’apparence visuelle globale de votre jeu, en appliquant des effets graphiques à l’ensemble de l’écran. Ils peuvent renforcer l’ambiance ou donner une identité visuelle à votre jeu .

OdyC utilise **WebGL** pour rendre ces effets visuels. Cela permet des rendus fluides, mais attention :

- **Les filtres sollicitent fortement la carte graphique**.
- Ils peuvent **réduire les performances** sur des ordinateurs plus anciens.
- Certains appareils (notamment mobiles ou navigateurs limités) **peuvent ne pas supporter WebGL**.

L’usage des filtres est donc recommandé pour des projets ciblant des machines récentes ou des expériences courtes et visuellement marquées.

Parfait ! Voici un paragraphe clair et accessible, suivi d’un exemple simple qui montre comment activer un filtre dans OdyC :

## Utilisation

L’ajout d’un filtre se fait lors de la création du jeu, en ajoutant une propriété `filter` dans la configuration. Chaque filtre possède un **nom** (comme `crt`, `neon` ou `fractal`) et peut avoir des **réglages personnalisés** selon l’effet souhaité.

Voici un exemple minimal d’utilisation :

```js
const game = createGame({
	// autres options du jeu...
	filter: {
		name: 'neon'
	}
})
```

Ce code applique un filtre de type **neon** à tout le rendu du jeu.

## Filtres disponibles

### `fractal`

Le filtre `fractal` transforme chaque pixel de l’image en un **polygone**.

```js
filter: {
	name: 'fractal',
	settings: {
		sideCount: 12,    // Nombre de côtés du polygone
		scale: 0.9,       // Zoom général du motif (entre 0 et 1)
		rotation: 0       // Rotation du motif (entre 0 et 1)
	}
}
```

### `crt`

Ce filtre reproduit l’effet visuel des anciens écrans **cathodiques** : légère distorsion, lignes de balayage, et courbure simulée.

```js
filter: {
	name: 'crt',
	settings: {
		warp: 0.7,           // Courbure de l'écran (entre 0 et 1)
		lineIntensity: 0.2,  // Opacité des lignes (entre 0 et 1)
		lineWidth: 0.6,      // Largeur des lignes (entre 0 et 1)
		lineCount: 85        // Nombre de lignes visibles (valeur entière)
	}
}
```

### `neon`

Le filtre `neon` combine un effet de **halo lumineux ("glow")** avec un rendu en **mosaïque**.

```js
filter: {
	name: 'neon',
	settings: {
		scale: 0.75,     // Taille des carreaux de la mosaïque (entre 0 et 1)
		intensity: 0.8   // Intensité de la lueur (entre 0 et 1)
	}
}
```

## Shaders personnalisés

Si vous souhaitez aller plus loin, OdyC vous permet d’utiliser vos **propres shaders WebGL** pour créer des effets visuels sur mesure.

Pour cela, il suffit de fournir un objet `filter` avec une propriété `fragment`, contenant le code GLSL de votre **shader de fragment**.
Vous pouvez également, si besoin, fournir un **vertex shader personnalisé** via la propriété `vertex`.

### Exemple simple avec un fragment shader :

```js
const myShader = `
precision mediump float;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
	vec4 color = texture2D(u_texture, v_texCoord);
	gl_FragColor = vec4(1.0 - color.rgb, color.a); // Inversion des couleurs
}
`

const game = createGame({
	filter: {
		fragment: myShader
	}
})
```

Vous pouvez également ajouter un objet `settings` pour transmettre des **uniforms personnalisés** à votre shader. Ces valeurs sont accessibles dans le code GLSL avec le préfixe `u_`.

> [!TIP]
> Pour vous inspirer ou mieux comprendre comment structurer vos propres shaders, n’hésitez pas à consulter les exemples utilisés par OdyC directement dans le dossier [src/shaders du dépôt GitHub](https://github.com/achtaitaipai/odyc/tree/main/src/shaders).
