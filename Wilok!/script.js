// Obtener los botones por su id
const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
const registrarseBtn = document.getElementById('registrarseBtn');

// Función para Iniciar sesión
iniciarSesionBtn.onclick = function() {
    alert("Iniciando sesión...");
    // Aquí puedes agregar la lógica para la acción de iniciar sesión
    // Por ejemplo, redirigir a otra página:
    window.location.href = "./LOGIN/index.html";
};

// Función para Regístrate
registrarseBtn.onclick = function() {
    alert("Redirigiendo a la página de registro...");
    window.location.href = "./sign-up/index.html";
};

