document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nombreForm');
    const nombreInput = document.getElementById('nombreInput');
    const nombreGuardadoElement = document.getElementById('nombreGuardado');
    const borrarNombreBtn = document.getElementById('borrarNombre');

    // Función para mostrar el nombre guardado
    const mostrarNombreGuardado = () => {
        const nombreGuardado = localStorage.getItem('nombre');
        nombreGuardadoElement.textContent = nombreGuardado || 'No hay nombre guardado.';
    };

    // Cargar y mostrar el nombre al cargar la página
    mostrarNombreGuardado();

    // Escuchar el envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = nombreInput.value;
        if (nombre) {
            localStorage.setItem('nombre', nombre);
            mostrarNombreGuardado();
            nombreInput.value = ''; // Limpiar el campo después de guardar
        }
    });

    // Escuchar clic en el botón de borrar
    borrarNombreBtn.addEventListener('click', () => {
        localStorage.removeItem('nombre');
        mostrarNombreGuardado();
    });
});
