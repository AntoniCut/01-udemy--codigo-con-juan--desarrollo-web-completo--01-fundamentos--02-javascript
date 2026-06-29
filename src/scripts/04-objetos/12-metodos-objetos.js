/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /12-metodos-objetos.js  --------------------
    ----------------------------------------------------
*/


//@ts-nocheck

//  -----  Correr JS en modo estricto  -----
"use strict";



(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  12-metodos-objetos.js  -----');
    console.log('\n');
    

    /*
        -----------------------------
        -----  Object.freeze()  -----  
        -----------------------------
        -  Congela el objeto.
        -  No se pueden agregar ni modificar nuevas propiedades,        
    */
    
    //  -----  objeto literal  -----
    const productoFreeze = {
        nombreProducto: "Monitor 20 Pulgadas",
        precio: 300,
        disponible: true
    }

    console.log({productoFreeze});
        
    //  -----  No se pueden agregar ni modificar nuevas propiedades,        -----
    Object.freeze(productoFreeze);

    //  -----  Esta congelado el objeto productoFreeze?  -----
    console.log(
        '\nObject.isFrozen(productoFreeze):', 
        Object.isFrozen(productoFreeze)
    ); // true

    //  -----  si descomento las siguientes líneas, no se agregarán ni modificarán las propiedades del objeto producto  -----
    //  -----  dara un error en modo estricto, pero no se agregará ni modificará la propiedad del objeto producto  -----
    
    //productoFreeze.imagen = 'imagen.jpg';
    //productoFreeze.precio = 'NUEVO PRECIO';


    /*
        ---------------------------
        -----  Object.seal()  -----
        ---------------------------
        -  No se pueden agregar nuevas propiedades.
        -  Pero si se pueden eliminar o modificar las existentes.
    */


     //  -----  objeto literal  -----
    const productoSeal = {
        nombreProducto: "Monitor 20 Pulgadas",
        precio: 300,
        disponible: true
    }

    console.log('\n', {productoSeal});

    //  -----  Eliminar o modificar las existentes  -----
    productoSeal.precio = 'NUEVO PRECIO';
    delete productoSeal.disponible;

    Object.seal(productoSeal); 
    

})();
