# E-Commerce Inventory (sveltekit)

This project serves as the core administrative dashboard and inventory manager for our e-commerce platform. It integrates our custom `rune-lab` UI toolkit to manage products, users, global state, and orders seamlessly.

## Tech Stack

* **Core Framework:** SvelteKit paired with Svelte 5.
* **Styling & UI:** Tailwind CSS v4 integrated with DaisyUI v5 for extensive, out-of-the-box theming.
* **Tailwind Plugins:** Pre-configured with `@tailwindcss/typography` and `@tailwindcss/forms`.
* **Internationalization:** `@inlang/paraglide-js` set up for English (`en`) and Spanish (`es`) out of the box.
* **UI Toolkit:** `rune-lab` integration for command palettes, toast notifications, reactive layouts, and keyboard shortcuts.

---

## Getting Started

### Installation

Clone the repository:

```sh
git clone https://github.com/argus-tek/inventory.git
```

Change directory to the cloned repository:

```sh
cd inventory
```

Install dependencies:

```sh
bun install
```

### Developing

Start the Vite development server:

```sh
bun run dev --host
```

You can access the app at [`http://localhost:5173`](http://localhost:5173).


## Architecture & Integration Notes

This application relies on the `rune-lab` package for its global state management and layout shells.

* **Vite Compilation:** Ensure `rune-lab` is included in Vite's `ssr.noExternal` array so SvelteKit compiles the library components properly.
* **Tailwind Scanning:** The global CSS file uses an `@source` directive to ensure Tailwind scans the `rune-lab` distribution folder for DaisyUI utility classes.
* **Global Provider:** The root SvelteKit layout MUST wrap all content in the `<RuneProvider>` to initialize the theme, locale, API, and toast stores.
