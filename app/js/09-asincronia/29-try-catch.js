/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /29-try-catch.js  ----------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  29-try-catch.js  -----');
    console.log('\n');


    const numero1 = 20;
    const numero3 = 30;


    console.log('\nnumero1 => ', numero1);


    //  -----  numero2 no existe, por lo tanto se genera un error de referencia (ReferenceError)  -----
    try {
        
        console.log('\nnumero2 => ', numero2);

    } catch (error) {
        
        console.error('error => ', error);
    }


    console.log('\nnumero3 => ', numero3);


})();
