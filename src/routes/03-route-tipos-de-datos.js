/*
    *  ----------------------------------------------------------------------------------  *
    *  -----  /03-route-tipos-de-datos.js  --  /src/routes/03-route-tipos-de-datos.js  -----  *
    *  ----------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route03TiposDeDatos = {
    id: 'tiposDeDatos',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Tipos de Datos en JavaScript',
    path: '/tipos-de-datos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/03-tipos-de-datos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/03-tipos-de-datos.html`, target: '[data-component-page="tiposDeDatos"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/04-string-js.html`, target: '[data-shiki="code04String"]' },
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/05-numeros-operadores-js.html`, target: '[data-shiki="code05NumerosOperadores"]' },
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/06-objeto-math-js.html`, target: '[data-shiki="code06ObjetoMath"]' },
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/07-orden-operaciones-js.html`, target: '[data-shiki="code07OrdenOperaciones"]' },
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/08-template-string-js.html`, target: '[data-shiki="code08TemplateString"]' },
        { url: `${MarkdownShikiHtml}/03-tipos-de-datos/09-booleans-js.html`, target: '[data-shiki="code09Booleans"]' },
    ],
    headerTitle: 'Tipos de Datos en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/03-tipos-de-datos/04-string.js` },
        { src: `${scripts}/03-tipos-de-datos/05-numeros-operadores.js` },
        { src: `${scripts}/03-tipos-de-datos/06-objeto-math.js` },
        { src: `${scripts}/03-tipos-de-datos/07-orden-operaciones.js` },
        { src: `${scripts}/03-tipos-de-datos/08-template-string.js` },
        { src: `${scripts}/03-tipos-de-datos/09-booleans.js` },
    ]
};
