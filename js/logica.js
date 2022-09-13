

let progresoActual = 0;

/* La función se ejecuta con el evento "click" del boton con id = boton*/

function data() {

    /* Deshabilita botón */
    document.getElementById('boton').disabled = true;
    
    function start(){

        intervalID = setInterval(() => {

            /* Se va a ejecutar el intervalo, siempre que la variable sea menor a 100 */
            if(progresoActual < 100) {
                
                /* Cambia el texto del botón */
                document.getElementById('boton').innerHTML = 'Verificando...'
                console.log(progresoActual)

                /* Aumenta el valor de la variable en 10 */
                progresoActual += 10;

                /* Con el nuevo valor de la variable, cambia el estilo del progreso y el texto de porcentaje */
                document.getElementById('barra').style.width = `${progresoActual}%`
                document.getElementById('barra').innerHTML = `${progresoActual}%`

            } else {
                /* cuando no se da la condicion corta la ejecución del intervalo */
                clearInterval(intervalID);

                /* Vuelve el valor de la variable a 0 */
                progresoActual = 0;
                /* Vuelve a habilitar botón */
                document.getElementById('boton').disabled = false;
                
                /* Mensaje de exito (crea una clase y asigna texto al cartel, actualiza el texto del botón) */
                const clase = document.getElementById('exito').classList.add('mensaje-progressbar')
                const texto = document.getElementById('exito')
                texto.innerHTML = '¡Felicitaciones! <strong>tu cuenta fue comprobada con éxito</strong>';
                document.getElementById('boton').innerHTML = 'Verificar'
                
                /* Remueve el mensaje de éxito */
                setTimeout(() => {

                const clase = document.getElementById('exito').classList.remove('mensaje-progressbar')
                const texto = document.getElementById('exito').innerHTML = '';
                document.getElementById('barra').style.width = `${progresoActual}%`
                
                }, 4000);
                
            }
            
        }, 1000);
    }


    start();
    
}
