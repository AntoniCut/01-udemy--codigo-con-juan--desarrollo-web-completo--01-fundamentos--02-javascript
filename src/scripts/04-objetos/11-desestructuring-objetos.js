/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /11-desestructuring-objetos.js  --------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  11-desestructuring-objetos.js  -----');
    console.log('\n');

    //  -----  objeto literal  -----
    const producto = {
        nombreProducto: "Monitor 20 Pulgadas",
        precio: 300,
        disponible: true
    }

    console.log({producto});

    //  -----  Forma anterior  -----
    const precioProducto = producto.precio;
    const nombreDelProducto = producto.nombreProducto;

    console.log('\n - Forma anterior.....')
    console.log({precioProducto});
    console.log({nombreDelProducto});

    //  -----  Destructuring  -----
    const { precio, nombreProducto } = producto;

    console.log('\n - Forma destructuring.....')
    console.log({precio});
    console.log({nombreProducto});


})();
