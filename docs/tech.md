# Referencias Tecnológicas

Este documento sirve como índice central de las bibliotecas, frameworks y
herramientas que impulsan la arquitectura de
[**Inventory**](https://github.com/argus-tek/inventory). Aquí encontrarás
enlaces rápidos a la documentación oficial, repositorios y paquetes NPM.

## Core & Framework

El núcleo sobre el que se construye la lógica de la aplicación.

### Svelte & SvelteKit

El framework reactivo y el meta-framework de aplicación. Estamos utilizando
**Svelte 5** (Runes) para la gestión del estado.

- 🌐 **Web:** [svelte.dev](https://svelte.dev/)
- 📚 **Docs:** [kit.svelte.dev](https://svelte.dev/docs/kit/introduction)
- 📦 **NPM:** [`svelte`](https://www.npmjs.com/package/svelte)

---

## UI & Experiencia de Usuario

Herramientas encargadas del diseño visual, sistemas de diseño y layouts.

### Rune-Lab

La biblioteca base de nuestra plantilla. Provee los "Shells" de la aplicación
(Workspace, Navegación), el sistema de notificaciones (Toasts), la paleta de
comandos y los atajos de teclado globales.

- 🐙 **Repo:**
  [github.com/Yrrrrrf/rune-lab](https://github.com/Yrrrrrf/rune-lab)
- 📦 **NPM:** [`rune-lab`](https://www.npmjs.com/package/rune-lab)

### Tailwind CSS (v4)

Motor de estilos "utility-first". En esta versión (v4), la configuración vive
principalmente en CSS, optimizando el rendimiento de compilación.

- 🌐 **Web:** [tailwindcss.com](https://tailwindcss.com/)
- 📚 **Docs:** [Documentación v4](https://tailwindcss.com/docs)
- 📦 **NPM:** [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)

### DaisyUI (v5)

Biblioteca de componentes para Tailwind. Proporciona las clases semánticas (como
`btn`, `card`, `input`) y el sistema de temas (Claro/Oscuro).

- 🌐 **Web:** [daisyui.com](https://daisyui.com/)
- 📚 **Docs:** [Componentes](https://daisyui.com/components/)
- 📦 **NPM:** [`daisyui`](https://www.npmjs.com/package/daisyui)

---

## Funcionalidad & Utilidades

Bibliotecas que añaden capacidades específicas al sistema.

### Paraglide JS (Inlang)

Sistema de internacionalización (i18n) totalmente tipado y compatible con
SvelteKit. Gestiona las traducciones (`en`, `es`) y el enrutamiento localizado.

- 🌐 **Web:**
  [inlang.com](https://inlang.com/m/gerre34r/library-inlang-paraglideJs)
- 📚 **Docs:**
  [Guía para SvelteKit](https://inlang.com/m/gerre34r/library-inlang-paraglideJs/usage)
- 📦 **NPM:**
  [`@inlang/paraglide-js`](https://www.npmjs.com/package/@inlang/paraglide-js)

### Hotkeys.js

Utilizada internamente (a través de `rune-lab`) para la captura de combinaciones
de teclas en el navegador.

- 🐙 **Repo:**
  [github.com/jaywcjlove/hotkeys](https://github.com/jaywcjlove/hotkeys)
- 📦 **NPM:** [`hotkeys-js`](https://www.npmjs.com/package/hotkeys-js)

---

## Herramientas de Desarrollo

Herramientas de desarrollo y construcción.

### Vite

El motor de construcción (bundler) que hace posible el Hot Module Replacement
(HMR) y la compilación final.

- 🌐 **Web:** [vitejs.dev](https://vitejs.dev/)
- 📚 **Config:** [Configuración de Vite](https://vitejs.dev/config/)

### Bun

El runtime y gestor de paquetes utilizado para instalar dependencias y ejecutar
los scripts de desarrollo.

- 🌐 **Web:** [bun.sh](https://bun.sh/)
- 📚 **Docs:** [Documentación](https://bun.sh/docs)
