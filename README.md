## Estructura blog
la estructura que contiene los blogs
```
src/content/blog/
  ├── modernizacion-legacy/
  │   ├── index.md        <-- El contenido del post
  │   ├── portada.jpg     <-- Imagen principal
  │   └── esquema.png     <-- Imagen interna del post
  └── ia-y-robotica/
      ├── index.md
      └── robot.png
```
## Estructura index.md para el blog
Archivo index.md parael blog
```
---
title: "Modernización de Sistemas Legacy"
pubDate: 2025-12-27
description: "Transformando el núcleo."
heroImage: "./portada.jpg"  <-- Nota el "./" (referencia relativa)
---

Aquí puedes insertar una imagen en medio del texto:
![Esquema técnico](./esquema.png)
```