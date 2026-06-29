/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /21-arrow-functions.js  ----------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  21-arrow-functions.js  -----');
    console.log('\n');


    /**
     * - `sumar2()` es una función de flecha que toma dos números como argumentos y los suma, luego imprime el resultado en la consola.
     * @param {number} n1 - Primer número a sumar 
     * @param {number} n2 - Segundo número a sumar
     */
    
    const sumar2 = (n1, n2) => console.log(`numero ${n1} + ${n2} = ${n1 + n2}`);
    
    
    sumar2(5, 10);


    /**
     * - `aprendiendo()` es una función de flecha que toma un nombre de tecnología como argumento 
     *    e imprime un mensaje indicando que se está aprendiendo esa tecnología.  
     * @param {string} tecnologia - Nombre de la tecnología que se está aprendiendo
     */

    const aprendiendo = tecnologia => console.log(`\nAprendiendo ${tecnologia}`);

   
    aprendiendo('JavaScript');


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

    
    console.log('\n-----  meses  -----');
    console.table(meses);

    console.log('\n-----  carrito  -----');
    console.table(carrito);


    //  -----  forEach  -----
    console.log('\nExiste Marzo en el arreglo meses? - con forEach');
    
    meses.forEach(mes => {
        
        if (mes === 'Marzo')
            console.log('Marzo si existe');
    });


    //  -----  includes  -----
    let resultadoIncludes = meses.includes('Diciembre');
    
    console.log('\nExiste Diciembre en el arreglo meses? - con includes');
    console.log(resultadoIncludes);


    //  -----  some  -----
    let resultadoSome = carrito.some( producto => producto.nombre === 'Celular PRO' );

    console.log('\nExiste el producto Celular PRO en el arreglo carrito? - con some');
    console.log(resultadoSome);

   
    //  -----  reduce  ----- 
    let resultadoReduce = carrito.reduce( (total, producto) => total + producto.precio, 0);

    console.log('\nEl total a pagar por los productos del carrito es: - con reduce');
    console.log(resultadoReduce);


    //  -----  filter  -----
    let resultadoFilter1 = carrito.filter( producto => producto.precio > 400 );
    
    console.log('\nLos productos del carrito con precio mayor a 400 son: - con filter');
    console.table(resultadoFilter1);
    
    
    let resultadoFilter2 = carrito.filter( producto => producto.nombre !== 'Celular' );

    console.log('\nLos productos del carrito excepto el Celular son: - con filter');
    console.table(resultadoFilter2);


})();
