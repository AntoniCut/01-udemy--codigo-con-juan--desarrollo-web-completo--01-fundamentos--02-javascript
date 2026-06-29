/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /05-foreach-y-map.js  ------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  25-foreach-y-map.js  -----');
    console.log('\n');


    const carrito = [

        {
            nombre: 'Monitor 20 Pulgadas',
            precio: 500
        },

        {
            nombre: 'Televisión 50 Pulgadas',
            precio: 700
        },

        {
            nombre: 'Tablet',
            precio: 300
        },

        {
            nombre: 'Audifonos',
            precio: 200
        },

        {
            nombre: 'Teclado',
            precio: 50
        },

        {
            nombre: 'Celular',
            precio: 500
        },

        {
            nombre: 'Bocinas',
            precio: 300
        },

        {
            nombre: 'Laptop',
            precio: 800
        }

    ];

    console.log('\nEl carrito de compras es... \n');
    console.table(carrito);


    /*  
        -----  ForEach  -----
        - El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    */
    console.log('\nRecorriendo el carrito con ForEach... \n\n');
    carrito.forEach(producto => console.table(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`));


    /*  
        -----  map  -----
        - El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicada a cada elemento del array.
    */
    console.log('\nRecorriendo el carrito con map... \n\n');
    const arreglo2 = carrito.map(producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`);

    console.table(arreglo2);



})();


