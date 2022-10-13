class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [
      {
        name: name,
        author: undefined,
      },
    ];
    this.mascotas = [mascotas];
  }
  getFullName() {
    console.log(`El nombre completo es ${this.nombre} ${this.apellido}`);
  }
  addMascota(name) {
    this.mascotas.push(name);
    return console.log(this.mascotas);
  }
  countMascotas() {
    return console.log(this.mascotas.length);
  }
  addBook(name, author) {
    this.libros.push({ name, author });
    return console.log(this.libros);
  }
  getBookNames() {
    let nameBooks = this.libros.map((e) => e.name);
    return console.log(nameBooks);
  }
}

const usuario1 = new Usuario(
  'Juan',
  'Taphanel',
  [
    {
      name: 'Juego De Tronos',
      author: 'George R.R',
    },
  ],
  'Gato'
);
usuario1.getFullName();
usuario1.addMascota('perro');
usuario1.countMascotas();
usuario1.addBook('It', 'Stephen King');
usuario1.getBookNames();
