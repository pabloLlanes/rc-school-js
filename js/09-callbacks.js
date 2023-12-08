// Función que realiza una operación y llama a un callback con el resultado
function operacion(callback) {
    // Simulamos una operación simple (en este caso, suma de dos números)
    let resultado = 5 + 3;
    // Llamamos al callback con el resultado
    callback(resultado);
}

// Función callback que maneja el resultado de la operación
function manejarResultado(resultado) {
    console.log("El resultado de la operación es: " + resultado);
}

// Llamada a la función operacion con el callback manejarResultado
operacion(manejarResultado);

// Ejemplo adicional de callback para una operación matemática
function realizarCalculo(x, y, operacion) {
    var resultado = operacion(x, y);
    console.log("El resultado del cálculo es: " + resultado);
}

// Ejemplo de funciones que sirven como callbacks para realizar diferentes operaciones matemáticas
function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

// Llamadas a la función realizarCalculo con diferentes callbacks
realizarCalculo(5, 3, suma);
realizarCalculo(8, 4, resta);
realizarCalculo(2, 6, multiplicacion);


// Ejemplo 1: Función que ejecuta un callback después de un saludo
function saludar(nombre, callback) {
    var mensaje = "¡Hola, " + nombre + "!";
    // Llamamos al callback con el mensaje de saludo
    callback(mensaje);
}

// Callback que muestra el mensaje en la consola
function mostrarMensajeConsola(mensaje) {
    console.log(mensaje);
}

// Llamada a la función saludar con el callback mostrarMensajeConsola
saludar("Juan", mostrarMensajeConsola);


// Juego

// Definición de unidades
const marine = { nombre: 'Marine', vida: 20, ataque: 5 };
const zergling = { nombre: 'Zergling', vida: 15, ataque: 3 };
const ghost = { nombre: 'Ghost', vida: 25, ataque: 10 };
const zealot = { nombre: 'Zealot', vida: 30, ataque: 8 };
const hydralisk = { nombre: 'Hydralisk', vida: 28, ataque: 6 };

// Función principal que simula un turno de ataque
function batalla(unidadAtaca, unidadRecibe, tipoAtaque) {
    let resultadoAtaque = tipoAtaque(unidadAtaca, unidadRecibe);
    console.log(`Resultado: ${resultadoAtaque}`);
}

// Funciones que representan tipos de ataques
function ataqueRifle(unidadAtaca, unidadRecibe) {
    const fuerza = 4 + unidadAtaca.ataque;
    unidadRecibe.vida -= fuerza;

    if (unidadRecibe.vida <= 0) {
        return `${unidadRecibe.nombre} ha sido derrotado. RIP.`;
    }

    return `${unidadRecibe.nombre} ha recibido un impacto de ${unidadAtaca.nombre}. Vida restante: ${unidadRecibe.vida}`;
}

function ataqueAcido(unidadAtaca, unidadRecibe) {
    const fuerza = 4 + unidadAtaca.ataque;
    unidadRecibe.vida -= fuerza;

    if (unidadRecibe.vida <= 0) {
        return `${unidadRecibe.nombre} ha sido derrotado. RIP.`;
    }
    return `${unidadRecibe.nombre} ha recibido un impacto de ${unidadAtaca.nombre}. Vida restante: ${unidadRecibe.vida}`;
}

// Función para simular curación
function curar(unidad) {
    console.log(unidad)
    const cantidadCuracion = 8;
    unidad.vida += cantidadCuracion;
    return `${unidad.nombre} ha sido curado. Vida restante: ${unidad.vida}`;
}

// Ejemplos de ataques con callbacks
batalla(marine, hydralisk, ataqueRifle);

// Ejemplo de ataque sin especificar unidad que recibe
batalla(zergling, marine, ataqueAcido);

// Simulando un turno de curación
batalla(marine, marine, curar);

