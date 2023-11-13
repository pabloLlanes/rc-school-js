// Variables: Espacios de memoria para almacenar datos

// Declaración e inicialización de Variables
let nombre = "Pablo"; // 'let' permite declarar una variable en el ámbito donde se use
var apellido = "Llanes"; // 'var' declara una variable global, sin importar el ámbito
const valorFijo = 10; // 'const' define una variable que no puede modificarse

// Tipos de datos

// String
let cliente = "John";
const otroString = "Hoy es un dia lluvioso";

// Number
let numero1 = 34;
let numero2 = 12;

// Boolean
let comprar = true;
let vender = false;

// Null
let deposito = null;

// Undefined
let caja;

// Array
let arreglo = [1, "Sanwich", true, "Cuadrados Mágicos"];

// Object
let persona = {
    nombre: "José",
    apellido: "Perez",
    edad: 23,
};

// Operadores

// Aritméticos
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let resto = numero1 % numero2;

// Operadores unitarios (++ y --)

// Operadores relacionales
console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero1 != numero2);

let numero3 = 23;
let numero4 = "23";
console.log("¿Los valores son iguales?");
console.log(numero3 == numero4);

console.log("¿Los valores son iguales (con tipo)?");
console.log(numero3 === numero4);

console.log("¿Los valores no son iguales?");
console.log(numero3 != numero4);

console.log("¿Los valores no son iguales (con tipo)?");
console.log(numero3 !== numero4);

// Negación
let verdadero = true;
!verdadero;

// Prompt: Método para solicitar datos al usuario
let firstName = prompt("Ingrese su nombre");
let lastName = prompt("Ingrese su apellido");

// Template String: Concatenación de texto con variables de JavaScript
console.log(`Hola, me llamo ${firstName} ${lastName}`);
