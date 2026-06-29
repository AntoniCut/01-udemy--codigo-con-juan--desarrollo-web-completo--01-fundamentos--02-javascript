/*
    ----------------------------------------------------
    ----------  udemy.antonydev.tech/  -----------------
    ----------  /05-codigo-con-juan/  ------------------
    ----------  /01-desarrollo-web-completo/  ----------
    ----------  /05-javascript/  -----------------------
    ----------  /src/scripts/    -----------------------
    ----------  /31-notification-api.js  ---------------
    ----------------------------------------------------
*/


(() => {
    
    console.clear();
    console.log('\n');
    console.warn('-----  31-notification-api.js  -----');
    console.log('\n');


    /** @type {HTMLButtonElement|null} */
    const boton = document.querySelector('#boton');

    if (!boton) 
        return;


    boton.addEventListener('click', async () => {

        //alert('Se ha hecho click en el botón');

        // Solicitar permiso
        const permiso = await Notification.requestPermission();
        console.log(`Permiso: ${permiso}`);

        //  -----  Mostrar notificación SOLO si está permitido  -----
        if (permiso === 'granted') {
            
            new Notification('Esta es una notificación', {
                icon: '/assets/logos/desarrollo-web-completo-logo.ico',
                body: 'Curso Desarrollo web completo - Código con Juan'
            });
        }

    });


})();
