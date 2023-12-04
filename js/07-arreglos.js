// Crear un array inicial
//let frutas = ['manzana', 'pera', 'uva', 'kiwi', 'piña'];

// Agregar elementos al final del array
// frutas.push('naranja', 'sandía');
// console.log(frutas); // ['manzana', 'pera', 'uva', 'kiwi', 'piña', 'naranja', 'sandía']

// Eliminar el último elemento del array
//var ultimaFruta = frutas.pop();
//console.log(ultimaFruta); // 'sandía'
//console.log(frutas); // ['manzana', 'pera', 'uva', 'kiwi', 'piña', 'naranja']

// Eliminar el primer elemento del array
//var primeraFruta = frutas.shift();
//console.log(primeraFruta); // 'manzana'
//console.log(frutas); // ['pera', 'uva', 'kiwi', 'piña', 'naranja']

// Agregar elementos al inicio del array
// frutas.unshift('melón', 'ciruela');
// console.log(frutas); // ['melón', 'ciruela', 'pera', 'uva', 'kiwi', 'piña', 'naranja']

//let frutas = ['manzana', 'pera', 'uva', 'kiwi', 'piña'];


// Obtener una porción del array
//var porcion = frutas.slice(2, 5);
//console.log(porcion); // ['pera', 'uva', 'kiwi']



// Concatenar arrays
//let otrasFrutas = ['durazno', 'mango'];
//let todasLasFrutas = frutas.concat(otrasFrutas);
//console.log(todasLasFrutas); // ['melón', 'ciruela', 'pera', 'uva', 'kiwi', 'piña', 'naranja', 'durazno', 'mango']

// Encontrar el índice de un elemento en el array
//let indiceUva = frutas.indexOf('uvaItaliano');
//console.log("Índice de 'uva':", indiceUva); // 3

// Verificar si un elemento existe en el array
//let existePera = frutas.includes('remolacha');
//console.log("¿Existe 'remolacha'?:", existePera); // true

// Invertir el orden de los elementos en el array
/* frutas.reverse();


console.log(frutas); */
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]


let frutas = ['manzana', 'pera', 'uva', 'kiwi', 'piña', 'ajo'];
// Eliminar elementos de una posición específica
//var elementosEliminados = frutas.splice(2, 3); / / Elimina desde la posición 2, tres elementos

/* console.log(elementosEliminados);
console.log(frutas); */


// Unir todos los elementos del array en una cadena
var cadenaDeFrutas = frutas.join(', ');
//console.log(cadenaDeFrutas); // 'naranja-piña-ciruela-melón'

const equipos = [
    {
        nombre: "Real Madrid",
        copas: 34,
        fundacion: 1902
    },
    {
        nombre: "FC Barcelona",
        copas: 26,
        fundacion: 1899
    },
    {
        nombre: "Manchester United",
        copas: 20,
        fundacion: 1878
    },
    {
        nombre: "Bayern Munich",
        copas: 31,
        fundacion: 1900
    },
    {
        nombre: "Boca juniors",
        copas: 71,
        fundacion: 1905
    },
];
const equipos2 = [
    {
        nombre: "MentorTeam",
        copas: 2,
        fundacion: 1902
    },
    {
        nombre: "Winners",
        copas: 3,
        fundacion: 1899
    },
    {
        nombre: "Rolling",
        copas: 2,
        fundacion: 1878
    },

];


/* let totalCopas = 0;

for (let i = 0; i < equipos.length; i++) {
    totalCopas = totalCopas + equipos[i].copas
} */



function mostrarPromediosEquipos(arrayEquipos) {
    let totalCopas = 0;

    for (let i = 0; i < arrayEquipos.length; i++) {
        totalCopas = totalCopas + arrayEquipos[i].copas
    }

    return `El total de copas de los ${arrayEquipos.length} equipos es: ${totalCopas}
    y el promedio de copa por equipo es: 
    ${totalCopas / arrayEquipos.length}`
}

/* function buscarMayorGanador(arrayEquipos) {
    let mayorGanador = 0;
    var nombreGanador = '';

    for (let i = 0; i < arrayEquipos.length; i++) {

        if (arrayEquipos[i].copas > mayorGanador) {
            nombreGanador = arrayEquipos[i].nombre;

        }
    }

} */

function buscarMayorGanador(arrayEquipos) {
    let equipoConMasCopas = arrayEquipos[0];

    for (let i = 1; i < arrayEquipos.length; i++) {
        if (arrayEquipos[i].copas > equipoConMasCopas.copas) {
            equipoConMasCopas = arrayEquipos[i];
        }
    }

    return "Equipo con más copas: " + equipoConMasCopas.nombre + " con " + equipoConMasCopas.copas + " copas.";
}

console.log(buscarMayorGanador(equipos))


//console.log(mostrarPromediosEquipos(equipos))
//console.log(mostrarPromediosEquipos(equipos2))



// del sig. arreglo calcular:
// Calcular total de copas de todos los equipos
// --- sumar las copas de todos

// Calcular el promedio de copas de todos los equipos
// Encontrar el equipo con más copas











// de un array de Nros enteros encontrar el mayor
var elementos = [1, 2, 3, 4, 2, 5, 6, 1];
var elementosRepetidos = [];

for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var primeraAparicion = elementos.indexOf(elemento);

    if (primeraAparicion !== i) {
        if (elementosRepetidos.indexOf(elemento) === -1) {
            elementosRepetidos.push(elemento);
        }
    }
}

//console.log("Elementos Repetidos:", elementosRepetidos);