/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /28-poo-clases-herencia.js  ------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  28-poo-clases-herencia.js  -----');
    console.log('\n');


    /*
        --------------------
        -----  CLASES  -----
        --------------------
    */


    /**
     * ------------------------------
     * -----  `class Producto`  -----
     * ------------------------------
     * `Representa un producto dentro de la aplicación`
     * @class
     */

    class Producto {

        /**
         * Crea una nueva instancia de Producto.
         * @constructor
         * @param {string} nombre - Nombre del producto
         * @param {number} precio - Precio del producto
         */

        constructor(nombre, precio) {

            /** @type {string} */
            this.nombre = nombre;

            /** @type {number} */
            this.precio = precio;

        }

        /**
         * `Devuelve una descripción del producto con su precio`
         * @method        
         * @returns {string} Información formateada del producto
         */
        formatearProducto() {
            return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
        }
    }


    console.log('\nProducto => ', Producto);


    //  -----  instancia producto1 de la clase Producto  -----
    const producto1 = new Producto('Monitor Curvo de 49"', 800);

    console.log('producto1 => ', producto1);
    console.log('producto1.formatearProducto() => ', producto1.formatearProducto());


    //  -----  instancia producto2 de la clase Producto  -----
    const producto2 = new Producto('Laptop', 300);

    console.log('producto2 => ', producto2);
    console.log('producto2.formatearProducto() => ', producto2.formatearProducto());



    /*
        ----------------------
        -----  HERENCIA  -----
        ----------------------
    */


    /**
     * --------------------------------------------
     * -----  `class Libro extends Producto`  -----
     * --------------------------------------------
     * Representa un libro, que es un tipo específico de Producto.
     * Hereda propiedades y métodos de la clase Producto.
     * @class
     * @extends Producto
     */

    class Libro extends Producto {


        /**
         * Crea una nueva instancia de Libro.
         * @constructor
         * @param {string} nombre - Nombre del libro
         * @param {number} precio - Precio del libro
         * @param {string} isbn - Código ISBN del libro
         */
        constructor(nombre, precio, isbn) {
            
            //  -----  Llama al constructor de la clase padre (Producto)  -----
            super(nombre, precio);

            /** @type {string} */
            this.isbn = isbn;
        }

        /**
         * - Devuelve una descripción del libro incluyendo su ISBN.
         * - Sobrescribe el método formatearProducto de Producto.
         * @method
         * @override
         * @returns {string} Información formateada del libro
         */
        formatearProducto() {
            return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
        }
       
    }

    console.log('\nLibro => ', Libro);

    
    //  -----  instancia libro de la clase Libro que hereda de Producto  -----
    const libro = new Libro('JavaScript la Revolución', 120, '910313981389139');

    console.log('\nlibro => ', libro);
    console.log('\nlibro.formatearProducto() => ', libro.formatearProducto());


})();



