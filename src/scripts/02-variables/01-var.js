/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /01-var.js  ----------------------------
    ----------------------------------------------------
*/



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  01-var.js  -----');
    console.log('\n');

    
    /*  
        -------------------------------
        -----  Variables con VAR  -----
        -------------------------------
    */

    //  -----  Iniciar variable y asignarle valor  -----
    
    var producto = 'Audifonos Gamer';

   
    console.log({ producto });

    //  -----  iniciamos la variable pero sin valor  -----
    var disponible; 
    console.log({ disponible });

    //  -----  Reasignando el valor de la variable  -----
    producto = true; 
    console.log({ producto });
    
    disponible = true;
    console.log({ disponible });


    //  -----  Declarar varias variables  -----
    var 
        producto1 = 'Computadora',
        disponible1 = true,
        categoria = 'Computadoras';

    console.log({ producto1, disponible1, categoria });

    //  -----  Nombres no permitidos para las variables  -----
    // var 1disponible;

    //  -----  iniciamos la variable pero sin valor y despues asignamos un valor  -----
    var disponible_;
    disponible_ = true;
    console.log({ disponible_ });

    
    //  -----  Estilos para las variables  -----

    //  -----  snake case  -----
    var nombre_producto = 'Monitor HD';
    console.log({ nombre_producto });

    //  -----  camel case  -----
    var nombreProducto = 'Monitor HD'; 
    console.log({ nombreProducto });

    //  -----  Pascal case  -----
    var NombreProducto = 'Monitor HD'; 
    console.log({ NombreProducto });

    //  -----  lower case  -----
    var nombreproducto = 'MonitorHD';   
    console.log({ nombreproducto });


})();
