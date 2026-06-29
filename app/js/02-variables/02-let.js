/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /02-let.js  ----------------------------
    ----------------------------------------------------
*/



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  02-let.js  -----');
    console.log('\n');

    
    /*  
        -------------------------------
        -----  Variables con LET  -----
        -------------------------------
    */


    //  -----  Iniciar variable y asignarle valor  -----
    let producto = 'Audifonos Gamer'; 
    console.log({ producto });

    //  -----  iniciamos la variable pero sin valor  -----
    let disponible; 
    console.log({ disponible });

    //  -----  Reasignando el valor de la variable  -----
    producto = true; 
    console.log({ producto });

    disponible = true;
    console.log({ disponible });


    //  -----  Declarar varias variables  -----
    let producto1 = 'Computadora',
        disponible1 = true,
        categoria = 'Computadoras';

    console.log({ producto1, disponible1, categoria });

    //  -----  Nombres no permitidos para las variables  -----
    // let 1disponible;
    
    //  -----  iniciamos la variable pero sin valor  -----
    let disponible_;

    //  -----  Estilos para las variables  -----

    //  -----  snake_case  -----
    let nombre_producto = 'Monitor HD';     // snake_case

    //  -----  camelCase  -----
    let nombreProducto = 'Monitor HD';      // Camelcase

    //  -----  PascalCase  -----
    let NombreProducto = 'Monitor HD';      // Pascal Case

    //  -----  lowercase  -----
    let nombreproducto = 'MonitorHD';       // lowercase


    //  -----  Mostrando por consola  -----
    console.log({ nombre_producto });
    console.log({ nombreProducto });
    console.log({ NombreProducto });
    console.log({ nombreproducto });


})();
