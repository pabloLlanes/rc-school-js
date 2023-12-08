

//Ejemplo 01
let estacion = "primavera";

estacion = 1;

let precioVenta = 100;

switch (estacion) {
    case 'primavera':
        console.log('estamos en la primavera: ', estacion);
        precioVenta = precioVenta + 200;
        break;
    case 'verano':
        console.log('estamos en la verano: ', estacion);
        precioVenta = precioVenta + 300;

        break;
    case 'otoño':
        console.log('estamos en la otoño: ', estacion);
        precioVenta = precioVenta + 100;

        break;
    case 'invierno':
        console.log('estamos en la invierno: ', estacion);
        precioVenta = precioVenta + 50;

        break;
    default:
        console.log(estacion + ' no es una estacion del año');
}



//Ejemplo 02

/* En este ejemplo, la variable diaDeLaSemana se evalúa en diferentes casos 
usando switch. Dependiendo del valor de diaDeLaSemana, se asigna un nombre de
día correspondiente a la variable nombreDia. El bloque default se ejecuta si 
el valor no coincide con ninguno de los casos especificados.
El break es importante después de cada caso para salir del switch. 
Si se omite, JavaScript continuará ejecutando los casos siguientes, 
incluso si la condición ya se ha cumplido.
El switch es útil cuando se tienen múltiples condiciones que deben evaluarse 
de manera similar y ofrece una alternativa más legible que múltiples declaraciones if-else anidadas.
 */

const diaDeLaSemana = 3;

switch (parseInt(diaDeLaSemana)) {
    case 1:
        console.log('Hoy es dia Lunes')
        break;
    case 2:
        console.log('Hoy es dia Martes')
        break;
    case 3:
        console.log('Hoy es dia Mierc')
        break;
    case 4:
        console.log('Hoy es dia Jueves')
        break;
    case 5:
        console.log('Hoy es dia Viernes')
        break;
    case 6:
        console.log('Hoy es dia Sabado')
        break;
    case 7:
        console.log('Hoy es dia Domingo')
        break;

    default:
        console.log('Nro. de la semana no correcto')
        break;
}
