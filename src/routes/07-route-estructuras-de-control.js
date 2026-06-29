/*
    *  ------------------------------------------------------------------------------------------------  *
    *  -----  /07-route-estructuras-de-control.js  --  /src/routes/07-route-estructuras-de-control.js  -----  *
    *  ------------------------------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route07EstructurasDeControl = {
    id: 'estructurasDeControl',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Estructuras de Control en JavaScript',
    path: '/estructuras-de-control',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/07-estructuras-de-control.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/07-estructuras-de-control.html`, target: '[data-component-page="estructurasDeControl"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/07-estructuras-de-control/22-estructuras-de-control-js.html`, target: '[data-shiki="code22EstructurasDeControl"]' },
        { url: `${MarkdownShikiHtml}/07-estructuras-de-control/23-switch-js.html`, target: '[data-shiki="code23Switch"]' },
        { url: `${MarkdownShikiHtml}/07-estructuras-de-control/24-for-loop-js.html`, target: '[data-shiki="code24ForLoop"]' },
        { url: `${MarkdownShikiHtml}/07-estructuras-de-control/25-foreach-y-map-js.html`, target: '[data-shiki="code25ForeachYMap"]' },
    ],
    headerTitle: 'Estructuras de Control en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/07-estructuras-de-control/22-estructuras-de-control.js` },
        { src: `${scripts}/07-estructuras-de-control/23-switch.js` },
        { src: `${scripts}/07-estructuras-de-control/24-for-loop.js` },
        { src: `${scripts}/07-estructuras-de-control/25-foreach-y-map.js` },
    ]
};
