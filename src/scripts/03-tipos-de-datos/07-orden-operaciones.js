/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /07-orden-operaciones.js  --------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  07-orden-operaciones.js  -----');
    console.log('\n');


    //  -----  Orden de operaciones  -----
    let resultado = 0;

    resultado = (20 + 30) * 2;
    console.log('(20 + 30) * 2 => ', resultado);

    resultado = (600 + 600) * 1.05;
    console.log('(600 + 600) * 1.05 => ', resultado);

    resultado = (600 + 600) * 1.05 / 2;
    console.log('(600 + 600) * 1.05 / 2 => ', resultado);
  

    //  -----  Incrementos y decrementos  -----

    let puntaje = 10;
    console.log('puntaje => ', puntaje);

    puntaje++;
    console.log('puntaje++ => ', puntaje);

    ++puntaje;
    console.log('++puntaje => ', puntaje);

    puntaje--;
    console.log('puntaje-- => ', puntaje);

    --puntaje;
    console.log('--puntaje => ', puntaje);

    puntaje += 10;
    console.log('puntaje += 10 => ', puntaje);

    puntaje -= 5;
    console.log('puntaje -= 5 => ', puntaje);


})();
