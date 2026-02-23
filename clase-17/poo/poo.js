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

class Producto {
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
console.log(new Producto("Producto 1", 100).detalle());
