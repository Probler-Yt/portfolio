# Mohamed Mahjoub, portfolio

Source for [probler.uk](https://probler.uk): my projects, experience and downloadable CVs.

![Portfolio preview](docs/preview.png)

First Class BEng (Hons) Mechanical Engineering graduate from Liverpool John Moores University. I design and analyse parts (CAD, FEA, topology optimisation) and build the electronics and software around them.

## Editing

All of the text lives in [`src/content.ts`](src/content.ts). The CV PDFs live in [`public/cv/`](public/cv); replace a file with one of the same name to update it.

## Stack

React, TypeScript and Vite, with plain CSS in [`src/styles.css`](src/styles.css) and the Archivo typeface self-hosted through Fontsource. Every push to `main` builds and deploys to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

```bash
npm install
npm run dev
```

© 2026 Mohamed Mahjoub. All rights reserved.
