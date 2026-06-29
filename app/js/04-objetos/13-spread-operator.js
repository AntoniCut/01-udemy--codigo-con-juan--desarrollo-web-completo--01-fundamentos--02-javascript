/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /13-spread-operator.js  --------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  13-spread-operator.js  -----');
    console.log('\n');


    //  -----  producto  -----
    const producto = {
        nombreProducto: "Monitor 20 Pulgadas",
        precio: 300,
        disponible: true
    }

    //  -----  medidas  -----
    const medidas = {
        peso: '1kg',
        medida: '1m'
    }

    //  -----  nuevoProducto  -----
    const nuevoProducto = { ...producto, ...medidas };

    //  -----  nuevoProducto con el spread operator  -----    
    console.log({producto});
    console.log({medidas});
    console.log({nuevoProducto});



})();
