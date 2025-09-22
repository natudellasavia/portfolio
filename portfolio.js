// ***** FORMULARIO CONTACTO *****

// Seleccionamos el formulario y el párrafo de mensaje
const form = document.getElementById("formContacto");
const formMsj = document.getElementById("formMsj");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que se recargue la página

  // Obtenemos los valores
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validamos campos
  if (nombre === "" || email === "" || mensaje === "") {
    formMsj.textContent = "Por favor completa todos los campos.";
    formMsj.style.color = "red";
    return;
  }

  // Aquí podrías enviar los datos a un servidor con fetch o abrir Gmail
  // Por ahora solo mostramos mensaje de éxito
  formMsj.textContent = `Gracias ${nombre}, tu mensaje ha sido enviado.`;
  formMsj.style.color = "green";

  // Limpiamos formulario
  form.reset();
});

// ***** MENU DESPLEGABLE *****

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Abrir/Cerrar menú al hacer click en el toggle
menuToggle.addEventListener("click", (e) => {
  navLinks.classList.toggle("show");
  e.stopPropagation(); // Evita que el click se propague al document
});

// Cerrar menú al hacer click fuera
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
  }
});

// Evita que clicks dentro del menú lo cierren
navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});
