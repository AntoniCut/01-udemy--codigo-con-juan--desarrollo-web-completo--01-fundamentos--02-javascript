/*
    *  ----------------------------------------------------------------------  *
    *  -----  /09-route-asincronia.js  --  /src/routes/09-route-asincronia.js  -----  *
    *  ----------------------------------------------------------------------  *
*/

import { paths } from './paths.js';

const { favicon, layoutHeader, layoutNavbar, pages, pagesComponents, MarkdownShikiHtml, layoutFooter, styles, scripts } = paths;

/** @type {import("../../types/index.js").Route} */
export const route09Asincronia = {
    id: 'asincronia',
    favicon: `${favicon}/javascript-icon.svg`,
    pageTitle: 'Asincronía en JavaScript',
    path: '/asincronia',
    components: {
        "layoutHeader": `${layoutHeader}`,
        "layoutNavbar": `${layoutNavbar}`,
        "layoutMain": `${pages}/09-asincronia.html`,
        "layoutFooter": `${layoutFooter}`,
    },
    pagesComponents: [
        { url: `${pagesComponents}/09-asincronia.html`, target: '[data-component-page="asincronia"]' },
    ],
    MarkdownShikiHtml: [
        { url: `${MarkdownShikiHtml}/09-asincronia/29-try-catch-js.html`, target: '[data-shiki="code29TryCatch"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/30-promises-js.html`, target: '[data-shiki="code30Promises"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/31-notification-api-js.html`, target: '[data-shiki="code31NotificationApi"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/32-async-await-js.html`, target: '[data-shiki="code32AsyncAwait"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/33-promise-all-js.html`, target: '[data-shiki="code33PromiseAll"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/34-promise-all-then-js.html`, target: '[data-shiki="code34PromiseAllThen"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/35-fetch-api-promise-js.html`, target: '[data-shiki="code35FetchApiPromise"]' },
        { url: `${MarkdownShikiHtml}/09-asincronia/36-fetch-api-async-await-js.html`, target: '[data-shiki="code36FetchApiAsyncAwait"]' },
    ],
    headerTitle: 'Asincronía en JavaScript',
    styles: [
        { href: `${styles}/home.css` }
    ],
    scripts: [
        { src: `${scripts}/09-asincronia/29-try-catch.js` },
        { src: `${scripts}/09-asincronia/30-promises.js` },
        { src: `${scripts}/09-asincronia/31-notification-api.js` },
        { src: `${scripts}/09-asincronia/32-async-await.js` },
        { src: `${scripts}/09-asincronia/33-promise-all.js` },
        { src: `${scripts}/09-asincronia/34-promise-all-then.js` },
        { src: `${scripts}/09-asincronia/35-fetch-api-promise.js` },
        { src: `${scripts}/09-asincronia/36-fetch-api-async-await.js` },
    ]
};
