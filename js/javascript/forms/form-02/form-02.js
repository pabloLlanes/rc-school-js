class Usuario {
    nombre= '';
    contrasenia= '';

    constructor(nombre, contrasenia) {
        this.nombre = nombre;
        this.contrasenia = contrasenia;
    }
}

// Crear algunas instancias de la clase Usuario para simular usuarios registrados.
const usuarios = [
    new Usuario('pablo', 'perez'),
    new Usuario('jason', 'vorheiss'),
    new Usuario('samuel', 'artis')
];

// Esta función se llama cuando el formulario se envía
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtiene los valores que el usuario ingresó en el formulario
    const nombreUsuarioIngresado = document.getElementById('nombreUsuario').value;
    const contraseniaIngresada = document.getElementById('contrasenia').value;

    // Inicialmente, asumimos que no hemos encontrado un usuario que coincida
    let nombreUsuarioEncontrado = false;
    let nombreContraseniaEncontrada = false;

    // Recorremos cada usuario registrado para verificar las credenciales
    usuarios.forEach(function(usuario) {
        // Comparamos el nombre de usuario de cada usuario registrado
        if (usuario.nombre === nombreUsuarioIngresado) {
            nombreUsuarioEncontrado = true;
        }
        // Comparamos la contraseña de cada usuario registrado
        if (usuario.contrasenia === contraseniaIngresada) {
            nombreContraseniaEncontrada = true;
        }

    });

    // Después de revisar todos los usuarios, verificamos si encontramos una coincidencia
    if (nombreUsuarioEncontrado && nombreContraseniaEncontrada) {
        // Si se encontró el usuario
        alert('Login exitoso');
    } else {
        // Si no se encontró ninguna coincidencia, informamos al usuario.
        alert('Usuario o contraseña incorrectos');
    }
});
