/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /08-template-string.js  ----------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  08-template-string.js  -----');
    console.log('\n');


    //  -----  Variables  -----
    const nombre = 'Antonio';
    const email = 'correo@correo.com';

    //  -----  Concatenación  -----
    console.log("Nombre Cliente: " + nombre + " - Email: " + email);

    //  -----  Template Strings - String Literals  -----
    console.log(`Nombre Cliente: ${nombre} - Email: ${email}`);


})();
