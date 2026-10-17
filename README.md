# Yash Auti Portfolio

A responsive portfolio built with React, Vite, Three.js, and GSAP.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run lint
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository and import it in Vercel.
2. Select the Vite framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. No environment variables are currently required.

The included `vercel.json` routes direct project-page visits back to the app, so URLs such as `/projects/navy-pier` also work after refresh.
