const storage = [];

// Función para agregar cliente y actualizar la lista en la página
function agregarCliente(cliente) {
    console.log('agrego cliente')
    storage.push(cliente);
    actualizarListaClientes();
}

// Función para actualizar la lista de clientes en el HTML
function actualizarListaClientes() {
    const lista = document.getElementById('listaClientes');
    lista.innerHTML = ''; // Limpiar lista existente

    storage.forEach((cliente, index) => {
        const item = document.createElement('li');
        item.textContent = `${index + 1}. Nombre: ${cliente.nombre}, Email: ${cliente.email}`;
        lista.appendChild(item);
    });
}


