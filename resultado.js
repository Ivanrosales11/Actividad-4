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
