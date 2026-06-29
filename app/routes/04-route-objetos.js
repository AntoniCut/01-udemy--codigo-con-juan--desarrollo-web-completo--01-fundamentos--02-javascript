/*
    *  ----------------------------------------------------------------------  *
    *  -----  /04-route-objetos.js  --  /src/routes/04-route-objetos.js  -----  *
    *  ----------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route04Objetos = {
    id: 'objetos',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Objetos en JavaScript',
    path: '/objetos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/04-objetos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/04-objetos.html`, target: '[data-component-page="objetos"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/04-objetos/10-objetos-literales-js.html`, target: '[data-shiki="code10ObjetosLiterales"]' },
        { url: `${MarkdownShikiHtml}/04-objetos/11-desestructuring-objetos-js.html`, target: '[data-shiki="code11DesestructuringObjetos"]' },
        { url: `${MarkdownShikiHtml}/04-objetos/12-metodos-objetos-js.html`, target: '[data-shiki="code12MetodosObjetos"]' },
        { url: `${MarkdownShikiHtml}/04-objetos/13-spread-operator-js.html`, target: '[data-shiki="code13SpreadOperator"]' },
    ],
    headerTitle: 'Objetos en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/04-objetos/10-objetos-literales.js` },
        { src: `${scripts}/04-objetos/11-desestructuring-objetos.js` },
        { src: `${scripts}/04-objetos/12-metodos-objetos.js` },
        { src: `${scripts}/04-objetos/13-spread-operator.js` },
    ]
};
