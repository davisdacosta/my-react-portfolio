# Davis Portfolio

React portfolio built with Vite.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run lint
npm run build
npm run preview
```

## Deploy to Render

This repository includes a Render Blueprint in `render.yaml`. To create the
static site:

1. Push the project to GitHub.
2. In Render, choose **New + → Blueprint** and connect this repository.
3. Review the `davis-portfolio` static site and deploy it.

Render installs dependencies with `npm ci`, builds with `npm run build`, and
publishes the `dist` directory. The rewrite rule serves the Vite entry point
for client-side React Router URLs, so direct visits and refreshes on `/about`,
`/projects`, and `/contact` work.