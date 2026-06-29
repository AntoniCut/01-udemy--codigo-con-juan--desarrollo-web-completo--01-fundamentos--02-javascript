/*
    *  ----------------------------------------------------------------  *
    *  -----  /08-route-poo.js  --  /src/routes/08-route-poo.js  -----  *
    *  ----------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route08Poo = {
    id: 'poo',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Programación Orientada a Objetos en JavaScript',
    path: '/poo',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/08-poo.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/08-poo.html`, target: '[data-component-page="poo"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/08-programacion-orientada-a-objetos/26-this-js.html`, target: '[data-shiki="code26This"]' },
        { url: `${MarkdownShikiHtml}/08-programacion-orientada-a-objetos/27-poo-constructor-prototype-js.html`, target: '[data-shiki="code27PooConstructorPrototype"]' },
        { url: `${MarkdownShikiHtml}/08-programacion-orientada-a-objetos/28-poo-clases-herencia-js.html`, target: '[data-shiki="code28PooClasesHerencia"]' },
    ],
    headerTitle: 'Programación Orientada a Objetos en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/08-programacion-orientada-a-objetos/26-this.js` },
        { src: `${scripts}/08-programacion-orientada-a-objetos/27-poo-constructor-prototype.js` },
        { src: `${scripts}/08-programacion-orientada-a-objetos/28-poo-clases-herencia.js` },
    ]
};
