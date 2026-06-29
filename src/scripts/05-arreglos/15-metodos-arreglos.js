/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /15-metodos-arreglos.js  ---------------
    ---------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  15-metodos-arreglos.js  -----');
    console.log('\n');


    //  -----  Arreglo de Strings  -----
    const meses = [
        'Enero', 
        'Febrero', 
        'Marzo', 
        'Abril', 
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];


    // -----  Arreglo de Objetos  -----
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

    
    console.log('-----  meses  -----');
    console.table(meses);

    console.log('\n-----  carrito  -----');
    console.table(carrito);


    /*  
        ---------------------
        -----  forEach  -----
        ---------------------
    */

    console.log('\nExiste Marzo en el arreglo meses? - con forEach');
    
    meses.forEach(mes => {
        
        if (mes === 'Marzo')
            console.log('Marzo si existe');
        
    });


    /*  
        ------------------------------------------------------
        -----  includes  -  ideal para arreglos simples  -----
        ------------------------------------------------------
    */

    let resultadoIncludes = meses.includes('Diciembre');
    
    console.log('\nExiste Diciembre en el arreglo meses? - con includes');
    console.log(resultadoIncludes);

    /*  
        ----------------------------------------------------
        -----  Some  -  ideal para arreglo de objetos  -----
        ----------------------------------------------------
    */
    let resultadoSome = carrito.some( producto => producto.nombre === 'Celular PRO' );

    console.log('\nExiste el producto Celular PRO en el arreglo carrito? - con some');
    console.log(resultadoSome);


    /*
        -------------------- 
        -----  Reduce  -----
        -------------------- 
    */
    
    let resultadoReduce = carrito.reduce( (total, producto) => total + producto.precio, 0);

    console.log('\nEl total a pagar por los productos del carrito es: - con reduce');
    console.log(resultadoReduce);


    /* 
        -------------------- 
        -----  Filter  -----
        -------------------- 
    */

    let resultadoFilter1 = carrito.filter( producto => producto.precio > 400 );
    
    console.log('\nLos productos del carrito con precio mayor a 400 son: - con filter');
    console.table(resultadoFilter1);
    
    
    let resultadoFilter2 = carrito.filter( producto => producto.nombre !== 'Celular' );

    console.log('\nLos productos del carrito excepto el Celular son: - con filter');
    console.table(resultadoFilter2);


})();
