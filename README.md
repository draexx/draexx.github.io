# pedrocarranza.com (Astro + Tailwind)

Sitio web estático (SSG) construido con Astro y Tailwind CSS.

## Stack

- Astro (`astro`)
- Tailwind CSS (`@astrojs/tailwind`, `tailwindcss`)
- Content Collections para el blog (`src/content/config.ts`)
- Sitemap automático (`@astrojs/sitemap`)

## Requisitos

- Node.js 20 (alineado con el workflow de deploy en GitHub Actions)
- npm

## Desarrollo

1. Instalar dependencias: `npm install`
2. Levantar el servidor local: `npm run dev`
3. Build de producción: `npm run build`
4. Previsualizar el build: `npm run preview`

## Scripts

- `npm run dev`: servidor de desarrollo
- `npm run build`: genera `dist/` (salida estática)
- `npm run preview`: previsualiza el sitio generado

## Rutas principales

Las rutas se definen en `src/pages/`:

- `/`: Home (`src/pages/index.astro`)
- `/sobre-mi`: Sobre mí (`src/pages/sobre-mi.astro`)
- `/servicios`: Servicios (`src/pages/servicios.astro`)
- `/contacto`: Contacto (`src/pages/contacto.astro`)
- `/blog`: Listado de posts (`src/pages/blog/index.astro`)
- `/blog/[...slug]`: Detalle de post (`src/pages/blog/[...slug].astro`)
- `/terminos`: Términos (`src/pages/terminos.astro`)
- `/privacidad`: Privacidad (`src/pages/privacidad.astro`)
- `/gracias`: Página de agradecimiento (`src/pages/gracias.astro`)
- `404`: Página no encontrada (`src/pages/404.astro`)

## Contenido del blog

La colección se define en `src/content/config.ts` y valida estos campos en el frontmatter:

- `title` (string)
- `description` (string)
- `pubDate` (date)
- `updatedDate` (date, opcional)
- `heroImage` (image, opcional)
- `tags` (string[], opcional)

### Estructura de archivos

Cada post vive en su propia carpeta dentro de `src/content/blog/`:

```
src/content/blog/
  └── mi-post/
      ├── index.md
      ├── portada.jpg
      └── imagen-interna.png
```

### Ejemplo de `index.md`

```
---
title: "Modernización de Sistemas Legacy"
pubDate: 2025-12-27
description: "Transformando el núcleo."
heroImage: "./portada.jpg"
tags: ["legacy", "modernización"]
---

Puedes insertar imágenes dentro del contenido:
![Esquema técnico](./imagen-interna.png)
```

## Configuración del sitio

- `astro.config.mjs`: `site: https://pedrocarranza.com`, `output: static`, integración de Tailwind y sitemap.
- Sitemap: excluye `/gracias` con el filtro en `astro.config.mjs`.
- `tsconfig.json`: alias de imports `@/*` hacia `src/*`.

## Deploy

El deploy se realiza con GitHub Actions (`.github/workflows/deploy.yml`) en cada push a `master`:

- Instala dependencias
- Ejecuta `npm run build`
- Publica `dist/` en GitHub Pages

## Assets públicos

- `public/files/`: archivos descargables (por ejemplo `public/files/CV-Pedro-Carranza.pdf`)
- `public/images/`: imágenes estáticas reutilizables
