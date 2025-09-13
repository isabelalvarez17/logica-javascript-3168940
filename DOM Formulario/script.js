const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");
const userPage = document.getElementById("userPage");
const imgEquipo = document.getElementById("img-equipo");
const textSaludo = document.getElementById("text-saludo");
const textEquipo = document.querySelector(".text-equipo");
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", function() {
  userPage.style.display = "none";
  formulario.style.display = "block";
  formulario.reset();
  document.body.style.backgroundColor = "";
  resultado.textContent = "";
});

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const color = document.getElementById("color").value;
  const equipo = document.querySelector('input[name="equipo"]:checked');

  if (!nombre || !color || !equipo) {
    resultado.textContent = "Por favor completa todos los campos.";
    return;
  }

  resultado.textContent = "";
  userPage.style.display = "block";
  formulario.style.display = "none";
  textSaludo.textContent = `Hola ${nombre}`;
  textEquipo.textContent = equipo.value;


    if (equipo.value === "gatos") {
      imgEquipo.src = "gato.png";
      imgEquipo.alt = "Logo de gatos";
    } else if (equipo.value === "loros") {
      imgEquipo.src = "loro.png";
      imgEquipo.alt = "Logo de loros";
    } else if (equipo.value === "perros") {
      imgEquipo.src = "perro.png";
      imgEquipo.alt = "Logo de perros";
    } else {
      imgEquipo.src = "";
      imgEquipo.alt = "";
    }

 

  document.body.style.backgroundColor = color;

  console.log("Formulario enviado:");
  console.log("Nombre:", nombre);
  console.log("Color:", color);
  console.log("Equipo:", equipo.value);
});