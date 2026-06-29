/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /20-metodos-de-propiedad.js  -----------
    ----------------------------------------------------
*/


/**
 *  - `Representa un reproductor de música`
 * @typedef {Object} Reproductor
 * @property {(id: number) => void} reproducir - Reproduce una canción por su ID
 * @property {() => void} pausar - Pausa la reproducción actual
 * @property {(nombre: string) => void} crearPlaylist - Crea una nueva playlist
 * @property {(nombre: string) => void} reproducirPlaylist - Reproduce una playlist existente
 */



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  20-metodos-de-propiedad.js  -----');
    console.log('\n');


    /**
     * - `Objeto que simula un reproductor de música`
     * @type {Reproductor}
     */

    const reproductor = {

        reproducir: function (id) {
            console.log(`Reproduciendo Canción con el ID: ${id}`);
        },
       
        pausar: function () {
            console.log('Pausando...');
        },
       
        crearPlaylist: function (nombre) {
            console.log(`Creando la playlist: ${nombre}`);
        },
       
        reproducirPlaylist: function (nombre) {
            console.log(`Reproduciendo la playlist: ${nombre}`);
        }

    };


    console.log('-----  Reproductor de música  -----\n', {reproductor});

    
    //@ts-ignore

    //  -----  Agregando un nuevo método al reproductor  -----
    reproductor.borrarCancion = function (id) {
        console.log(`Eliminando la canción: ${id}`);
    };
    
    
    //  -----  Ejecución de métodos del reproductor  -----
    console.log('\n-----  Ejecutando métodos del reproductor  -----');
    console.log('\n');

    reproductor.reproducir(3840);
    reproductor.pausar();
    
    // @ts-ignore
    reproductor.borrarCancion(20);

    reproductor.crearPlaylist('Heavy Metal');
    reproductor.reproducirPlaylist('Heavy Metal');

    


})();
