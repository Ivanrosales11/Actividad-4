document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = parseInt(document.getElementById("edad").value);
    const pais = document.getElementById("pais").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre.length < 5) {
      alert("El nombre debe tener al menos 5 caracteres");
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      alert("Por favor, ingrese un email valido");
      return;
    }

    if (isNaN(edad) || edad < 18 || edad > 60) {
      alert("Por favor, ingrese una edad entre 18 y 60 años");
      return;
    }

    if (pais === "") {
      alert("Por favor, seleccione un país");
      return;
    }

    if (!terminos) {
      alert("Por favor, acepte los términos y condiciones");
      return;
    }

    const url =
      `resultado.html?nombre=${encodeURIComponent(nombre)}` +
      `&email=${encodeURIComponent(email)}` +
      `&edad=${edad}` +
      `&pais=${encodeURIComponent(pais)}`;

    window.location.href = url;
  });
});
