//--- querySelector y query selector all----
//const h1 = document.getElementById("titulo");
//const h1 = document.querySelector("#titulo");

//console.log(h1);
//const items = document.querySelectorAll(".item")
//console.log(items);

// --- classlist---

//const p = document.querySelector("p");
//p.classList.add("activo");
//console.log(p.classList);

//--- classList.remove -----

//const p = document.querySelector("p");
//p.classList.remove("activo");
//console.log(p.classList);

//--- classList.contains---
//const p = document.querySelector("p");
//console.log(p.classList.contains("activo"));

//--- classList.toggle---
//const p = document.querySelector("p");
//p.classList.toggle("activo");
//console.log(p.classList);

//--- classList.replace----
//const p = document.querySelector("p");

//p.classList.add("activo");
//console.log(p.classList);

//p.classList.replace("activo", "resaltado");
//console.log(p.classList);


//--- createElement----
//const p = document.createElement("p");
//p.textContent = "Nuevo Parrafo";
//p.classList.add("activo");

//console.log(p);
//const body = document.body;
//body.apend("Hola")       ------ lo agrega al final 
//body.prepend("Hola")     ------ lo agrega al principio 



//const contenedor = document.getElementById("contenedor");
//const nuevoP = document.createElement("p");
//nuevoP.textContent = "Nuevo párrafo agregado con append";
//contenedor.append(nuevoP);


//--- after y before

/*nst contenedor = document.querySelector("#contenedor");
const elementoNuevo = document.createElement("section");
elementoNuevo.classList.add("rojo");
elementoNuevo.innerHTML = "<h3>Contenido de elemento nuevo</h3>";
contenedor.after(elementoNuevo);
*/

//---- children

/*const p = document.createElement("p");
const contenedor = document.querySelector("#contenedor");
p.textContent = "Parrafo creado dinamicamente";
p.style.color = "blue";
p.classList.add("activo");
contenedor.appendChild(p);

const items = contenedor.children;
console.log(items);
*/

const p = document.createElement("p");
const contenedor = document.querySelector("#contenedor");
p.textContent = "Parrafo creado dinamicamente";
p.style.color = "blue";
p.classList.add("activo");
contenedor.appendChild(p);
const items = contenedor.children;
console.log(items);

items[0].remove(); // elimina
items[items.length - 1].remove(); // elimina
