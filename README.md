# Konstantin Hemker’s personal website

React site published at https://konst-int-i.github.io/.

## Local development

Use Node.js 20 or newer and npm:

```sh
npm ci
npm start
```

The development preview opens at http://localhost:3000.

## Checks

```sh
CI=true npm test -- --watchAll=false --runInBand
CI=true npm run build
```

## Content and assets

- Edit publications in `src/data/publications.js`. Omit `codeLink` when no repository is available.
- Images are imported from `src/assets` so the production build fingerprints and bundles them.
- Paper links point to online publications; PDFs are not hosted locally. Source URLs, versions, and thumbnail provenance are in `docs/publications.md`.
- Edit the introduction in `src/components/Landing.js`, and historical sections in `src/App.js`.
- The portrait switches to the pathology image on hover, click, or keyboard activation. System reduced-motion preferences disable the animated particle background and transitions.

## Deployment

Deployment is a separate action. After reviewing the local preview and checks, `npm run deploy` builds and publishes to the `gh-pages` branch.
