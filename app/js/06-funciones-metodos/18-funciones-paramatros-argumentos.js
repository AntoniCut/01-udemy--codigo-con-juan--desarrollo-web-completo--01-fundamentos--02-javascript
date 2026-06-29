/*
    --------------------------------------------------------------
    ----------  udemy.antonydev.tech/  ---------------------------
    ----------  /05-codigo-con-juan/  ----------------------------
    ----------  /01-desarrollo-web-completo/  --------------------
    ----------  /05-javascript/  ---------------------------------
    ----------  /src/scripts/    ---------------------------------
    ----------  /18-funciones-paramatros-argumentos.js  ----------
    --------------------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  18-funciones-paramatros-argumentos.js  -----');
    console.log('\n');


    /**
     * - `sumar1` es una función que toma dos parámetros, `numero1` y `numero2`, y los suma. 
     *   Si no se proporcionan valores para estos parámetros, se les asigna un valor predeterminado de 0.
     * @param {number} numero1 - El primer número a sumar. Si no se proporciona, se asigna 0 por defecto. 
     * @param {number} numero2 - El segundo número a sumar. Si no se proporciona, se asigna 0 por defecto.
     */
    function sumar1(numero1 = 0, numero2 = 0) {
        
        console.log(`Función sumar1() => ${numero1} + ${numero2} = ${numero2 + numero1}`);
        
    }

    //  -----  Llamadas a la función `sumar1` con diferentes argumentos para demostrar su funcionamiento  -----
    sumar1(10, 5); 
    sumar1(3, 3);
    sumar1(3, 6);
    sumar1(1);
    sumar1();
    

    console.log('\n');

    /**
     * - `Función Anónima` asignada a la constante `sumar2`. Toma dos parámetros, `n1` y `n2`, y los suma. Al igual que en `sumar1`, si no se proporcionan valores para estos parámetros, se les asigna un valor predeterminado de 0.
     * @param {number} n1 
     * @param {number} n2 
     */
    
    const sumar2 = function (n1 = 0, n2 = 0) {
        
        console.log(`Función sumar2() => ${n1} + ${n2} = ${n1 + n2}`);
    }
    
    //  -----  Llamada a la función `sumar2` con argumentos para demostrar su funcionamiento  -----
    sumar2(5, 10);



})();
