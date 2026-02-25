import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    paraglideVitePlugin({
      project: "./src/i18n/project.inlang",
      outdir: "./src/lib/paraglide",
    }),
  ],
  // Tell esbuild NOT to pre-bundle rune-lab (it can't handle .svelte files)
  optimizeDeps: {
    exclude: ["rune-lab"],
  },
  // Tell Vite's SSR bundler to also compile rune-lab through the Svelte plugin
  // instead of treating it as an external node_module
  ssr: {
    noExternal: ["rune-lab"],
  },
});
