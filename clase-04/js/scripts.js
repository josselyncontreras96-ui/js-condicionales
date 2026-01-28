//function saludar () {
  //console.log("Hola Bienvenido");
//}

//saludar();

//function saludar() {
 // console.log("Hola mundo");
//}
//saludar();
//saludar();

// parametro y argumentos 

// function mostrarEdad(edad) {
 //  console.log("La edad es: " + edad);
// }

// mostrarEdad(18);
// mostrarEdad(25);
// mostrarEdad(40);

// function restar(num1, num2) {
  // let resultado = num1 - num2;
  // console.log("La resta es: " + resultado);
// }
// restar(10, 5);
// restar(20, 8);
// restar(100, 30);


//valores por defecto

//function saludar(nombre = "Invitado") {
//console.log("Hola, " + nombre);
//}
//saludar();  
// saludar(Josselyn); si lo pusiera asi, tendria que poner josselyn despues de = "Josselyn" en la funcion

//function obtenerNumero() {
 // return 10;
//}

//let numero = obtenerNumero();
//console.log(numero);

//const mostrarMensaje = function() {
 // console.log("Hola, este es un mensaje");
//};
//mostrarMensaje();

// funcion arrow
//const mostrarMensaje = () => {
  //console.log("Hola desde arrow function");
//};

//mostrarMensaje();

// funcion callback

function multiplicar(num1, num2, callback) {
  let resultado = num1 * num2;
  callback(resultado);
}

function mostrarResultado(resultado) {
  console.log("El resultado de la multiplicación es: " + resultado);
}

multiplicar(4, 5, mostrarResultado);




