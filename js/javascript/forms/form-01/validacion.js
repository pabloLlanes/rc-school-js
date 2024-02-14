// Definición global para asegurar accesibilidad
function validarCampos(nombre, email) {
    if (!nombre || !email) {
        alert('Por favor, rellena todos los campos.');
        return false; // Indica falla en la validación
    }

    // Aquí puedes agregar más validaciones según sea necesario

    return true; // Indica éxito en la validación
}