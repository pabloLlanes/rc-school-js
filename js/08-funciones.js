// Declaración de una función con nombre
function saludar(nombre) {
    // Imprime un saludo en la consola
    console.log("¡Hola, " + nombre + "!");
    // Alternativa
    console.log(`¡Hola ${nombre}!`);
}

// Llamada a la función
saludar("Juan");

// Función anónima asignada a una variable
var sumar = function (a, b) {
    // Devuelve la suma de dos números
    return a + b;
};

// Llamada a la función anónima
var resultadoSuma = sumar(3, 5);
// Muestra el resultado en la consola
console.log("La suma es: " + resultadoSuma);

// Función anónima como argumento de otra función (Callback)
function operacion(callback, x, y) {
    // Ejecuta el callback con dos valores y muestra el resultado
    var resultado = callback(x, y);
    console.log("Resultado de la operación: " + resultado);
}

// Llamada a la función 'operacion' con la función anónima como argumento
operacion(function (a, b) {
    // Realiza la multiplicación de dos números
    return a * b;
}, 4, 6);

// Función flecha (Arrow function)
var multiplicar = (a, b) => a * b;
// Llamada a la función flecha y muestra el resultado
var resultadoMultiplicacion = multiplicar(2, 3);
console.log("La multiplicación es: " + resultadoMultiplicacion);


// Función con nombre
function cuadrado(x) {
    return x * x;
}

// Función anónima asignada a una variable
var cuadradoAnonimo = function (x) {
    return x * x;
};

// Utilizando ambas funciones
console.log(cuadrado(5));           // 25
console.log(cuadradoAnonimo(5));    // 25

/* function areaCuadrado(lado) {
    const calculoArea = lado * lado;
    return calculoArea;
}

function saludarAlumno(apellido, edad) {

    if (edad < 18) {
        return 'es menor de edad, no puede usar esa fn'
    }
    return `todo correcto ${apellido}`
}

console.log(saludarAlumno('Llanes', 17)); */

const nota = 1;

switch (nota) {
    case 1:
        console.log('Muy deficiente');
        break;
    case 2:
        console.log('Muy deficiente');

        break;
    case 3:
        console.log('Suficiente');

        break;
    case 4:
        console.log('Bien');

        break;

    default:
        break;
}
