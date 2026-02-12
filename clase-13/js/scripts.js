/*function esperar() {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
         resolve({mensaje: "ok"}); 
            },
            getRandomIntInclusive (500,1500)
      );
    });
}
async function ejecutar() {
    const response = await esperar();
    console.log(response);
}
ejecutar ();*/

/*function obtenerNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero == 7) {
        resolve(numero);
      } else if (numero == 8) {
        resolve(numero);
      } else {
        reject("Error, numero incorrecto");
      }
    }, 2000);
  });
}

async function ejecutar() {
  try {
    const mensaje = await obtenerNumero(7);
    console.log("AWAIT:", mensaje);
  } catch (error) {
    console.log(error);
  }
}

ejecutar();*/

/*function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // cambia a true para probar

      if (success) {
        resolve({ datos: [1, 2, 3] });
      } else {
        reject("Error");
      }
    }, 2000);
  });
}
async function ejecutar() {
  try {
    const respuesta = await getData();
    console.log("Datos recibidos:", respuesta);
  } catch (error) {
    console.log("Hubo un error:", error);
  }
}

ejecutar();*/


