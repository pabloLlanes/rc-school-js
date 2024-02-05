
// Bucle While
console.log("Ejemplo de bucle While:");
let contadorWhile = 0;
while (contadorWhile < 5) {
    console.log("Iteración " + (contadorWhile + 1));
    contadorWhile++;
}
console.log("\n");

// Bucle Do-While
console.log("Ejemplo de bucle Do-While:");

let contadorDoWhile = 0;
do {
    console.log("Iteración " + (contadorDoWhile + 1));
    contadorDoWhile++;
} while (contadorDoWhile < 5);
console.log("\n");

// Bucle For
console.log("Ejemplo de bucle For:");
for (let i = 0; i < 5; i++) {
    console.log("Iteración " + (i + 1));
}

//while

let i = 6;

while (i < 5) {
    console.log('Hola Mundo');
    i = i + 4;
}

//do while

let j = 6;
do {
    console.log('Hola Mundo');
    j = j + 1;
} while (j < 5)

//for
let miNumero = 12;
const cajonDeManzanas = [];

for (let i = 1; i <= miNumero; i++) {
    if (i === 2) {
        console.log('Iteraccion nro: ' + i);
        cajonDeManzanas.push('manzana')
    } else {
        console.log('no secarga el cajon')
    }
}
console.log(cajonDeManzanas);



