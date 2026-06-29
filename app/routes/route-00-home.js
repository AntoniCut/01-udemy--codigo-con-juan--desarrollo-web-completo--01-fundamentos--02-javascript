/*
    *  ------------------------------------------  *
    *  -----  /route-00-home.js  -----  *
    *  ------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @typedef {import("../../types/index.js").Route} Route */

/** @type {Route} - `-----  Ruta deinicio  -----` */
export const route00Home = {
    id: 'home',
    favicon: `${favicon}/javascript-favicon.ico`,
    pageTitle: 'JavaScript Fundamentos — Desarrollo Web Completo',
    path: '',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/home.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/home.html`, target: '[data-component-page="home"]' },
    ],
    MarkdownShikiHtml: [],
    headerTitle: 'JavaScript Fundamentos — Desarrollo Web Completo',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: []
};