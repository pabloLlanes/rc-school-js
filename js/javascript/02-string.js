// Definición de variables
let nombre = "Pablo";
let apellido = "Llanes";
let bienvenida = "    Bienvenidos a la clase ";

// Concatenación de strings
console.log(nombre + " " + apellido);

// Interpolación de strings utilizando template literals
console.log(`${nombre} ${apellido}`);

// Convertir a mayúsculas y minúsculas
console.log(nombre.toUpperCase());
console.log(apellido.toLowerCase());

// Obtener la longitud de la cadena (número de caracteres)
console.log(nombre.length);

// Obtener el carácter en una posición específica
console.log(nombre.charAt(4));

// Obtener una subcadena a partir de una posición específica
console.log(apellido.substring(0, 3));

// Eliminar espacios en blanco al inicio y al final de una cadena
console.log(frase.trim());

// Obtener la última letra de un apellido
// 1- Obtener la cantidad de caracteres del apellido
// 2- Obtener la letra en la última posición
let apellido2 = "Gonzalez";
let cantidadCaracteres = apellido2.length;
let ultimaLetra = apellido2.charAt(cantidadCaracteres - 1);
console.log(`La última letra del apellido es ${ultimaLetra}`);

// Capitalizar el nombre
// 1- Obtener la primera letra
// 2- Convertir la primera letra a mayúscula
// 3- Obtener el resto del nombre
// 4- Concatenar la primera letra mayúscula con el resto del nombre
let nombre2 = "horacio";
let primeraLetra = nombre2.charAt(0);
let letraMayuscula = primeraLetra.toUpperCase();
let resto = nombre2.substring(1);
console.log(`${letraMayuscula}${resto}`);
