
//IF

/* La declaración if se utiliza para ejecutar un bloque de código
si una condición especificada es evaluada como true. */

let edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad. Puedes ingresar.");
}

//IF-ELSE 
/* La declaración if-else permite ejecutar un bloque de código si la
condición especificada es true y otro bloque de código si la
condición es false. */

let hora = 14;

if (hora < 12) {
    console.log("Buenos días.");
} else {
    console.log("Buenas tardes o noches.");
}

//IF-ELSE IF
/* La declaración if-else if permite manejar múltiples 
condiciones en secuencia. */

let puntuacion = 75;

if (puntuacion >= 90) {
    console.log("Excelente!");
} else if (puntuacion >= 70) {
    console.log("Bien hecho.");
} else {
    console.log("Es necesario mejorar.");
}

/* Estas estructuras de control (if, if-else, if-else if) son
fundamentales para la toma de decisiones en programas JavaScript,
permitiendo ejecutar diferentes bloques de código en función de las
condiciones evaluadas. */

//-- Escribir un programa que muestre un prompt 
//donde el usuario ingresa un número, luego muestra 
//otro prompt pidiendo otro número, finalmente el programa 
//muestra una alerta con el resultado de la suma.

// a + b = resultado

//let valorUno = prompt('Ingrese el primer valor: ');


//let valorUnoConvertido = parseInt(valorUno)
/* console.log(valorUnoConvertido);
console.log(typeof valorUnoConvertido); */

//let valorDos = prompt('Ingrese el segundo valor: ');
//let valorDosConvertido = parseInt(valorDos);
//let resultado = valorUnoConvertido + valorDosConvertido;

//alert('el resultado es: ' + resultado);
//alert(`el resultado es: ${resultado}`);

/* Crear un programa donde el usuario ingrese en un
prompt la temperatura en Celcius y el programa
muestre en una alerta la temperatura en Fahrenheit. */

// datos entrados un numero (Temp Celsius)
// Farenheit = Celsius x 9 / 5 + 32
// Farenheit en un alerta


/* let tempCelcius = prompt('Ingrese la temperatura en Celsius: ');

let tempCelciusConvertido = parseInt(tempCelcius);

let resultadoF = tempCelciusConvertido * 9 / 5 + 32;

alert('Temperatura en F: ' + resultadoF) */

/* -- Declarar 3 variables del tipo objeto
que sean los datos de un empleado (nombre:string, apellido:string, sueldo:number)
Escribir un programa que:

- calcule el promedio de los sueldos
- calcule el salario menor y mayor */


/* const empleado01 = { nombre: 'Juan', apellido: 'Perez', sueldo: 800 }
const empleado02 = { nombre: 'Andres', apellido: 'Parlan', sueldo: 600 }
const empleado03 = { nombre: 'Lio', apellido: 'Messi', sueldo: 250 }
const empleado04 = { nombre: 'Franco', apellido: 'Esvensen', sueldo: 350 }

const nominaDeEmpleados = [empleado01, empleado02, empleado03, empleado04];

const cantidadEmpleados = nominaDeEmpleados.length;


const promedioDeSueldos = (empleado01.sueldo + empleado02.sueldo + empleado03.sueldo) / cantidadEmpleados;

const sueldoMinimo = Math.min(empleado01.sueldo, empleado02.sueldo, empleado03.sueldo)

const sueldoMaximo = Math.max(empleado01.sueldo, empleado02.sueldo, empleado03.sueldo)

console.log(promedioDeSueldos); */

/* -- En una variable tienes el lado de un cuadrado,
debes escribir un programa que te calcule el área y el perímetro del cuadrado.
el area la calculas como lado multiplicado por lado.
El perimetro es la suma de los cuatro lados. */

//const ladoCuadrado = 20;
//ladoCuadrado 

/* const resulCalculoArea01 = ladoCuadrado * ladoCuadrado;
const resulCalculoArea02 = Math.pow(ladoCuadrado, 2);

const resulCalculoPerimetro01 = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
const resulCalculoPerimetro02 = ladoCuadrado * 4;

console.log(resulCalculoArea01);
console.log(resulCalculoArea02);
console.log(resulCalculoPerimetro01);
console.log(resulCalculoPerimetro02); */



//console.log(precioVenta);

/* let num = 10;

if (num >= 10 && num <= 20) {
    console.log(num >= 10 && num <= 20)
    console.log('num es menor a 20 y es mayor a 10');
} */

/*
const sentencia1 = 4 !== 3;
const sentencia2 = 2 === 2;
console.log(4 !== 3)
console.log(2 === 2)

if (4 !== 3 && 2 === 2) {
    console.log('al ser un operador logico AND, entra si ambos valores son true')
}
*/

//declarar las variables para los lados
/* Escribe un programa que clasifique un triángulo
   según sus lados. Si tiene tres lados iguales,
   es equilátero; si tiene dos lados iguales, es isósceles;
   si todos los lados son diferentes, es escaleno.
 */


/* let ladoUno = 'adsad';
let ladoDos = 42;
let ladoTres = 412;

if (ladoUnoIgualLadoDos && ladoUno === ladoTres) {
    console.log("El triángulo es equilátero.");
}

else if (ladoUnoIgualLadoDos || ladoUno === ladoTres || ladoDos === ladoTres) {
    console.log("El triángulo es isósceles.");
}

else {
    console.log("El triángulo es escaleno.");
} */

//Escribe un programa que tome un número del 1 al 7 e 
//imprima el día correspondiente de la semana utilizando switch.

/* let ValorEntrada = prompt('inserte el nro del dia:');

if (ValorEntrada === 1) {
    console.log('Hoy es dia Lunes')
} else if (ValorEntrada === 2) {
    console.log('Hoy es dia Martes')

} else if (ValorEntrada === 3) {
    console.log('Hoy es dia Miercoles')

} else {
    console.log('Nro. de la semana no correcto')

} */

//ValorEntrada = parseInt(ValorEntrada)








