/*
    *  ----------------------------------------------------------------------------------------  *
    *  -----  /06-route-funciones-metodos.js  --  /src/routes/06-route-funciones-metodos.js  -----  *
    *  ----------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route06FuncionesMetodos = {
    id: 'funcionesMetodos',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Funciones y Métodos en JavaScript',
    path: '/funciones-metodos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/06-funciones-metodos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/06-funciones-metodos.html`, target: '[data-component-page="funcionesMetodos"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/16-funciones-js.html`, target: '[data-shiki="code16Funciones"]' },
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/17-diferencia-metodo-funcion-js.html`, target: '[data-shiki="code17DiferenciaMetodoFuncion"]' },
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/18-funciones-paramatros-argumentos-js.html`, target: '[data-shiki="code18FuncionesParamatrosArgumentos"]' },
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/19-funciones-retorno-valores-js.html`, target: '[data-shiki="code19FuncionesRetornoValores"]' },
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/20-metodos-de-propiedad-js.html`, target: '[data-shiki="code20MetodosDePropiedad"]' },
        { url: `${MarkdownShikiHtml}/06-funciones-metodos/21-arrow-functions-js.html`, target: '[data-shiki="code21ArrowFunctions"]' },
    ],
    headerTitle: 'Funciones y Métodos en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/06-funciones-metodos/16-funciones.js` },
        { src: `${scripts}/06-funciones-metodos/17-diferencia-metodo-funcion.js` },
        { src: `${scripts}/06-funciones-metodos/18-funciones-paramatros-argumentos.js` },
        { src: `${scripts}/06-funciones-metodos/19-funciones-retorno-valores.js` },
        { src: `${scripts}/06-funciones-metodos/20-metodos-de-propiedad.js` },
        { src: `${scripts}/06-funciones-metodos/21-arrow-functions.js` },
    ]
};
