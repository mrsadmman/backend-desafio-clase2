class Usuario {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [];
    this.mascotas = [];
  }
  getFullName() {
    console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
  }
  addMascota(name) {
    this.mascotas = [...this.mascotas, name];
    return console.log(this.mascotas);
  }
  countMascotas() {
    return console.log(this.mascotas.length);
  }
  addBook(name, author) {
    this.libros = [...this.libros, { name, author }];
    return console.log(this.libros);
  }
  getBookNames() {
    let nameBooks = this.libros.map((e) => e.name);
    return console.log(nameBooks);
  }
}

const usuario1 = new Usuario('Juan', 'Taphanel');
//Nombre Completo
usuario1.getFullName();
//Agrego Mascotas
usuario1.addMascota('perro');
usuario1.addMascota('gato');
usuario1.addMascota('loro');
usuario1.addMascota('conejo');
//Cuento Mascotas
usuario1.countMascotas();
//Agrego Libros
usuario1.addBook('It', 'Stephen King');
usuario1.addBook('Game of Thrones', 'George R.R');
usuario1.addBook('Cien años de soledad', 'Gabriel Garcia Marquez');
//Lista de nombres
usuario1.getBookNames();
