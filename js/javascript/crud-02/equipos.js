document.addEventListener('DOMContentLoaded', () => {
    let equipos = [
        { id: 1, nombre: 'Equipo 1998' },
        { id: 2, nombre: 'Equipo 2000' }
    ];

    const form = document.getElementById('equipoForm');
    const inputNombre = document.getElementById('nombreEquipo');
    const listaEquipos = document.getElementById('listaEquipos');

    const pintarEquipos = () => {
        listaEquipos.innerHTML = equipos.map(equipo => {
            const item = document.createElement('li');
            item.innerHTML = `${equipo.nombre} <button onclick="eliminarEquipo(${equipo.id})">Eliminar</button>`;
            return item.outerHTML;
        }).join('');
    };

    window.añadirEquipo = (nombre) => {
        const nuevoEquipo = { id: equipos.length + 1, nombre };
        equipos.push(nuevoEquipo);
        pintarEquipos(); // Actualizar la lista de equipos en el HTML
    };

    window.eliminarEquipo = (id) => {
        equipos = equipos.filter(equipo => equipo.id !== id);
        pintarEquipos(); // Actualizar la lista de equipos en el HTML
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = inputNombre.value.trim();
        if (nombre) {
            añadirEquipo(nombre);
            form.reset(); // Limpiar el formulario después de añadir
        }
    });

    pintarEquipos(); // Pintar equipos existentes al cargar la página
});
