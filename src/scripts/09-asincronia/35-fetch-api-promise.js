/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /35-fetch-api-promise.js  --------------
    ----------------------------------------------------
*/



(() => {


    /**
     * @typedef {import('../../../types/fetch-api-types.js').Empleado } Empleado
     * @typedef {import('../../../types/fetch-api-types.js').EmpleadosResponse } EmpleadosResponse
     */



    console.log('\n');
    console.warn('-----  35-fetch-api-promise.js  -----');
    console.log('\n');


    //*  -----  referencias al HTML (se buscan DENTRO de la función para esperar al pages-component)  -----


    /**
     * -------------------------------------------------
     * -----  obtenerEmpleados()  ----------------------
     * -------------------------------------------------
     * Función que obtiene un listado de empleados
     * desde un archivo JSON utilizando la Fetch API.
     *
     * - Realiza una petición HTTP GET
     * - Convierte la respuesta a JSON
     * - Extrae el arreglo de empleados
     * - Muestra la información en consola
     * - Muestra la información en el HTML
     *
     * @function obtenerEmpleados
     */

    const obtenerEmpleados = () => {


        console.log('\nObteniendo empleados...\n');

        /**
         * - Ruta relativa al archivo JSON.
         * - ⚠️ IMPORTANTE:
         * - La ruta se resuelve desde el HTML, no desde este archivo JS.
         *
         * @type {string}
         */

        //const url = './src/services/empleados.json';
        const url = 'app/services/empleados.json';


        //  -----  Buscar el contenedor JUSTO ANTES de usarlo (puede que el pages-component se inyecte después)  -----
        /** @type {HTMLDivElement|null} */
        const contenidoPromise = document.querySelector('.main__container .contenido-fetch-promise');

        console.log(`[35] contenido encontrado:`, contenidoPromise);

        if (!contenidoPromise) {
            console.error('No se encontró el contenedor para renderizar los empleados.');
            return;
        }


        fetch(url)

            .then(resultado => {

                console.log('\nResultado de la petición:', resultado);
                return resultado.json();
            })



            .then(

                /** @param {EmpleadosResponse} datos */
                datos => {

                    console.log('\nDatos completos:', datos);


                    //  ----- Desestructuración para extraer el arreglo de empleados  -----
                    const { empleados } = datos;

                    console.log('\nListado de empleados:', empleados);


                    //  ----- Recorrer el arreglo de empleados y mostrar su información  -----
                    empleados.forEach(

                        /** @param {Empleado} empleado */
                        empleado => {

                            //  ----- Desestructuración para extraer propiedades del empleado  -----
                            const { id, nombre, apellido, email, puesto } = empleado;

                            console.log(
                                `ID: ${id} | Nombre: ${nombre} ${apellido} | Email: ${email} | Puesto: ${puesto}`
                            );


                            //  ----- Agregar la información del empleado al contenido del HTML  -----
                            contenidoPromise.innerHTML += `
                            <li>
                                <strong>ID:</strong> ${id} <br>
                                <strong>Nombre:</strong> ${nombre} - ${apellido} <br>
                                <strong>Email:</strong> ${email} <br>
                                <strong>Puesto:</strong> ${puesto}
                            </li>
                            <br> <br>
                        `;

                            console.log(`[35] Renderizado empleado: ${id}`);

                        }

                    );


                })


            .catch(error => {
                console.error('Error al obtener los empleados:', error);
            });

    };

    // Ejecutar la función
    obtenerEmpleados();


})();
