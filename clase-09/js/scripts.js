// --- onclick--
/* const boton = document.querySelector("#btnSaludar");

boton.onclick = () => {
  console.log("Click en el botón");
};

//---addEventListener
*/

/*const h1 = document.querySelector("#titulo");
let cambiado = false;

h1.addEventListener("click", () => {
  if (!cambiado) {
    h1.textContent = "Texto cambiado";
    cambiado = true;
  } else {
    h1.textContent = "Bienvenido a la Clase Javascript 09";
    cambiado = false;
  }
});
*/


//const input = document.querySelector("#nombre");

//input.addEventListener("keyup", (event) => {
 // console.log(event.target.value);
//});

//---- event.prevent

/*const link = document.querySelector("#link");
link.addEventListener("click", (event) => {
event.preventDefault();
console.log("no va al href");
});
*/

//---- stopPropagation

/*const contenedor = document.querySelector("#contenedor");
contenedor.addEventListener("click", () => {
console.log("Click en el contenedor");
});

const item = document.querySelector("item");
item.addEventListener("click", (event) => {
 event.stopPropagation();
 console.log("click en el item");
});
*/

//---- delegacion de eventos
// const items = document.querySelectorAll(".item");

// // items.forEach((item) => {
// //   item.addEventListener("click", () => {
// //     console.log(item.textContent);
// //   });
// // });

// document.addEventListener("click", (event) => {
//   if (event.target.classList.contains("item")) {     esto se crea y da la delegacion al nuevo agregado
//     console.log(event.target.textContent);
//   }
// });

// // Se crear dinámicamente después

// const contenedor = document.querySelector("#contenedor");

// const item = document.createElement("p");
// item.textContent = "Item dinámico";
// item.classList.add("item");

// contenedor.appendChild(item);