//--- Ejercicio 1
/*const inputNombre = document.getElementById("nombreInput");
const button = document.getElementById("guardarBtn");
const mensaje = document.getElementById("mensaje");

button.addEventListener("click", function () {
    const nombre = inputNombre.value;
    localStorage.setItem("nombre", nombre);
    mensaje.textContent = "Bienvenido, " + nombre;
});

const nombreGuardado = localStorage.getItem("Nombre");
if (nombreGuardado){
    mensaje.textContent = "Bienvenido, " + nombreGuardado;
}*/

//--- Ejercicio 2
/*const input = document.getElementById("tareaInput");
const button = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");

button.addEventListener("click", function () {
    if (input.value == "") return;
    const li = document.createElement("li");
    li.textContent = input.value;
    const buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = "Eliminar";

    buttonEliminar.addEventListener("click", function () {
        lista.removeChild(li);
    });
    
    li.appendChild(buttonEliminar);
    lista.appendChild(li);

    input.value = "";
    console.log(document.getElementById("agregarBtn"));

});*/

//--- Ejercicio 3

/*function guardar() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });

}
const inputTarea = document.getElementById("tareaInput");
const button = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");


button.addEventListener("click", function () {
  if (inputTarea.value === "") return;

  mensaje.textContent = "Guardando...";

  guardar().then(function () {

    const li = document.createElement("li");
    li.textContent = inputTarea.value;

    const buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = "Eliminar";

    buttonEliminar.addEventListener("click", function () {
      lista.removeChild(li);
    });

    li.appendChild(buttonEliminar);
    lista.appendChild(li);

    mensaje.textContent = "Guardado correctamente";

    inputTarea.value = "";

  });

});*/

//--- Ejercicio 4

function guardar() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 1000);
  });

}
const inputTarea = document.getElementById("tareaInput");
const button = document.getElementById("agregarBtn");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");


button.addEventListener("click", function () {
  if (inputTarea.value === "") return;

  mensaje.textContent = "Guardando...";

  guardar().then(function () {

    const li = document.createElement("li");
    li.textContent = inputTarea.value;

    const buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = "Eliminar";

    buttonEliminar.addEventListener("click", function () {
        li.style.opacity = "0.5";
        guardar().then(function () {
      lista.removeChild(li);
    });
});
    li.appendChild(buttonEliminar);
    lista.appendChild(li);

    mensaje.textContent = "Guardado correctamente";

    inputTarea.value = "";

  });

});

//--- Ejercicio 5
const limpiarBtn = document.getElementById("limpiarBtn");
limpiarBtn.addEventListener("click", function () {

    mensaje.textContent = "Eliminando...";

    guardar().then(function () {

        lista.innerHTML = "";

        mensaje.textContent = "Lista vacía";

    });

});



