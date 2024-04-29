---
title: Démarrage
---

# Démarrer avec OdycJs

## 1. Avec l'Éditeur en ligne

Le moyen le plus simple et rapide de commencer à créer un jeu et d'utiliser [l'éditeur en ligne](/fr/playground).

## 2. En Important la Librairie Depuis un CDN

Pour ceux qui préfèrent travailler localement mais sans configuration de build complexe,vous pouvez importer la librairie depuis un CDN.

- Créez un fichier HTML sur votre ordinateur.
- Insérez le code suivant :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://www.unpkg.com/odyc@0.0.18/dist/index.global.js"></script>
  </head>
  <body>
    <script>
      const game = odyc.createGame({
        title: "Mon super jeu",
      });
    </script>
  </body>
</html>
```

- Ouvrez votre fichier `html` dans un navigateur

## 3. Avec un Bundler

Si vous souhaitez utiliser un bundler comme [Vite](https://vitejs.dev/):

- Installez OdyCJS via npm :

```bash
npm install odyc
```

- Importez OdyCJS dans votre fichier JavaScript ou Typescript principal :

```javascript
import { createGame } from "odyc";

const game = createGame({
  title: "Mon Super Jeu",
});
```
