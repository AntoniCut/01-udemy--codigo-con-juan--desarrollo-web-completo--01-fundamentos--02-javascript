/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /09-booleans.js  -----------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  09-booleans.js  -----');
    console.log('\n');


    //  -----  Booleanos  -----
    const boolean1 = true;
    const boolean2 = false;
    const boolean3 = new Boolean(true); // No es recomendable usar el constructor Boolean


    //  -----  Imprimiendo los booleanos y sus tipos  -----
    console.log({boolean1});
    console.log('typeof boolean1 => ', typeof boolean1);

    console.log('\n', {boolean2});
    console.log('typeof boolean2 => ', typeof boolean2);

    console.log('\n', {boolean3});
    console.log('typeof boolean3 => ', typeof boolean3);

})();
