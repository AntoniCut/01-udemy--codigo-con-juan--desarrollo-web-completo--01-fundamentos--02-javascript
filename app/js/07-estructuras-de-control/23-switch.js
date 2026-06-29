/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /23-switch.js  -------------------------
    ----------------------------------------------------
*/


(() => {


    console.clear();
    console.log('\n');
    console.warn('-----  23-switch.js  -----');
    console.log('\n');


    let metodoPago = 'efectivo';
    console.log({metodoPago});


    switch (metodoPago) {
        
        case 'tarjeta':
            console.log('Pagaste con tarjeta');
            break;

        case 'cheque':
            console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
            break;

        case 'efectivo':
            console.log('Pagaste con efectivo');
            break;
            
        default:
            console.log('Aún no has pagado');
            break;
    }



})();
