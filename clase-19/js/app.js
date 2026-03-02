/*class persona {
    constructor(nombre) {
        this.nombre = nombre;
        this.email = null;
        this.admin = false;
    
    }
    saludar () {
        return `Hola, mi nombre es ${this.nombre}`;
    }
}
const persona1 = new persona("Juan");
console.log(persona1);
console.log(persona1.saludar());

const persona2 = new persona("Maria");
console.log(persona2);
console.log(persona2.saludar());*/

/*class Producto {
    constructor (nombre)
{
    this.nombre = nombre;
    this.precio = 1000;
    this.stock = 0;
}
addStock (cantidad) {
    if (cantidad < 0) return;
    this.stock += cantidad;
}
}*/

//const celular = new Producto("Motorola X", 1000);
//celular.stock = 10;


class Libro {
  constructor(id, titulo, autor) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = true;
  }

  getTitulo() {
    return this.titulo;
  }

  getAutor() {
    return this.autor;
  }

  isDisponible() {
    return this.disponible;
  }

  prestar() {
    this.disponible = false;
  }

  devolver() {
    if (!this.disponible) {
      this.disponible = true;
      return true;
    }
    return false;
  }
} 


class Biblioteca {
  constructor(libros = []) {
    this.libros = libros;
  }

  getLibros() {
    return this.libros;
  }

  addLibro(libro) {
  this.libros.push(libro);
}
buscarPorTitulo(texto) {
  return this.libros.filter(libro =>
    libro.getTitulo().toLowerCase().includes(texto.toLowerCase())
  );
}

}

const libros = [
  new Libro(1, "El Quijote", "Miguel de Cervantes"),
  new Libro(2, "1984", "George Orwell")
];

const biblioteca = new Biblioteca(libros);

console.log(biblioteca.buscarPorTitulo("amor"));
console.log(biblioteca.buscarPorTitulo("quij"));

