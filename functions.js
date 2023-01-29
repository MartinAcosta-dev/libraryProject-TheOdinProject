let booksArray = [];

function Book(titulo, autor, paginas, leido){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
}

function addBookToArray(book){
    booksArray.push(book);
}

function limpiarFormulario(){

}