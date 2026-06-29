/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /05-objeto-math.js  --------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  06-objeto-math.js  -----');
    console.log('\n');


    // -----  Declaración de variables  -----
    let resultado = 0;


    // -----  El objeto Math es un objeto global que tiene propiedades 
    // -----  y métodos para constantes y funciones matemáticas. 
    // -----  No es un constructor, por lo que no se puede instanciar.
    resultado = Math.PI;
    console.log('Math.PI => ', resultado);

    // -----  Redondeo de números  -----
    resultado = Math.round(2.5);
    console.log('Math.round(2.5) => ', resultado);

    // -----  Redondeo hacia arriba  -----
    resultado = Math.ceil(2.1); // Ceil siempre redondea hacia arriba
    console.log('Math.ceil(2.1) => ', resultado);

    // -----  Redondeo hacia abajo  -----
    resultado = Math.floor(2.9);
    console.log('Math.floor(2.9) => ', resultado);

    // -----  Raíz cuadrada  -----
    resultado = Math.sqrt(144);
    console.log('Math.sqrt(144) => ', resultado);

    // -----  Valor absoluto  -----
    resultado = Math.abs(-200);
    console.log('Math.abs(-200) => ', resultado);

    // -----  Mínimo valor  -----
    resultado = Math.min(3, 5, 1, 8, 2, 10);
    console.log('Math.min(3, 5, 1, 8, 2, 10) => ', resultado);

    // -----  Máximo valor  -----
    resultado = Math.max(3, 5, 1, 8, 2, 10);
    console.log('Math.max(3, 5, 1, 8, 2, 10) => ', resultado);

    // -----  Número aleatorio  -----
    resultado = Math.random();
    console.log('Math.random() => ', resultado);
    
    // -----  Número aleatorio entre 0 y 29  -----
    resultado = Math.floor(Math.random() * 30);
    console.log('Math.floor(Math.random() * 30) => ', resultado);


})();

