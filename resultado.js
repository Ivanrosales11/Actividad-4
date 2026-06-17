const params = new URLSearchParams(window.location.search);

const nombre = params.get("nombre");
const email = params.get("email");
const edad = params.get("edad");
const pais = params.get("pais");

const contenedor = document.getElementById("resultado");

contenedor.innerHTML = `
  <p><strong>Nombre:</strong> ${nombre}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Edad:</strong> ${edad}</p>
  <p><strong>País:</strong> ${pais}</p>
`;

const registrados = JSON.parse(localStorage.getItem("registrados")) || [];

if (nombre) {
  registrados.push({ nombre, email, edad, pais });
  localStorage.setItem("registrados", JSON.stringify(registrados));
}

const lista = document.getElementById("lista");

lista.innerHTML = registrados
  .map((r) => `<li>${r.nombre} — ${r.email} — ${r.edad} años — ${r.pais}</li>`)
  .join("");
