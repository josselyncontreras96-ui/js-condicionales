/*localStorage.setItem("nombre", "Josse");

const nombre = localStorage.getItem("nombre");
console.log (nombre);

const apellido = localStorage.getItem("apellido");
console.log (apellido);

if (apellido === null) {
    console.log(`el usuario se llama ${nombre}`);
}
*/

/*localStorage.setItem("ciudad", "Madrid");

const ciudad = localStorage.getItem("ciudad");

console.log(ciudad);

if (ciudad === null) {
  console.log("El dato fue eliminado correctamente");
} else {
  console.log("El dato todavía existe");
}*/
// Seleccionar elementos del DOM



/*const input = document.querySelector("#nombre");

const usuario = input.value.trim();

localStorage.setItem("usuario", usuario);

const usuarioGuardado = localStorage.getItem("usuario");
console.log("Usuario guardado:", usuarioGuardado);
*/

/*sessionStorage.setItem("usuario", "Josselyn");
const usuarioGuardado = sessionStorage.getItem("usuario");
console.log("Usuario en sesión:", usuarioGuardado);
*/

const usuario = {
  nombre: "Josselyn",
  edad: 22,
  activo: true
};

localStorage.setItem("usuario", JSON.stringify(usuario));
const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
console.log("Nombre:", usuarioGuardado.nombre);


