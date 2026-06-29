/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /17-diferencia-metodo-funcion.js  ------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  17-diferencia-metodo-funcion.js  -----');
    console.log('\n');


    const numero1 = 20;
    const numero2 = "20";

    console.log({numero1}, {numero2});

    
    //  -----  parseInt() es una función  -----
    let number = parseInt(numero2);
    console.log('\nparseInt(numero2) => ', number); 

    
    //  -----  toString() es un método porque se llama a través de un objeto (numero1)  -----
    let string = numero1.toString();
    console.log('numero1.toString() => ', string); 


})();
