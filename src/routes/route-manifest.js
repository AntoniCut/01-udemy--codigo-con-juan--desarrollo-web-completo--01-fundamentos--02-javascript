/*
    *  -------------------------------------------------------------------  *
    *  -----  /route-manifest.js  --  /src/routes/route-manifest.js  -----  *
    *  -------------------------------------------------------------------  *
*/


/**
 * - `Manifiesto ligero de rutas: solo id, path y nombre de archivo (sin imports)`
 * - Se usa para lazy loading: el módulo de cada ruta se importa dinámicamente bajo demanda.
 * @type {import("../../types/index.js").RouteManifest[]}
 */

export const routeManifest = [

    //  ----------  00 - Home  ----------
    {
        id: 'home',
        path: '',
        file: 'route-00-home'
    },

    //  ----------  01 - Introducción a JavaScript  ----------
    {
        id: 'introduccion',
        path: 'introduccion',
        file: '01-route-introduccion'
    },

    //  ----------  02 - Variables  ----------
    {
        id: 'variables',
        path: 'variables',
        file: '02-route-variables'
    },

    //  ----------  03 - Tipos de Datos  ----------
    {
        id: 'tiposDeDatos',
        path: 'tipos-de-datos',
        file: '03-route-tipos-de-datos'
    },

    //  ----------  04 - Objetos  ----------
    {
        id: 'objetos',
        path: 'objetos',
        file: '04-route-objetos'
    },

    //  ----------  05 - Arreglos  ----------
    {
        id: 'arreglos',
        path: 'arreglos',
        file: '05-route-arreglos'
    },

    //  ----------  06 - Funciones y Métodos  ----------
    {
        id: 'funcionesMetodos',
        path: 'funciones-metodos',
        file: '06-route-funciones-metodos'
    },

    //  ----------  07 - Estructuras de Control  ----------
    {
        id: 'estructurasDeControl',
        path: 'estructuras-de-control',
        file: '07-route-estructuras-de-control'
    },

    //  ----------  08 - Programación Orientada a Objetos  ----------
    {
        id: 'poo',
        path: 'poo',
        file: '08-route-poo'
    },

    //  ----------  09 - Asincronía  ----------
    {
        id: 'asincronia',
        path: 'asincronia',
        file: '09-route-asincronia'
    },

    //  ----------  404 - Not Found  ----------
    {
        id: '404NotFoundPage',
        path: '404-not-found-page',
        file: 'route-404-not-found-page'
    },

];
