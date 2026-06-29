/*
    *  ----------------------------------------------------------------------------  *
    *  -----  /05-route-arreglos.js  --  /src/routes/05-route-arreglos.js  -----  *
    *  ----------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route05Arreglos = {
    id: 'arreglos',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Arreglos en JavaScript',
    path: '/arreglos',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/05-arreglos.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/05-arreglos.html`, target: '[data-component-page="arreglos"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/05-arreglos/14-arreglos-js.html`, target: '[data-shiki="code14Arreglos"]' },
        { url: `${MarkdownShikiHtml}/05-arreglos/15-metodos-arreglos-js.html`, target: '[data-shiki="code15MetodosArreglos"]' },
    ],
    headerTitle: 'Arreglos en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/05-arreglos/14-arreglos.js` },
        { src: `${scripts}/05-arreglos/15-metodos-arreglos.js` },
    ]
};
