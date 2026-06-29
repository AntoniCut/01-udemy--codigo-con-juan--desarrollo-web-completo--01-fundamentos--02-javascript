/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /34-promise-all-then.js  ---------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  34-promise-all-then.js  -----');
    console.log('\n');


    /**
     * -----------------------------------------
     * -----  `descargarNuevosClientes()`  -----
     * -----------------------------------------
     * - Simula la descarga de nuevos clientes desde una base de datos o una API.
     * @returns {Promise<string>}
     */

    function descargarNuevosClientes() {

        return new Promise(resolve => {

            console.log('\nDescargando clientes... espere...');

            setTimeout(() => resolve('\nLos Clientes fueron Descargados'), 5000);

        });
    }



    /**
     * -----------------------------------------
     * -----  `descargarUltimosPedidos()`  -----
     * -----------------------------------------
     * - Simula la descarga de los últimos pedidos desde una base de datos o una API.
     * @returns {Promise<string>}
     */

    function descargarUltimosPedidos() {

        return new Promise(resolve => {

            console.log('\nDescargando pedidos... espere...');

            setTimeout(() => resolve('\nLos Pedidos fueron Descargados'), 3000);

        });
    }


    /**
     * --------------------
     * -----  `app()`  -----
     * --------------------
     * - Async Await es una forma de manejar las promesas de una manera más sencilla y legible, evitando el uso de callbacks y encadenamientos de promesas.
     * @async
     * @returns {Promise<void>} No retorna nada, solo ejecuta el código dentro de la función.
     */

    async function app() {
        
        console.log('Iniciando App...');

        const clientes = descargarNuevosClientes().then(res => {
            console.log(res);
            return res;
        });

        const pedidos = descargarUltimosPedidos().then(res => {
            console.log(res);
            return res;
        });

        await Promise.all([clientes, pedidos]);
    }



    //  -----  Ejecutar la función principal de la aplicación. -----  
    app();

    console.log('\nContinuando con otras tareas...');


})();
