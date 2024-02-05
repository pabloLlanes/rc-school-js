/* Principales características de filter:
- Crea un nuevo array: Al igual que map, filter no modifica el array original; 
  en su lugar, devuelve un nuevo array.
- Función de prueba: Se proporciona una función de prueba como argumento a filter.
  Esta función se aplica a cada elemento del array, y los elementos que 
  devuelven true se incluyen en el nuevo array.
- Preserva la longitud: El nuevo array tiene una longitud igual o menor que el 
  array original, ya que solo incluye los elementos que cumplen con la condición.
- Buena práctica para la inmutabilidad: filter se alinea con el enfoque de 
  inmutabilidad en programación funcional, ya que no modifica el array original.
- filter es útil cuando necesitas crear un subconjunto de elementos de un array 
que cumplan con ciertos criterios específicos. */

// Bandas de música argentina
const bandasArgentinas = [
    { nombre: 'Soda Stereo', genero: 'Rock', activa: false },
    { nombre: 'Los Fabulosos Cadillacs', genero: 'Ska', activa: true },
    { nombre: 'La Bersuit', genero: 'Rock', activa: true },
    { nombre: 'Charly García', genero: 'Rock', activa: true },
    { nombre: 'Attaque 77', genero: 'Punk', activa: true },
];

// Filtrar bandas activas
const bandasActivas = bandasArgentinas.filter(function (banda) {
    return banda.activa;
});

console.log('Bandas activas:');
console.log(bandasActivas);

// Filtrar bandas de rock
const bandasDeRock = bandasArgentinas.filter(function (banda) {
    return banda.genero === 'Rock';
});

/* console.log('\nBandas de Rock:');
console.log(bandasDeRock); */

// Filtrar bandas inactivas de ska
const bandasInactivasDeSka = bandasArgentinas.filter(function (banda) {
    return !banda.activa && banda.genero === 'Ska';
});

console.log('\nBandas inactivas de Ska:');
console.log(bandasInactivasDeSka);


// Ejemplo de .filter y .map combinados

// Datos de productos
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 20, categoria: 'Ropa' },
    { id: 2, nombre: 'Zapatillas', precio: 50, categoria: 'Calzado' },
    { id: 3, nombre: 'Gorra', precio: 15, categoria: 'Accesorios' },
    { id: 4, nombre: 'Pantalón', precio: 30, categoria: 'Ropa' },
    { id: 5, nombre: 'Reloj', precio: 40, categoria: 'Accesorios' }
];

// Filtrar productos de la categoría 'Ropa'
const productosRopa = productos.filter(function (producto) {
    return producto.categoria === 'Ropa';
});

console.log('Productos de la categoría "Ropa":');
console.log(productosRopa);

// Obtener precios de productos filtrados utilizando .map
const preciosProductosRopa = productosRopa.map(function (producto) {
    return producto.precio;
});

console.log('\nPrecios de productos de la categoría "Ropa":');
console.log(preciosProductosRopa);


// Lista de estudiantes con sus calificaciones
const estudiantes = [
    { nombre: 'Juan', calificacion: 85 },
    { nombre: 'María', calificacion: 60 },
    { nombre: 'Pedro', calificacion: 75 },
    { nombre: 'Laura', calificacion: 90 },
    { nombre: 'Carlos', calificacion: 50 }
];

// Utilizar .filter para seleccionar estudiantes aprobados
const estudiantesAprobados = estudiantes.filter(function (estudiante) {
    return estudiante.calificacion >= 70;
});

console.log('Estudiantes Aprobados:');
console.log(estudiantesAprobados);