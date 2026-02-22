# Arquitectura del Sistema: Inventory

Este documento describe los componentes principales del sistema actual
(`inventory`) y cómo se integran con las herramientas base.

## Componentes Principales

### 1. SvelteKit y Vite

El proyecto está construido sobre SvelteKit para aprovechar el renderizado del
lado del servidor (SSR) y el enrutamiento integrado. Se utiliza Vite como motor
de construcción ([vite.config.ts](../vite.config.ts)), el cual fue configurado
explícitamente para compilar la biblioteca externa de componentes (`rune-lab`) y
procesar exitosamente las clases utilitarias de Tailwind CSS.

### 2. RuneProvider (Estado Global)

Ubicado en el archivo raíz
([src/routes/+layout.svelte](../src/routes/+layout.svelte)), el componente
`<RuneProvider>` es el cerebro de inicialización. Su responsabilidad principal
es:

- Configurar la información general de la app (nombre, versión, ícono).
- Cargar la persistencia del estado visual en memoria y almacenamiento local
  usando el controlador de cookies (`cookieDriver`).
- Activar el sistema de internacionalización compartiendo el diccionario de
  traducción compilado por Paraglide.

### 3. AppLayout (El Cascarón de Navegación)

Definido en [src/routes/AppLayout.svelte](../src/routes/AppLayout.svelte), este
componente ensambla visualmente la aplicación empleando las estructuras de
`rune-lab`:

- **WorkspaceLayout**: Define la cuadrícula principal y previene comportamientos
  no deseados de scroll general en la ventana.
- **ConnectedNavigationPanel**: El menú lateral izquierdo que contiene los
  flujos de trabajo principales agrupados en secciones lógicas (Ventas,
  Inventario, Sistema).
- **DetailPanel**: El panel lateral dinámico a la derecha, usado para
  previsualizar y editar registros contextuales sin abandonar la página actual
  (muy útil en sistemas de administración rápidos).

### 4. Accesos Rápidos (CommandStore / ShortcutStore)

El sistema está diseñado para usuarios avanzados o "power users", logrando
rapidez a través del uso de atajos de teclado.

- El **CommandStore** tiene un registro global de acciones del sistema.
  Cualquier componente puede registrar un comando que luego aparece disponible
  en una paleta de comandos de búsqueda universal (`Ctrl + K`).
- El **ShortcutStore** maneja la escucha nativa de combinaciones en el teclado,
  como `Ctrl + N` para agregar entidades nuevas dinámicamente.

### 5. Paraglide (i18n)

La internacionalización es gestionada completamente por **Paraglide JS**. Las
traducciones se cargan de forma agnóstica (`m`) dentro del `RuneProvider`, lo
que permite que incluso los componentes base precompilados de `rune-lab` adapten
sus textos sin esfuerzo e incluyan soporte a actualizaciones de idioma dinámicas
reactivas dentro de Svelte 5.

### 6. Tailwind CSS y DaisyUI

Tanto los diseños de base estructural como los detalles de color se obtienen
configurando **Tailwind CSS**. A través del archivo
[src/routes/layout.css](../src/routes/layout.css), se inyectan también los temas
visuales proporcionados por el paquete de componentes **DaisyUI**, haciendo muy
simple lograr el aspecto moderno de las vistas actuales, soportando Modo
Oscuro/Claro nativo.
