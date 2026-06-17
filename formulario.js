const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const pais = document.getElementById("pais").value;
  const terminos = document.getElementById("terminos").checked;

  if (nombre.length < 5) {
    event.preventDefault();
    alert("El nombre debe tener al menos 5 caracteres");
    return;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    event.preventDefault();
    alert("Por favor, ingrese un email valido");
    return;
  }

  if (isNaN(edad) || edad < 18 || edad > 60) {
    event.preventDefault();
    alert("Por favor, ingrese una edad entre 18 y 60 años");
    return;
  }

  if (pais === "") {
    event.preventDefault();
    alert("Por favor, seleccione un país");
    return;
  }

  if (!terminos) {
    event.preventDefault();
    alert("Por favor, acepte los términos y condiciones");
    return;
  }

  // Si todas las validaciones pasan, NO hacemos preventDefault:
  // el navegador envía el form por GET y arma la URL automáticamente
  // (resultado.html?nombre=...&email=...&edad=...&pais=...)
  // usando el atributo name de cada campo.
});
