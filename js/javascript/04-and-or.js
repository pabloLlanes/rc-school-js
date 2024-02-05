// Operador AND (&&)
let expresion1 = true;
let expresion2 = false;

let resultadoAnd = expresion1 && expresion2;
console.log(resultadoAnd); // Devuelve false, ya que al menos una expresión es falsa.

// Ejemplo con AND (&&)
let edad = 25;
let tienePermiso = true;

if (edad >= 18 && tienePermiso) {
    console.log("Puede ingresar al lugar.");
} else {
    console.log("No cumple con los requisitos de edad o permiso.");
}

// Operador OR (||)
let expresion3 = true;
let expresion4 = false;

let resultadoOr = expresion3 || expresion4;

console.log(resultadoOr); // Devuelve true, ya que al menos una expresión es verdadera.

// Ejemplo con OR (||)
let esEstudiante = false;
let esEmpleado = true;

if (esEstudiante || esEmpleado) {
    console.log("La persona es estudiante o empleado.");
} else {
    console.log("La persona no es estudiante ni empleado.");
}

/* En este ejemplo, el operador && se utiliza para comprobar si la edad es mayor o igual 
a 18 y si tienePermiso es true. Si ambas condiciones son verdaderas, se imprime que la 
persona puede ingresar; de lo contrario, se imprime que no cumple con los requisitos.

Por otro lado, el operador || se utiliza para comprobar si la persona es estudiante o 
empleado. Si al menos una de las condiciones (esEstudiante o esEmpleado) es verdadera, 
se imprime que la persona es estudiante o empleado; de lo contrario, se imprime que no es ni estudiante ni empleado.
*/


// AND - Y - &&

const tvEncendida = false;
const radioEncendida = true;
//const pcEncendida = true;

const resultadoAND = tvEncendida && radioEncendida
console.log('RESULTADO-AND', resultadoAND)



// OR - O - ||

const resultadoOR = tvEncendida || radioEncendida
console.log('RESULTADO-OR', resultadoOR)
