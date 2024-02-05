// Ejemplos de forEach en JavaScript

// Ejemplo 1: Recorriendo un array de números e imprimiendo cada elemento
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (numero, indice) {
    console.log(`Elemento en la posición ${indice}: ${numero}`);
});

// Ejemplo 2: Duplicando cada elemento de un array
const original = [1, 2, 3, 4];
const duplicados = [];

original.forEach(function (numero) {
    duplicados.push(numero * 2);
});

console.log(duplicados); // Resultado: [2, 4, 6, 8]

// Ejemplo 3: Filtrando elementos mayores que 3 en un array
const mayoresQue3 = [];

numeros.forEach(function (numero) {
    if (numero > 3) {
        mayoresQue3.push(numero);
    }
});

console.log(mayoresQue3); // Resultado: [4, 5]

// Ejemplo 4: Modificando un array existente con forEach
const frutas = ['manzana', 'plátano', 'uva'];

frutas.forEach(function (fruta, indice, array) {
    array[indice] = fruta.toUpperCase();
});

console.log(frutas); // Resultado: ['MANZANA', 'PLÁTANO', 'UVA']

// Notas importantes
// - El método forEach es útil cuando deseas realizar una operación específica en cada elemento de un array y 
//   no necesitas rastrear manualmente el índice actual.
// - forEach no crea un nuevo array, sino que modifica el array existente o realiza acciones en función de los elementos.
// - No es posible detener un bucle forEach como se hace con break en bucles for o while.
// - Si deseas crear un nuevo array basado en la transformación de otro, puedes considerar el uso de map.
/* 
Consigna:
Dado un array de objetos que representan 
productos en un carrito de compras, 
crea una función llamada calcularTotalCompra 
que calcule el total de la compra, 
incluyendo descuentos si se aplican.

 */
/* 
Consigna:
Dado un array de objetos que representan a estudiantes con 
sus calificaciones, crea una función llamada 
calcularPromedios que calcule el promedio de calificaciones 
para cada estudiante y devuelva un nuevo array con la 
información actualizada.


const estudiantes = [
  { nombre: 'Ana', calificaciones: [90, 85, 88] },
  { nombre: 'Juan', calificaciones: [78, 92, 80] },
  { nombre: 'María', calificaciones: [95, 89, 92] }
]; */


// Equipos de la NBA
const equiposNBA = [
    { nombre: 'Lakers', ciudad: 'Los Angeles', conferencia: 'Oeste' },
    { nombre: 'Bulls', ciudad: 'Chicago', conferencia: 'Este' },
    { nombre: 'Warriors', ciudad: 'Golden State', conferencia: 'Oeste' }
];

// Función para imprimir nombres de equipos utilizando forEach
function imprimirNombresEquipos() {
    console.log('Equipos de la NBA (utilizando forEach):');
    equiposNBA.forEach(function (equipo) {
        console.log(equipo.nombre);
    });
}

imprimirNombresEquipos();

// Función para obtener un array de nombres de equipos utilizando map
function obtenerNombresEquipos() {
    const nombresEquipos = equiposNBA.map(function (equipo) {
        return equipo.nombre;
    });

    console.log('\nNombres de equipos de la NBA (utilizando map):');
    console.log(nombresEquipos);
}

obtenerNombresEquipos();

