/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /24-for-loop.js  -----------------------
    ---------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  24-for-loop.js  -----');
    console.log('\n');


    
    /*  
        ----------------------
        -----  For Loop  -----
        ---------------------- 
    */
    
    console.log('\n-----  For Loop  -----\n');

    for( let i = 0; i < 10; i++ ) {
        console.log(i);
    }


    console.log('\nEl Numero... ');
    
    for( let i = 1; i <= 100; i++ ) {
        
        if( i % 2 === 0 ) 
            console.log(` ${i} es Par`);
        
        else 
            console.log(` ${i} es Impar`);
    }


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

    console.log('\nLos productos del carrito son... \n\n');

    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i].nombre);
    }

    

    /*
        ------------------------  
        -----  While Loop  -----
        ------------------------
    */

    console.log('\n-----  While Loop  -----\n');
    
    let i = 1; // Indice

    //  -----  El bloque de código se ejecutará mientras la condición sea verdadera  -----
    while(i < 10) { // Condición

        if( i % 2 === 0 )
            console.log(` ${i} es Par`);
        else
            console.log(` ${i} es Impar`);

        i++;  // Incremento
    }



    /*  
        ---------------------------
        -----  Do While Loop  -----
        ---------------------------
    */
    
    console.log('\n-----  Do While Loop  -----\n');
    
    let j = 10;

    //  -----  El bloque de código se ejecutará al menos una vez, incluso si la condición es falsa desde el principio  -----
    do {
        
        console.log(j);
        j--;  // Decremento

    } while (j >= 1);  // Condición



})();
