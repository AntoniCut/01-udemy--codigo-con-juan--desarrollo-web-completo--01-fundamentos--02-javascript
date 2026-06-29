# 02 — JavaScript Fundamentos - Curso Desarrollo Web Completo

SPA en Vanilla JS (ES Modules) que renderiza el material didáctico del curso
**"Desarrollo Web Completo"** de Juan Pablo De la Torre (Udemy), sección
**02 — JavaScript Fundamentos**.

Incluye el plugin propio `spa-loader-content-html-v3` (lazy loading,
View Transitions, Markdown Shiki, History API, etc.), un pipeline de Gulp
(`src/` → `app/` → `dist/`) con compilación SCSS, resaltado de código con
**Shiki** (tema `dark-plus`) y dos servidores Express (desarrollo con
BrowserSync y preview del build de producción).

---

## Scripts

| Script | Descripción |
|---|---|
| `pnpm dev` | **Pre-limpia** (`app/`, `dist/`, `src/markdown-shiki/`) y arranca el entorno de desarrollo (Gulp watch + dev-server con polling). |
| `pnpm dev:watch` | Solo el watch de Gulp (sin servidor). |
| `pnpm serve:dev` | Solo el dev-server (puerto `9876`). |
| `pnpm stop:dev` | Detiene la instancia activa del dev-server. |
| `pnpm server` | Alias de `pnpm serve:dev`. |
| `pnpm build` | Build de producción en `dist/` (limpio, compilado y minificado). |
| `pnpm preview` | Sirve el build de `dist/` (puerto `8765`). |
| `pnpm code-highlight` | Regenera los bloques HTML resaltados con Shiki. |
| `pnpm add:ts-nocheck` | Inserta `// @ts-nocheck` en los archivos JS (solo desarrollo). |

### Hook `predev`

`pnpm` ejecuta automáticamente `predev` antes de `dev`. El script
`predev.js` elimina:

- `app/` (artefacto servible)
- `dist/` (build de producción)
- `src/markdown-shiki/` (se regenera desde cero con `generateShiki`)

---

## Estructura del proyecto

```
/ (raíz)
├── index.html                 → Entrada HTML, define <base href> y carga app/main.js
├── gulpfile.js                → Pipeline de build (copyAll, dev, build, styles, watch)
├── generate-markdown-shiki.js → Genera HTML resaltado con Shiki desde src/routes
├── predev.js                  → Limpia app/, dist/ y src/markdown-shiki/ antes de dev
├── generate-shiki-from-scripts.js → Generador auxiliar de HTML Shiki (scripts → html)
├── package.json               → Scripts npm y dependencias
├── jsconfig.json              → Tipado estricto JSDoc
├── .env                       → Puertos (DEV_SERVER_PORT=9876, PREVIEW_SERVER_PORT=8765)
├── .htaccess                  → Rewrite rules para Apache
│
├── src/                       → CÓDIGO FUENTE
│   ├── main.js                → Bootstrap: effectLoadingPage() + spa()
│   ├── spa/spa.js             → Llama al plugin con routeManifest y base
│   ├── routes/                → Manifiesto + rutas (route-XX-name.js) y paths.js
│   ├── pages/                 → Wrappers de páginas (contenedores con data-component-page)
│   ├── pages-components/       → Contenido real de cada página (hero, tarjetas, tags)
│   ├── components/layouts/    → layout-header, layout-navbar, layout-footer
│   ├── plugins/spa-loader-content-html/v3/  → Plugin principal
│   ├── effects/effect-loading-page.js       → Loader inicial (fade-in/out)
│   ├── scripts/               → Recursos JS por sección del curso (01-09)
│   ├── scss/                  → globals.scss + base/ + components/ + pages/
│   └── markdown-shiki/        → HTML pre-compilado con Shiki (se regenera con dev)
│
├── app/                       → ARTEFACTO SERVIDO (copia de src/, post-compilación)
│
├── server/                    → Servidores Node
│   ├── dev-server.js          → Express + BrowserSync + php-cgi (puerto 9876)
│   ├── preview-server.js      → Express + php-cgi (puerto 8765, sirve dist/)
│   └── stop-dev-server.js     → Mata el dev-server por PID (ss + ps)
│
├── types/                     → Tipos JSDoc (Route, RouteManifest, ConfigOptionsSPA, etc.)
└── assets/                    → Recursos estáticos (logos, favicon)
```

---

## Rutas (Temario JavaScript)

| # | Path | Sección | Página wrapper | Página component |
|---|---|---|---|---|
| 00 | `/` | Home | `src/pages/home.html` | `src/pages-components/home.html` |
| 01 | `/introduccion` | Introducción a JavaScript | `src/pages/01-introduccion.html` | `src/pages-components/01-introduccion.html` |
| 02 | `/variables` | Variables — `var`, `let`, `const` | `src/pages/02-variables.html` | `src/pages-components/02-variables.html` |
| 03 | `/tipos-de-datos` | Tipos de Datos | `src/pages/03-tipos-de-datos.html` | `src/pages-components/03-tipos-de-datos.html` |
| 04 | `/objetos` | Objetos en JavaScript | `src/pages/04-objetos.html` | `src/pages-components/04-objetos.html` |
| 05 | `/arreglos` | Arreglos en JavaScript | `src/pages/05-arreglos.html` | `src/pages-components/05-arreglos.html` |
| 06 | `/funciones-metodos` | Funciones y Métodos | `src/pages/06-funciones-metodos.html` | `src/pages-components/06-funciones-metodos.html` |
| 07 | `/estructuras-de-control` | Estructuras de Control | `src/pages/07-estructuras-de-control.html` | `src/pages-components/07-estructuras-de-control.html` |
| 08 | `/poo` | Programación Orientada a Objetos | `src/pages/08-poo.html` | `src/pages-components/08-poo.html` |
| 09 | `/asincronia` | Asincronía | `src/pages/09-asincronia.html` | `src/pages-components/09-asincronia.html` |
| 404 | `/404-not-found-page` | Página no encontrada | `src/pages/404/...` | — |

---

## Plugin SPA — `spa-loader-content-html-v3`

Plugin vanilla para navegación SPA con lazy loading, sin frameworks.

### Características principales

- **Lazy Loading de Rutas**: los módulos de ruta se importan dinámicamente con `import()` solo cuando se navega. Un manifiesto ligero (`routeManifest`) registra cada ruta con `id`, `path` y `file`.
- **View Transitions API**: cuando el navegador lo soporta, el renderizado de la nueva ruta se envuelve en una transición nativa (`document.startViewTransition`).
- **Route Manifest**: array de `{ id, path, file }`. El plugin resuelve la ruta activa comparando `window.location.pathname` con cada `path` y carga el módulo bajo demanda.
- **Inyección de HTML por Componente**: cada ruta define un objeto `components` con la clave = id del contenedor en el DOM y el valor = URL del fragmento HTML. El plugin hace `fetch()` de cada fragmento y lo inyecta secuencialmente.
- **CSS y JS por Ruta**: cada ruta declara sus propios `styles` y `scripts`. El plugin los inyecta dinámicamente en el `<head>` al navegar a esa ruta.
- **Markdown Shiki**: cada ruta puede declarar un array `MarkdownShikiHtml` con entradas `{ url, target }`. Tras cargar la vista, el plugin hace `fetch()` de los bloques HTML generados con Shiki y los inyecta en `[data-shiki="..."]`.
- **Reescritura de URLs en HTML**: al inyectar fragmentos HTML, el plugin reescribe automáticamente las rutas relativas de `src`, `href`, `poster` y `srcset` respecto a la URL del fragmento origen.
- **Navegación con History API**: intercepta clics en `<a data-id>` y actualiza la URL con `history.pushState()` sin recargar la página. El evento `popstate` restaura la ruta al usar los botones atrás/adelante.
- **Metadatos Dinámicos por Ruta**: cada ruta puede definir `pageTitle`, `headerTitle` y `favicon`. El plugin actualiza el `<title>`, el encabezado del layout y el icono de la pestaña al navegar, con cache-busting en el favicon.
- **Ruta 404 Integrada**: si la URL no coincide con ninguna entrada del manifest, el plugin carga automáticamente la ruta `404NotFoundPage`.
- **Loader Inicial Desacoplado**: el efecto `effect-loading-page.js` escucha `spa:first-route-loaded` y `spa:route-load-error` para ocultar el loader solo cuando la primera ruta SPA termina de cargar (o tras un timeout de fallback).
- **Caché de Módulos**: los módulos de ruta se cachean en un `Map` interno para evitar importaciones redundantes.
- **Eventos Personalizados**: `spa:route-loaded`, `spa:first-route-loaded` y `spa:route-load-error` para desacoplar el loader visual de la navegación SPA.

### Opciones de configuración

| Opción | Descripción |
|---|---|
| `routeManifest` | Manifiesto ligero de rutas para lazy loading. |
| `routeModulesBase` | Ruta base para importar dinámicamente los módulos de ruta. |
| `base` | Ruta base de la aplicación (para `history.pushState` y normalización). |

### Eventos personalizados

| Evento | Descripción |
|---|---|
| `spa:route-loaded` | Se emite en cada navegación con `{ id, path }`. |
| `spa:first-route-loaded` | Se emite una sola vez al cargar la primera ruta. |
| `spa:route-load-error` | Se emite en error con `{ id, path, source, message }`. |

---

## Pipeline de desarrollo

```
src/scripts|pages|scss  ──▶  src/markdown-shiki  ──▶  app/markdown-shiki  ──▶  DOM
   (fuente)        generateShiki    (HTML Shiki)   copyMarkdownShiki   fetch+innerHTML
```

### 1. Generación (Node)

`generate-markdown-shiki.js` lee las rutas de `src/routes/0X-route-*.js`, recolecta
las entradas `MarkdownShikiHtml` (objetos `{ url, target }`) y, para cada una,
deriva el archivo fuente por **convención de nombres**:

| Patrón `url` | Archivo fuente | Lenguaje Shiki |
|---|---|---|
| `0X-seccion/archivo-js.html` | `src/scripts/0X-seccion/archivo.js` | `javascript` |

> Los markdown son **uno por cada archivo `.js`** que carga la página (uno por entrada `MarkdownShikiHtml`).

La generación se ejecuta en paralelo con `Promise.all`. La salida se escribe en
`src/markdown-shiki/0X-seccion/archivo-js.html` con el tema `dark-plus`.

### 2. Compilación SCSS (Gulp)

Gulp compila `src/scss/pages/*.scss` → `app/css/pages/*.css` con sourcemaps.
El archivo `home.scss` contiene los estilos de las tarjetas (`js-page__*`).

### 3. Copia Gulp

La tarea `copyMarkdownShiki` copia `src/markdown-shiki/` → `app/markdown-shiki/`.
La cadena `copyAll` ejecuta `buildSources → generateShiki → copyMarkdownShiki`.

### 4. Servidor

El dev-server (`server/dev-server.js`) sirve el contenido desde `app/` con
fallback SPA, soporte PHP (`php-cgi`) y proxy BrowserSync con live reload.

### 5. Inyección SPA

En el navegador, `renderMarkdownShiki(route)` recorre las entradas
`MarkdownShikiHtml` de la ruta y, para cada una:

- hace `fetch(url)` del HTML pre-compilado,
- localiza el contenedor con `document.querySelector(target)`,
- inserta el HTML con `container.innerHTML`.

> Cada entrada debe tener un `target` **único** (p. ej. `[data-shiki="code01Var"]`).
> Si dos entradas comparten el mismo `target`, solo se renderiza la última.

### Watch en tiempo real

`gulp dev` ejecuta `copyAll` y observa cambios en `src/`:

| Cambio | Acción encadenada |
|---|---|
| `src/scss/**` | `styles → generateShiki → copyMarkdownShiki` |
| `src/scripts/**` | `generateShiki → copyMarkdownShiki` |
| `src/markdown-shiki/**` | `copyMarkdownShiki` |
| `src/{components,effects,pages,pages-components,plugins,routes,spa,main}` | copia directa a `app/` |

> Soporta polling vía `CHOKIDAR_USEPOLLING=true` para entornos Linux con límites de inotify.

---

## Estructura de una ruta

Cada ruta en `src/routes/0X-route-*.js` sigue este patrón:

```js
export const routeXXNombre = {
    id: 'nombre',                          // id único de la ruta
    favicon: `${favicon}/archivo.svg`,     // favicon específico
    pageTitle: '...',                       // <title>
    path: '/nombre',                        // URL interna
    components: {                          // HTML inyectado en contenedores #id
        layoutHeader, layoutNavbar, layoutMain, layoutFooter
    },
    pagesComponents: [                      // HTML inyectado en [data-component-page="..."]
        { url: `${pagesComponents}/0X-nombre.html`, target: '[data-component-page="nombre"]' }
    ],
    MarkdownShikiHtml: [                    // HTML Shiki por cada archivo .js
        { url: `${MarkdownShikiHtml}/0X-seccion/archivo-js.html`, target: '[data-shiki="codeXXArchivo"]' }
    ],
    headerTitle: '...',                     // Título en layout-header
    styles: [{ href: `${styles}/home.css` }],
    scripts: [                             // Scripts cargados individualmente
        { src: `${scripts}/0X-seccion/archivo.js` }
    ]
};
```

---

## Build de producción

`pnpm build` ejecuta `gulp build`:

1. **Limpia** `dist/` y `app/`.
2. **Regenera** `app/` desde `src/` (copyAll con Shiki).
3. **Minifica** en paralelo:
   - `minifyAllJs` → `terser` → `dist/app/**/*.js`
   - `minifyAllCss` → `cleanCSS` → `dist/app/**/*.css`
   - `minifyRootIndex` → `htmlmin` → `dist/index.html`
   - `minifyHtml` → `htmlmin` sobre `app/**/*.html` → `dist/`
   - `copyStaticAssetsToDist` → assets de `app/` que no son html/css/js/map
   - `copyRootAssetsToDist` → `assets/`
4. `pnpm preview` → `server/preview-server.js` (Express, puerto 8765) sirve
   `dist/` con el mismo prefijo de ruta y `php-cgi`.

El hosting Apache (`.htaccess`) hace fallback a `index.html` para rutas SPA
desconocidas.

---

## Variables de entorno (`.env`)

```env
DEV_SERVER_PORT=9876        # Puerto del dev-server (BrowserSync)
PREVIEW_SERVER_PORT=8765    # Puerto del preview del build
```

---

## Requisitos

- Node.js ≥ 18
- pnpm
- PHP-CGI (opcional, para soporte PHP en dev/preview): `sudo apt install php-cgi`
