# Guía de Comandos de Desarrollo

Esta referencia documenta los comandos esenciales para instalar, desarrollar, probar y construir el proyecto **Inventory**.

> **Nota:** Este proyecto utiliza **[Bun](https://bun.sh/)** como gestor de paquetes y runtime. Asegúrate de tenerlo instalado (`curl -fsSL https://bun.sh/install | bash`).

---

## 🚀 Inicialización

Comandos para configurar el proyecto por primera vez o tras clonar el repositorio.

### Instalar Dependencias
Descarga e instala todas las bibliotecas listadas en `package.json` (incluyendo `rune-lab`, SvelteKit, DaisyUI, etc.).

```bash
bun install
```

### Sincronización Inicial (Importante)
Si al abrir el proyecto ves errores de tipos o módulos no encontrados (especialmente con `$lib` o `paraglide`), ejecuta este comando para generar los archivos internos de SvelteKit.

```bash
bun run prepare
```

---

## 💻 Desarrollo Diario

Los comandos que usarás el 90% del tiempo.

### Iniciar Servidor de Desarrollo
Arranca el servidor local con Hot Module Replacement (HMR).

```bash
bun run dev
```

### Iniciar y Exponer en Red (Recomendado)
Arranca el servidor y lo hace accesible desde otros dispositivos en tu red local (útil para probar en móviles o tablets).

```bash
bun run dev --host
```
*Acceso típico: `http://localhost:5173` o `http://tu-ip-local:5173`*

---

## ✅ Calidad de Código (Type Checking)

Antes de hacer un commit o desplegar, **siempre** verifica que no haya errores de TypeScript o sintaxis de Svelte.

### Verificar Todo
Ejecuta `svelte-check` en todo el proyecto. Analiza archivos `.svelte`, `.ts` y `.js`. Si este comando pasa sin errores, tu código es sólido.

```bash
bun run check
```

### Verificar en Modo Observador (Watch)
Mantiene la verificación corriendo y te avisa en tiempo real si cometes un error mientras programas.

```bash
bun run check:watch
```

---


## 🛠️ Gestión de Paquetes

Cómo añadir o quitar librerías usando Bun.

### Añadir una Dependencia de Producción
Para librerías que la app necesita para funcionar (ej. una librería de gráficos).

```bash
bun add <nombre-del-paquete>  # instalar paquete
bun add rune-lab  # instalar rune-lab
```

### Actualizar Dependencias
Actualiza los paquetes a sus últimas versiones compatibles según [`package.json`](../package.json).

```bash
bun update
```