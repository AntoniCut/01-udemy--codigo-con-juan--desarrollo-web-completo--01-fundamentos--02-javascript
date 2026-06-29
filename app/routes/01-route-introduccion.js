/*
    *  --------------------------------------------------------------------------------  *
    *  -----  /01-route-introduccion.js  --  /src/routes/01-route-introduccion.js  -----  *
    *  --------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route01Introduccion = {
    id: 'introduccion',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Introducción a JavaScript',
    path: '/introduccion',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/01-introduccion.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/01-introduccion.html`, target: '[data-component-page="introduccion"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/01-introduccion/00-home-js.html`, target: '[data-shiki="code00Home"]' },
    ],
    headerTitle: 'Introducción a JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/01-introduccion/00-home.js` },
    ]
};
