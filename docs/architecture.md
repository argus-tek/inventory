# Guía de Arquitectura del Sistema: Inventory

Este documento detalla la arquitectura técnica, el flujo de datos y la
estructura organizativa de la plantilla **Inventory**. El sistema está diseñado
como una **SPA (Single Page Application) híbrida** montada sobre SvelteKit,
priorizando el rendimiento, la accesibilidad y la velocidad de desarrollo
mediante `rune-lab`.

---

## 1. Visión General de la Arquitectura

El sistema sigue una arquitectura **"Shell-First"** (Primero el Cascarón). A
diferencia de los sitios web tradicionales donde cada navegación recarga la
página, aquí cargamos un "Layout Maestro" (`WorkspaceLayout`) que persiste
durante toda la sesión del usuario.

### Diagrama Conceptual

```mermaid
[Cliente / Navegador]
      │
      ▼
[SvelteKit (Router & SSR)]
      │
      ├──> [Hooks (i18n & Middleware)]
      │
      ▼
[<RuneProvider>] ─── (Inyecta Contexto Global: Tema, Toast, API)
      │
      ▼
[<WorkspaceLayout>] ─── (Estructura Visual: Grid CSS)
      │    │
      │    ├── [Panel Navegación] (Izquierda - Estático)
      │    │
      │    ├── [Área de Contenido] (Centro - Dinámico / Rutas)
      │    │
      │    └── [Panel de Detalle] (Derecha - Contextual / Overlay)
      │
      ▼
[Svelte 5 Runes ($state, $effect)] ─── (Reactividad Fina)
```

---

## 2. Estructura de Directorios Clave

La organización de archivos sigue las convenciones de SvelteKit, pero potenciada
por la estructura modular de `rune-lab`.

```text
src/
├── hooks.server.ts       # Intercepta peticiones para inyectar el idioma (SSR)
├── hooks.ts              # Maneja el enrutamiento (reescritura de URLs para i18n)
├── lib/
│   ├── paraglide/        # Salida compilada de las traducciones (NO EDITAR MANUALMENTE)
│   └── index.ts          # Alias $lib
├── routes/
│   ├── +layout.svelte    # EL PUNTO DE ENTRADA. Contiene <RuneProvider>
│   ├── AppLayout.svelte  # Implementación visual del Workspace y Sidebar
│   ├── layout.css        # Configuración de Tailwind v4 y DaisyUI
│   └── +page.svelte      # Dashboard principal
└── i18n/                 # Fuente de la verdad para textos
    └── messages/         # Archivos JSON (en.json, es.json) editables
```

---

## 3. Integración de Componentes Principales

### A. El Núcleo: `RuneProvider`

Ubicado en `src/routes/+layout.svelte`. Es el componente más crítico.

- **Función:** Inicializa los "Stores" globales que la aplicación necesita para
  funcionar.
- **Configuración:** Recibe el diccionario de idiomas (`m`), el controlador de
  persistencia (cookies/localStorage) y la configuración base de la app (nombre,
  versión).
- **Por qué es importante:** Si este componente falla, no funcionan las
  notificaciones, ni el cambio de tema, ni los atajos de teclado.

### B. El Cascarón: `AppLayout` + `rune-lab`

Ubicado en `src/routes/AppLayout.svelte`.

- **WorkspaceLayout:** Un componente de `rune-lab` que establece un CSS Grid
  avanzado. Garantiza que la barra lateral, el contenido y el panel de detalles
  se comporten correctamente en móviles y escritorio.
- **Gestión de Eventos:** Aquí es donde se registran los **Comandos**
  (`Ctrl + K`) y **Atajos** (`Ctrl + N`) usando `$effect`. Esto centraliza la
  lógica de navegación "power-user".

### C. Estilizado: Tailwind v4 + DaisyUI

Ubicado en `src/routes/layout.css`.

- **Estrategia de Compilación:** Usamos la directiva
  `@source "../node_modules/rune-lab/dist";`.
- **¿Por qué?** Tailwind escanea los archivos en busca de clases usadas. Como
  `rune-lab` es una librería externa, debemos decirle explícitamente a Tailwind
  que "mire" dentro de ella para generar los estilos correctos de DaisyUI.

---

## 4. Flujo de Datos y Estado

Utilizamos el sistema de reactividad de **Svelte 5 (Runes)**.

1. **Estado Global (App):**
   - Manejado por `rune-lab` a través de Context API (`getLayoutStore`,
     `getToastStore`).
   - _Ejemplo:_ Abrir el panel lateral derecho (`layout.toggleDetail()`) no
     requiere pasar props hacia arriba; se invoca el store directamente.

2. **Estado de Datos (Negocio):**
   - Se utiliza `PageData` de SvelteKit para cargar datos del servidor.
   - Dentro de los componentes, usamos `$state` para variables locales reactivas
     y `$derived` para cálculos automáticos (ej. total de ventas).

---

## 5. Internacionalización (i18n)

La arquitectura utiliza **Paraglide JS** de una manera "invisible".

1. **Detección:** `hooks.server.ts` detecta el idioma preferido del navegador o
   de la URL.
2. **Enrutamiento:** `hooks.ts` reescribe las URLs (ej. `/es/dashboard` ->
   `/dashboard` internamente) para que SvelteKit no se confunda.
3. **Uso:** En los componentes (`.svelte`), importamos
   `import * as m from "$lib/paraglide/messages"`.
   - El compilador de Svelte reemplaza `m.hello_world()` por el texto correcto
     _antes_ de enviar el HTML al cliente, garantizando rendimiento máximo
     (Zero-runtime overhead).

---

## 6. Patrones de Diseño Utilizados

### Patrón "Master-Detail" (Maestro-Detalle)

Visible en la gestión de inventario y órdenes.

- **Izquierda/Centro:** Lista de ítems (Tabla).
- **Derecha:** Panel de detalles (`DetailPanel`).
- **Beneficio:** Permite al administrador revisar múltiples registros
  rápidamente sin perder el contexto de la lista ni esperar tiempos de carga de
  página.

### Patrón "Command-Driven" (Conducido por Comandos)

Visible en la integración de `CommandStore`.

- El usuario no necesita navegar por menús profundos.
- Puede invocar cualquier acción del sistema (Navegar, Crear, Exportar) mediante
  una búsqueda de texto global.

---

## 7. Notas para Escalabilidad

A medida que este proyecto crezca de "Plantilla" a "Producto Final":

1. **Módulos:** Se recomienda crear carpetas dentro de `routes/` para cada
   dominio (`routes/inventory/`, `routes/sales/`).
2. **APIs:** Los datos "mock" actuales deben reemplazarse por llamadas a bases
   de datos reales dentro de archivos `+page.server.ts`.
3. **Seguridad:** Implementar la protección de rutas en `hooks.server.ts`
   verificando sesiones de usuario antes de renderizar el `AppLayout`.
