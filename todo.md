This is an exciting step! Building a robust inventory and e-commerce management system is complex, but integrating your customized `rune-lab` toolkit into a fresh SvelteKit `inventory` shell gives you a massive head start.

Here is a spec-driven, code-free technical foundation guide to seamlessly meld `rune-lab` into your new `inventory` project.

### Phase 1: Build Pipeline & Tooling Specification

Before any UI is rendered, the `inventory` app's build tools must be taught how to read and compile the `rune-lab` library.

* **Svelte Compiler Integration:** By default, Vite treats node modules as raw ES modules. The `inventory` application's Vite configuration must explicitly include `rune-lab` in its "no external" SSR list. This forces Vite to process the library through the Svelte 5 compiler, ensuring all Runes reactivity works correctly.


* **Tailwind & DaisyUI Scanning:** Tailwind CSS only compiles styles it can explicitly see. The `inventory` global stylesheet must include a source directive pointing directly to the `rune-lab` distribution folder. This guarantees that all pre-built DaisyUI components inside the library inherit the correct styles and theme configurations without compiling a massive, unused CSS file.



### Phase 2: Global State & Injection Specification

`rune-lab` relies heavily on a centralized dependency injection model. The root layout of the `inventory` application acts as the master bootstrapper.

* 
**The Master Provider:** The absolute root of the `inventory` app must be wrapped in the `RuneProvider`. This initializes all core systems simultaneously.


* 
**Application Metadata:** The provider will be configured with the specific `inventory` app metadata (name, version, API backend URLs).


* 
**Persistence Strategy:** To ensure a seamless user experience across reloads, the provider should be configured with a persistence driver. For a SvelteKit app like this inventory system, a cookie-based driver is the optimal specification to prevent theme-flashing during server-side rendering.



### Phase 3: Layout Architecture Specification

With the state initialized, the structural boundaries of the inventory application are defined using `rune-lab`'s layout primitives.

* 
**The Application Shell:** The `WorkspaceLayout` will serve as the primary wrapper, establishing the safe zones for content and preventing unwanted scrolling behaviors.


* 
**Primary Navigation:** A `ConnectedNavigationPanel` will be implemented to handle the core routing of the inventory system (e.g., Catalogs, User Management, Orders). This connects directly to the layout store to manage active states automatically.


* 
**Contextual Details:** The layout specification includes a designated `DetailPanel`. This is critical for an inventory system, allowing administrators to click a product or order in a data table and view its full details in a slide-out side panel without losing their place in the main list.



### Phase 4: Internationalization (i18n) Synchronization

Both projects utilize ParaglideJS, which makes synchronization straightforward but requires a specific handshake.

* 
**Dictionary Handshake:** The `inventory` application will compile its own Paraglide translation dictionaries. This local dictionary object must be passed directly into the `RuneProvider` configuration.


* 
**Store Delegation:** Once passed, internal `rune-lab` features (like the language selector or internal store dashboards) will automatically use the `inventory`'s translation files to render UI text correctly.



### Phase 5: Power-User Experience Specification

An inventory system is meant for rapid, repeated use. We will leverage `rune-lab`'s advanced stores to optimize workflows.

* 
**Command Palette Integration:** The `inventory` app will register core actions (like "Create New Product", "Jump to Pending Orders", or "Export Inventory") into the global `CommandStore`. This allows users to navigate the system entirely via keyboard search.


* 
**Shortcut Registry:** Common repetitive tasks will be bound to keyboard shortcuts using the `ShortcutStore`. Crucially, these shortcuts must be registered with specific "scopes" (e.g., global, or restricted to a specific panel) to prevent accidental executions when users are typing in input fields.
