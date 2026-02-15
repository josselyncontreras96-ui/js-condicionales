const btnCambiarTema = document.querySelector("#btnCambiarTema");

// Verificar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const temaGuardado = localStorage.getItem("tema");

  if (temaGuardado === "oscuro") {
    document.body.classList.add("dark");
  }
});

// Guardar cuando el usuario hace click
btnCambiarTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "oscuro");
  } else {
    localStorage.setItem("tema", "claro");
  }
});
