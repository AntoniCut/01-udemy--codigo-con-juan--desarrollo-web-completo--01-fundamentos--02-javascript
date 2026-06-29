/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /04-string.js  -------------------------
    ----------------------------------------------------
*/



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  04-string.js  -----');
    console.log('\n');


    /*
        -----------------------------------
        -----  Strings en JavaScript  -----
        -----------------------------------
    */

    //  -----  Formas de crear un String  -----
    const tweet = 'Aprendiendo JavaScript con el curso de Desarrollo Web Completo';
    const producto1 = "Tablet de 32 pulgadas";
    const producto2 = String('Monitor HD"');
    const producto3 = new String('Tablet HD');
    const nombre = 'Juan Pablo';
    const email = 'correo@correo.com';


    //  -----  impresion por consola  -----
    console.log('\n', { tweet });
    console.log('longitud de la variable tweet: ', tweet.length);
    console.table({ producto1, producto2, producto3, nombre, email });


    //  -----  IndexOf (retorna posición)  -----
    console.log("\ntweet.indexOf('JavaScript') => ", tweet.indexOf('JavaScript'));
    console.log("producto2.indexOf('Tablet') => ", producto2.indexOf('Tablet'));
    console.log("email.indexOf('@') => ", email.indexOf('@'));
    console.log("nombre.indexOf('Pablo') => ", nombre.indexOf('Pablo'));

    //  -----  Includes (retorna true o false)  -----
    console.log("\ntweet.includes('JavaScript') => ", tweet.includes('JavaScript'));
    console.log("producto2.includes('Tablet') => ", producto2.includes('Tablet'));


})();
