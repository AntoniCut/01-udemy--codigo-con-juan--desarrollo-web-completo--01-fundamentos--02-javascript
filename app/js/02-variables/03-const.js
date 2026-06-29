/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /03-const.js  --------------------------
    ----------------------------------------------------
*/



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  03-const.js  -----');
    console.log('\n');

    
    /*  
        --------------------------------
        -----  Variables con CONST  ----
        --------------------------------
    */

    //  -----  Iniciar variable y asignarle valor  -----
    const producto = 'Audifonos Gamer';
    console.log({ producto });

    //  -----  iniciamos la variable  -----
    let disponible; 
    console.log({ disponible });

    //  -----  Reasignando el valor de la constante  -----
    //  -----  dará error porque CONST no permite reasignar valor  -----
    //producto = true; 
    //console.log({ producto });

    //  -----  Asignando valor a la variable  -----
    disponible = true;
    console.log({ disponible });

    //  -----  Declarar varias variables  -----
    const 
        producto1 = 'Computadora',
        disponible1 = true,
        categoria = 'Computadoras';

    console.log({ producto1, disponible1, categoria });

    //  -----  Nombres no permitidos para las variables  -----
    // const 1disponible;
    
    //  -----  iniciamos la variable pero sin valor  -----
    const disponible_ = true;

    //  -----  Estilos para las variables  -----
    const nombre_producto = 'Monitor HD';   // snake_case
    const nombreProducto = 'Monitor HD';    // Camelcase
    const NombreProducto = 'Monitor HD';    // Pascal Case
    const nombreproducto = 'MonitorHD';     // lowercase

    console.log({ nombre_producto });
    console.log({ nombreProducto });
    console.log({ NombreProducto });
    console.log({ nombreproducto });


})();
