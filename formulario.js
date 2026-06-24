const form = document.querySelector("form");

// Muestra un mensaje de error debajo del campo indicado
function mostrarError(id, mensaje) {
  const span = document.getElementById(id);
  span.textContent = mensaje;
}

// Limpia todos los mensajes de error al inicio de cada envío
function limpiarErrores() {
  const errores = document.querySelectorAll(".error-mensaje");
  errores.forEach(function (span) {
    span.textContent = "";
  });
}

form.addEventListener("submit", function (event) {
  limpiarErrores();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const pais = document.getElementById("pais").value;
  const terminos = document.getElementById("terminos").checked;

  let hayErrores = false;

  if (nombre.length < 5) {
    mostrarError("error-nombre", "El nombre debe tener al menos 5 caracteres.");
    hayErrores = true;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    mostrarError("error-email", "Por favor, ingrese un email válido.");
    hayErrores = true;
  }

  if (isNaN(edad) || edad < 18 || edad > 60) {
    mostrarError("error-edad", "La edad debe estar entre 18 y 60 años.");
    hayErrores = true;
  }

  if (pais === "") {
    mostrarError("error-pais", "Por favor, seleccione un país.");
    hayErrores = true;
  }

  if (!terminos) {
    mostrarError("error-terminos", "Debe aceptar los términos y condiciones.");
    hayErrores = true;
  }

  // Si hay errores, cancelar el envío del formulario
  if (hayErrores) {
    event.preventDefault();
  }

  // Si no hay errores, el navegador envía el form por GET hacia resultado.html
});
