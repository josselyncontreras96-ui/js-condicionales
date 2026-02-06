//--- Desestructuracion ----

// arrays-------- el orden en los arrays si importa 

/*const colores = ["rojo", "verde", "azul"];

//console.log(colores[1]);
let [rojo, verde] = colores;

console.log(colores[0]);
console.log(rojo);

console.log(colores[1]);
console.log(verde);*/

//---------
/*const personas = [
{ nombre: "Ana", edad: 22 },
{ nombre: "Juan", edad: 17 },
{ nombre: "Pedro", edad: 30 },
];

const [userAna, userJuan, userPedro] = personas; 
userAna.nombre = "Ana Maria";
personas[1].edad =18;


//const user = personas
//user.push({ nombre: "Maria", edad: 29})

let numeros = [10, 20, 30];


let [a, b, c] = numeros;
console.log(a);
console.log(b);
console.log(c);*/

//--- OBJETOS---- el orden en los objetos no importa

/*const persona = { 
    nombre: "Juan", 
    edad: 17 
};

let { edad, nombre } = persona;
console.log(nombre, edad, persona); 
//const nombre = persona.nombre;
//const edad = persona.edad;

//const {nombre, edad} = persona;
//console.log(nombre, edad)*/

/*let producto = {
  nombre: "Ordenador",
  precio: 5000,
  stock: 10,
};

let { nombre, precio } = producto;
console.log(`El producto ${nombre} cuesta ${precio} $`);
*/

/*const numeros = [1, 2, 3, 4, 5];
const [a, b, ...nums] = numeros;
console.log(a, b, nums)
*/

/*let nombres = ["Ana", "Juan", "Pedro", "Lucía"];

let [primero, ...resto] = nombres;
console.log(primero);
console.log(resto);*/

/*const promedioNotas = (...notas) => {
  let suma = 0;

  for (let nota of notas) {
    suma += nota;
  }

  return suma / notas.length;
};
console.log(promedioNotas(7, 8, 9, 10));
*/