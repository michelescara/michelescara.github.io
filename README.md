# Michele Scaramuzzino - Portfolio

My personal portfolio website showcasing my skills and experience as a Software Developer.

## About

This is a static portfolio website built with:
- **Astro** - Modern static site builder
- **HTML5** & **CSS3** (with CSS Variables for theming)
- **Vanilla JavaScript** - Client-side interactivity
- **Responsive design** - Mobile-first approach
- **Dark/Light mode toggle** - Theme persistence

## Features

- Clean and modern design
- Fully responsive (mobile, tablet, desktop)
- Dark mode support with persistent theme selection
- Smooth scrolling navigation
- Animated sections with Intersection Observer
- Skills showcase organized by category
- Contact links (Email, GitHub, LinkedIn)
- Fast static site generation with Astro

## Getting Started

### Prerequisites
- Node.js v20+ 
- npm v6+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at `http://localhost:4321`

### Build

```bash
npm run build
```

Generates optimized static files in the `dist/` directory.

### Preview

```bash
npm run preview
```

Previews the production build locally.

## Project Structure

```
src/
├── components/      # Reusable Astro components
├── layouts/         # Layout templates
├── pages/           # Page routes (index.astro)
├── scripts/         # Global JavaScript
└── styles/          # Global CSS styles
public/              # Static assets
astro.config.mjs     # Astro configuration
```

## Deployment

Hosted on GitHub Pages at: https://michelescara.github.io