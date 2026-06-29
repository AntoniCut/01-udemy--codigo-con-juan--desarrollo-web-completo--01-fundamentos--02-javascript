/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /14-arreglos.js  -----------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  14-arreglos.js  -----');
    console.log('\n');

    //  -----  Arreglos o Arrays  -----
    const numeros = [10, 20, 30, 40, 50];

    console.log('----- numeros[] -----');
    console.table(numeros);

     //  -----  Acceder a los valores de un arreglo  -----
    console.log('\nnumeros[0] => ', numeros[0]);
    console.log('numeros[1] => ', numeros[1]);
    console.log('numeros[2] => ', numeros[2]);
    console.log('numeros[3] => ', numeros[3]);
    console.log('numeros[4] => ', numeros[4]);


    //  -----  Crear un arreglo con el constructor Array()  -----
    const meses = new Array(
        'Enero', 
        'Febrero', 
        'Marzo', 
        'Abril', 
        'Mayo', 
        'Junio', 
        'Julio', 
        'Agosto', 
        'Septiembre', 
        'Octubre', 
        'Noviembre', 
        'Diciembre'
    );

    console.log('\n----- meses[] -----');
    console.table(meses);
   


    //  -----  Conocer la extensión de un arreglo  -----
    console.log('\nmeses.length => ', meses.length);


    //  -----  Recorrer un arreglo con forEach()  -----
    console.log('\n----- Recorrer arreglo - numeros - con forEach -----');

    numeros.forEach( function(numero) {
         console.log(numero);
    });


    /*  
        -------------------------------------
        -----  Métodos de los arreglos  -----
        -------------------------------------
    */

    //  -----  Agregar elementos a un arreglo al final  -----
    numeros.push(60, 70, 80); 

    //  -----  Agregar elementos a un arreglo al inicio  -----
    numeros.unshift(-10, -20, -30);

    console.log('\n----- numeros[] - Agregar elementos al inicio y al final -----');
    console.table(numeros);

    //const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

    //  -----  Eliminar el ultimo elemento de un arreglo  -----
    meses.pop(); 

    //  -----  Eliminar el primer elemento de un arreglo  -----
    meses.shift(); 

    console.log('\n----- meses[] - Eliminar el primer y el ultimo elemento -----');
    console.table(meses);

    //  -----  Eliminar elementos de un arreglo con splice()  -----
    meses.splice(2, 1);
    console.log('\n----- meses[] - Eliminar elementos con splice() -----');
    console.table(meses);


    //  -----  Rest Operator o Spread Operator  -----
    const nuevoArreglo = ['Junio', ...meses];

    console.log('\n----- nuevoArreglo[] = [\'Junio\', ...meses] - Rest Operator o Spread Operator -----');
    console.table(nuevoArreglo);


})();
