/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /05-numeros-operadores.js  -------------
    ----------------------------------------------------
*/



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  05-numeros-operadores.js  -----');
    console.log('\n');


    //  -----  Números y Operadores en JavaScript  -----
    const numero1 = 100;
    const numero2 = 200;
    const numero3 = 9;
    const numero4 = 3;
    const numero5 = -5;

    //  -----  Tabla de números  -----
    console.table({ numero1, numero2, numero3, numero4, numero5 });

    //  -----  Operadores Aritméticos  -----
    console.log('\n\nsuma => numero1 + numero2 = ', numero1 + numero2);
    console.log('resta => numero2 - numero1 = ', numero2 - numero1);
    console.log('multiplicacion => numero2 * numero1 = ', numero2 * numero1);
    console.log('division => numero2 / numero1 = ', numero2 / numero1);
    console.log('modulo => numero3 % numero4 = ', numero3 % numero4);
    
})();
