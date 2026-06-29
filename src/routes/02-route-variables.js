/*
    *  ----------------------------------------------------------------------------  *
    *  -----  /02-route-variables.js  --  /src/routes/02-route-variables.js  -----  *
    *  ----------------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route02Variables = {
    id: 'variables',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Variables en JavaScript — var, let, const',
    path: '/variables',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/02-variables.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/02-variables.html`, target: '[data-component-page="variables"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/02-variables/01-var-js.html`, target: '[data-shiki="code01Var"]' },
        { url: `${MarkdownShikiHtml}/02-variables/02-let-js.html`, target: '[data-shiki="code02Let"]' },
        { url: `${MarkdownShikiHtml}/02-variables/03-const-js.html`, target: '[data-shiki="code03Const"]' },
    ],
    headerTitle: 'Variables en JavaScript — var, let, const',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/02-variables/01-var.js` },
        { src: `${scripts}/02-variables/02-let.js` },
        { src: `${scripts}/02-variables/03-const.js` },
    ]
};
