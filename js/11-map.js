/* Principales características de map:
- Crea un nuevo array: map no modifica el array original; en su lugar, 
devuelve un nuevo array.
- Función de transformación: Se proporciona una función de transformación como
argumento a map. Esta función se aplica a cada elemento del array, y el resultado 
se utiliza para construir el nuevo array.
- Preserva la longitud: El nuevo array tiene la misma longitud que el array original.
- Buena práctica para la inmutabilidad: map se alinea con el enfoque de inmutabilidad
en programación funcional, ya que no modifica el array original.
- map es útil cuando necesitas transformar cada elemento de un array de manera uniforme 
y construir un nuevo array basado en esas transformaciones.
 */

const numeros = [3, 7, 1, 5, 9];

const numerosDobles = numeros.map(function (numero) {
    return numero * 2;
});

//Arrow function
const numerosDobles2 = numeros.map((numero) => numero * 2);

const nombres = ['ana', 'juan', 'maría', 'carlos'];

const nombresCapitalizados = nombres.map(function (nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
});

console.log('Nombres capitalizados:', nombresCapitalizados);

//console.log(numerosDobles);
const palabras = ['Python', 'JavaScript', 'C#', 'C++', 'Java'];

const longitudes = palabras.map(function (palabra) {
    return palabra.length;
});

console.log('Longitudes de palabras:', longitudes);
// Resultado esperado: [4, 10, 3, 7]

// Personajes de Bastardos sin Gloria
const personajes = [
    { nombre: 'Teniente Aldo Raine', rango: 'Teniente', escuadra: 'Inglourious Basterds' },
    { nombre: 'Hans Landa', rango: 'Coronel', escuadra: 'SS' },
    { nombre: 'Shosanna Dreyfus', rango: 'Civil', escuadra: 'N/A' },
    { nombre: 'Donny "El Oso Judio"', rango: 'Soldado', escuadra: 'Inglourious Basterds' },
    { nombre: 'Bridget von Hammersmark', rango: 'Agente', escuadra: 'Actriz y espía' }
];
/* Obtener un array de nombres y rangos de los personajes.
Formatear una frase sobre cada personaje. */


// Utilizando map para obtener un array de nombres y rangos de los personajes
const nombresYRangos = personajes.map(function (personaje) {
    return { nombre: personaje.nombre, rango: personaje.rango };
});

console.log('Personajes y sus rangos (utilizando map):');
console.log(nombresYRangos);

// Utilizando map para formatear una frase sobre cada personaje
const frasesSobrePersonajes = personajes.map(function (personaje) {
    return `${personaje.nombre} es ${personaje.rango} en la escuadra ${personaje.escuadra}.`;
});

console.log('\nFrases sobre los personajes (utilizando map):');
frasesSobrePersonajes.forEach(function (frase) {
    console.log(frase);
});
