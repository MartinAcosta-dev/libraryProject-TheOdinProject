function constructorBook(titulo, autor, paginas, leido){
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
    this.leido = leido;
}

constructorBook.prototype.getInfo = function(){
    let respuesta = "";

    respuesta += "El titulo del libro es: "+this.titulo+". \nSu autor es: "+this.autor+".\nSu numero de paginas es: "+this.paginas;

    if(this.leido == false){
        respuesta += "\nAun no ha leido este libro.";
    }else{
        respuesta += "\nYa ha leido este libro!!";
    }
    return respuesta;
}

boton = document.querySelector("#botoncito");

boton.addEventListener('click', function(){
    let titulo = prompt("Introduzca el nombre del libro");
    let autor = prompt("Introduzca el autor del libro");
    let paginas = prompt("Introduzca el numero de paginas");
    let leido = confirm("Ha leido este libro?")

    const objeto1 = new constructorBook(titulo, autor, paginas, leido);

    console.log(objeto1.getInfo());

    let plantilla = `<h1>
                        ${objeto1.getInfo()}
                     <h1>`;

    let pagina = document.querySelector("body");
    pagina.innerHTML = plantilla;
}); 

