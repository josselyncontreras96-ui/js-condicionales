/*const user ={
    name: "John",
};
*/

/*class User {
    constructor (name) {
this.name = name;   // este this es la instancia del objeto que se va a crear, es decir, el objeto userJuan
    }
    saludar() {
        return `Hola, mi nombre es ${this.name}`; 
    }
}

const userJuan = new User("Juan");  // objeto instancia de la clase user 
console.log(userJuan.name);
console.log(userJuan.saludar());
*/

/*const Prducto = {
    nombre: "Producto 1",
    precio: 100,
    description: "sin descripcion",
    enStock: false,
    detalle() {
        return `El ${this.nombre} tiene el valor de ${this.precio} y $${this.enStock ? "está en stock" : "no está en stock"}`;
    }
};
console.log(Prducto.detalle());*/

/*class Producto {
    constructor(nombre, precio, description = "sin descripcion", enStock = false) {
        this.nombre = nombre;
        this.precio = precio;
        this.description = description;
        this.enStock = enStock;
    }
    detalle() {
        return `El ${this.nombre} tiene el valor de ${this.precio} y $${this.enStock ? "está en stock" : "no está en stock"}`;
    }
}
console.log(new Producto("Producto 1", 100).detalle());*/

// ----- Datos -----

/*const users = [
  { id: 1, email: "maria@ejemplo.com", password: "1234" },
  { id: 2, email: "juan@ejemplo.com", password: "123456" }
];

const user = {
  name: "Juan",
  email: "juan@ejemplo.com",
  password: "123456"
};

// ----- Objeto Session -----

class Session {
  constructor() {
    this.userId = null;
  }

  check(email, password) {
    const userFind = users.find(
      (u) => email === u.email && password === u.password
    );

    if (userFind) {
      this.userId = userFind.id;
      return true;
    }

    return false;
  }
}

const session = new Session();
session.check(user.email, user.password);
console.log(session.userId);*/

const productos = [
    { id: 1,
    title: "Producto 1",
    price: 100,
    Oferta: false,
}]

