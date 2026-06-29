/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /22-estructuras-de-control.js  ---------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  22-estructuras-de-control.js  -----');
    console.log('\n');


    //  -----  If  -----
    let puntaje1 = 1000;
    console.log({puntaje1});


    if(puntaje1 === 1000) {
        console.log('\nSi, el puntaje1 es 1000');
    }


    //  -----  If - Else  -----
    let puntaje2 = 1000;
    console.log('\n', {puntaje2});

    if(puntaje2!== 1000) { 
         console.log('\nel puntaje2 No es igual');
    } 
    
    else {
         console.log('\nSi el puntaje2 es 1000');
    }


    let efectivo = 1000;
    let carrito = 800;
    console.log('\n', {efectivo}, {carrito});


    if( efectivo > carrito ) {
        console.log('\nEl Usuario puede pagar');
    } 
    
    else {
        console.log('\nFondos Insuficientes');
    }


    //  -----  If - Else If - Else  -----
    let rol = 'VISITANTE';
    console.log('\n', {rol});

    if (rol === 'ADMINISTRADOR') {
        console.log('\nAcceso a todo el sistema');
    } 
    
    else if (rol === 'EDITOR') {
        console.log('\nEres editor, puedes entrar pero no puedes hacer mucho')
    } 
    
    else {
        console.log('\nNo tienes acceso')
    }



})(); 
