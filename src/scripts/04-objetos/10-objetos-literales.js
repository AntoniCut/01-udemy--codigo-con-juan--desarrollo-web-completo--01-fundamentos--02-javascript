/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /10-objetos-literales.js  --------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  10-objetos-literales.js  -----');
    console.log('\n');


    //  -----  Objetos Literales  -----
    const producto1 = {
        nombreProducto: "Monitor 20 Pulgadas",
        precio: 300,
        disponible: true
    }

    console.log({ producto1 });

    console.log('\nproducto1.precio => ', producto1.precio);
    console.log('producto1.nombreProducto => ', producto1.nombreProducto);
    console.log('producto1.disponible => ', producto1.disponible);
    console.log('producto1["precio"] => ', producto1["precio"]);


    /*
        -------------------------------------------------------
        -----  Agregar, eliminar y modificar propiedades  -----
        -------------------------------------------------------
    */

    //  -----  otro objeto literal  -----
    const producto2 = {
        nombreProducto: "Laptop Gamer",
        precio: 1500,
        disponible: true,
        imagen: 'laptop.jpg'
    }

    console.log('\nproducto2 => ', { producto2 });

    //  -----  Agregar nuevas propiedades  -----
    producto2.imagen = 'imagen.jpg';
    console.log('producto2.imagen => ', producto2.imagen);

    //  -----  Modificar propiedades  -----
    producto2.precio = 1200;
    console.log('producto2.precio => ', producto2.precio);
    
    //  -----  Eliminar propiedades  -----
    delete producto2.disponible;
    console.log('\nproducto2 después de eliminar disponible => ', { producto2 });


})();
