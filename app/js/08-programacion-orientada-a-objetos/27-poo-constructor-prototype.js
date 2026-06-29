/*
    --------------------------------------------------------
    ----------  udemy.antonydev.tech/  ---------------------
    ----------  /05-codigo-con-juan/  ----------------------
    ----------  /01-desarrollo-web-completo/  --------------
    ----------  /05-javascript/  ---------------------------
    ----------  /src/scripts/    ---------------------------
    ----------  /27-poo-constructor-prototype.js  ----------
    --------------------------------------------------------
*/



(() => {
    
    
    console.clear();
    console.log('\n');
    console.warn('-----  27-poo-constructor-prototype.js  -----');
    console.log('\n');


    /*
        ----------------------------
        -----  Objeto Literal  -----
        ----------------------------
    */
    

    /** `Object Literal` */
    const producto = {
        nombre: 'Tablet',
        precio: 500
    }

    console.log('producto => ', producto);
    


    /*
        ----------------------------------------------------------------
        -----  Cliente  -----  Objetos Constructores y prototipos  -----
        ----------------------------------------------------------------
    */

   
    /**
     * -----------------------------------------
     * -----  `Cliente(nombre, apellido)`  -----
     * -----------------------------------------
     * 
     * - Objeto Constructor para crear clientes.
     * - Crea una instancia de Cliente.
     * 
     * @constructor
     * @param {string} nombre - Nombre del cliente
     * @param {string} apellido - Apellido del cliente
     * 
     */

    function Cliente(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }


    /**
     * ----------------------------------
     * -----  `formatearCliente()`  -----
     * ----------------------------------
     * 
     * Devuelve un string con la información del cliente.
     *
     * @prototype
     * @returns {string}
     * 
     */

    Cliente.prototype.formatearCliente = function () {
        return `El Cliente ${this.nombre} ${this.apellido}`;
    };



    /*
        -----------------------------------------------------------------
        -----  Producto  -----  Objetos Constructores y prototipos  -----
        -----------------------------------------------------------------
    */

    
    /**
     * -----------------------------------------
     * -----  `Producto(nombre, precio)`  -----
     * -----------------------------------------
     * 
     * - Objeto Constructor para crear productos.
     * - Crea una instancia de Producto.
     * 
     * @constructor
     * @param {string} nombre - Nombre del producto
     * @param {number} precio - Precio del producto
     * 
     */

    function Producto(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }



    /**
     * -----------------------------------
     * -----  `formatearProducto()`  -----
     * -----------------------------------
     * 
     * Devuelve un string con la información del producto.
     * 
     * @prototype
     * @returns {string}
     * 
     */

    Producto.prototype.formatearProducto = function () {
        return `El Producto ${this.nombre} tiene un precio de: $${this.precio}`;
    };



    /*
        ----------------------------------------------------
        -----  Instancias de clase Producto y Cliente  -----
        ----------------------------------------------------
    */
     

    //  -----  Instancia de Producto  -----
    const producto1 = new Producto('Monitor Curvo de 49"', 800);
    console.log('\nproducto1 =>', producto1);
    console.log('producto1.formatearProducto() =>', producto1.formatearProducto());


    //  -----  Otra instancia de Producto  -----
    const producto2 = new Producto('Laptop', 300);
    console.log('\nproducto2 =>', producto2);
    console.log('producto2.formatearProducto() =>', producto2.formatearProducto());

    

    //  -----  Instancia de Cliente  -----
    const cliente = new Cliente('Juan', 'De la Torre');
    console.log('\ncliente =>', cliente);
    console.log('cliente.formatearCliente() =>', cliente.formatearCliente());

    
})();
