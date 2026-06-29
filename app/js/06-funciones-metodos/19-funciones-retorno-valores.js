/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /19-funciones-retorno-valores.js  ------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  19-funciones-retorno-valores.js  -----');
    console.log('\n');



    /**
     * - `sumar` es una función que toma dos números como argumentos y devuelve su suma.
     * @param {number} n1 - El primer número que se va a sumar.
     * @param {number} n2 - El segundo número que se va a sumar.
     * @returns {number}
     */

    function sumar(n1, n2) {
        return n1 + n2;
    }


    /** - almacena el resultado de la suma de 2 y 3 */
    const resultado = sumar(2, 3);

    console.log('\nsumar(2, 3) => ', resultado);


    /*  
        -------------------------------------------------------------------------------------------
        -----  Ejemplo práctico: Funciones con retorno de valores para un carrito de compras  -----
        ------------------------------------------------------------------------------------------- 
    */

    /** - Variable para almacenar el total acumulado en el carrito */  
    let total = 0;

    /** - Variable para almacenar el porcentaje de impuesto */  
    let impuesto = 0.21; // 15% de impuesto


    /**
     * - `agregarCarrito` es una función que toma un número como argumento y devuelve el total actualizado después de agregar el precio al carrito.
     * @param {number} precio - El precio del artículo que se va a agregar al carrito. 
     * @returns {number} - El total actualizado después de agregar el precio al carrito.
     */
    
    function agregarCarrito(precio) {
        return total += precio;
    }


    /**
     * - `calcularImpuesto` es una función que toma un número como argumento y devuelve el total después de aplicar un impuesto del 15%.
     * @param {number} total - El total acumulado antes de calcular el impuesto.
     * @returns {number} - El total después de aplicar el impuesto.
     */

    function calcularImpuesto(total, impuesto = 0.15) {
        return (1 + impuesto) * total;
    }


    //  -----  Agregar precios al carrito y calcular el total  -----
    total = agregarCarrito(200);
    total = agregarCarrito(400);
    total = agregarCarrito(600);

    console.log('\n', {total});

    /** - almacena el total a pagar después de calcular el impuesto */
    const totalAPagar = calcularImpuesto(total, impuesto);

    console.log(`\nEl total a pagar de $${total} con impuesto del ${impuesto * 100}% es de: $${totalAPagar}`);


})();
