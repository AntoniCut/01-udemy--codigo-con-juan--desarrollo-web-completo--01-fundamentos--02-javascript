/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /26-this.js  ---------------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  26-this.js  -----');
    console.log('\n');


    /*  -----  this  ----- 
        - El objeto this hace referencia al objeto padre, es decir, al objeto que lo contiene, 
          en este caso los objetos reservacion1 y reservacion2, por lo tanto:
          - this.nombre hace referencia a reservacion1.nombre,  y this.total hace referencia a reservacion1.total
          - this.nombre hace referencia a reservacion2.nombre,  y this.total hace referencia a reservacion2.total
    */


    const reservacion1 = {
        nombre: 'Juan',
        apellido: 'De la torre',
        total: 5000,
        pagado: false,
        informacion: function () {
            console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
        }
    }


    const reservacion2 = {
        nombre: 'Pedro',
        apellido: 'De la torre',
        total: 3000,
        pagado: false,
        informacion: function () {
            console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
        }
    }


    reservacion1.informacion();
    reservacion2.informacion();


})();
