// Ejemplo de setTimeout

console.log('Inicio');

setTimeout(function () {
    console.log('Después de 2000 milisegundos (2 segundos)');
}, 2000);

console.log('Fin');

// Ejemplo de setInterval

let contador = 0;

function imprimirContador() {
    console.log('Contador:', contador);
    contador++;

    if (contador > 5) {
        clearInterval(intervalId);
        console.log('Fin del intervalo');
    }
}

console.log('Inicio del intervalo');

//const intervalId = setInterval(imprimirContador, 1000);

// La ejecución continuará hasta que se detenga con clearInterval o cierre la aplicación



let tiempoRestante = 10;

function actualizarTemporizador() {
    if (tiempoRestante > 0) {
        console.log(`Tiempo restante: ${tiempoRestante} segundos`);
        tiempoRestante--;
    } else {
        clearInterval(intervalId);
        console.log('¡Tiempo agotado! 🎉');
    }
}

console.log('Inicio del temporizador');

const intervalId = setInterval(actualizarTemporizador, 1000);

// Esperar 5000 milisegundos (5 segundos) antes de iniciar el temporizador
setTimeout(function () {
    console.log('Temporizador iniciado');
}, 5000);
