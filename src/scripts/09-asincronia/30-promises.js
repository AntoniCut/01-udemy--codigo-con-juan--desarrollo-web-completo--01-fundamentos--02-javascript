/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /30-promises.js  -----------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  30-promises.js  -----');
    console.log('\n');


    /*
        ----------------------
        -----  Promises  -----
        ----------------------

        - Es un objeto que representa la terminación o el fracaso de una operación asíncrona.
        - Permite manejar operaciones asíncronas de una manera más sencilla y legible.
        - Tiene tres estados: 
            - Pending:    La operación aún no se ha completado ni se ha rechazado. 
            - Fulfilled : La operación se ha completado exitosamente y se ha cumplido la promesa.
            - Rejeted :   La operación ha fallado y se ha rechazado la promesa.
    */


    const usuarioAutenticado = new Promise((resolve, reject) => {
        
        const auth = true;

        if (auth) 
            resolve('\nUsuario Autenticado'); // el promise se cumple exitosamente
        
        else 
            reject('\nNo se pudo iniciar sesión'); // el promise no se cumple exitosamente    
        
    });


    console.log('usuarioAutenticado => \n', {usuarioAutenticado});

    
    //  -----  Para consumir una promesa, se utilizan los métodos .then() y .catch()  -----
    usuarioAutenticado
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
        .finally(() => console.log('\nProceso terminado'));
  

})();
