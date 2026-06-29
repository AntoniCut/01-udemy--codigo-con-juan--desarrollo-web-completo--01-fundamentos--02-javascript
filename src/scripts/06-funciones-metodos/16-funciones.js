/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /16-funciones.js  ----------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  16-funciones.js  -----');
    console.log('\n');


    /*  
        -----  Llamada o invocación de la función  ----- 
        - Las funciones tradicionales se pueden llamar antes de su declaración, 
          esto se debe a un proceso llamado "hoisting" (elevación), donde el motor de JavaScript 
          eleva las declaraciones de funciones al inicio del ámbito de ejecución. 
          Por lo tanto, puedes invocar una función tradicional antes de su declaración sin problemas.
    */

    sumar1();

    //  -----  Declaración de la función  -----
    function sumar1() {
        
        console.log('10 + 10 => ', 10 + 10);
    }



    /*  
        -----  Expresión de la función  ----- 
        - Las funciones expresadas no se elevan, lo que significa que no puedes invocarlas antes de su declaración. 
          Si intentas hacerlo, obtendrás un error de referencia (ReferenceError) 
          porque la variable que contiene la función no ha sido asignada aún.
    */
    
    const sumar2 = function () {
        
        console.log('\n3 + 3 => ', 3 + 3);
    }

    sumar2();


    /*  -----  IIFE  (Immediately Invoked Function Expression)  ----- 
        - Es una función que se define y se ejecuta inmediatamente después de su creación. 
        - Se utiliza para crear un ámbito local y evitar la contaminación del ámbito global.
    */
    (function () {
        
        console.log('\nFunción IIFE  -  5 + 5 => ', 5 + 5);

    })();



})();
