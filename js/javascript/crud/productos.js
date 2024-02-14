document.addEventListener('DOMContentLoaded', () => {
    let productos = [
        { id: 1, nombre: 'Producto 1' },
        { id: 2, nombre: 'Producto 2' }
    ];

    const form = document.getElementById('productoForm');
    const inputNombre = document.getElementById('nombreProducto');
    const listaProductos = document.getElementById('listaProductos');

    // Función para generar ID único para cada nuevo producto
    const generarId = () => (productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1);

    const pintarProductos = () => {
        listaProductos.innerHTML = ''; // Limpiar lista existente
        productos.forEach(producto => {
            const item = document.createElement('li');
            item.textContent = producto.nombre;
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.onclick = () => eliminarProducto(producto.id);
            item.appendChild(botonEliminar);
            listaProductos.appendChild(item);
        });
    };

    const añadirProducto = (nombre) => {
        const nuevoProducto = { id: generarId(), nombre };
        productos.push(nuevoProducto);
        pintarProductos(); // Actualizar la lista de productos en el HTML
    };

    const eliminarProducto = (id) => {
        productos = productos.filter(producto => producto.id !== id);
        pintarProductos(); // Actualizar la lista de productos en el HTML
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = inputNombre.value.trim();
        if (nombre) {
            añadirProducto(nombre);
            form.reset(); // Limpiar el formulario después de añadir
        }
    });

    pintarProductos(); // Pintar productos existentes al cargar la página
});
