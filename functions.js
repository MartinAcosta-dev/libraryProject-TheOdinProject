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
    $("#dialog input").val("");
    $("#dialog #checkRead").prop("checked", false);
}

function limpiarContenedor(){
    $(".contenedorLibros").eq(0).html("");
}

function listBooks(booksArray){

    limpiarContenedor();

    booksArray.forEach(element => {

        console.log(element);

        let card = `
        <div class="cajita">
            <div>Titulo: ${element.titulo}</div>
            <hr>
            <div>Autor: ${element.autor}</div>
            <hr>
            <div>Num. páginas: ${element.paginas}</div>
            <hr>`;

            if(element.leido == true){
                card += `
                    <button class="btnRead">Leído ✓</button>
                    <hr>
                    <button class="btnRemoveBook">Eliminar</button>
                </div>
                `
            }else{
                card += `
                    <button class="btnNotRead">No leído ✗</button>
                    <hr>
                    <button class="btnRemoveBook">Eliminar</button>
                </div>
                `
            }
            
        console.log(card);    
        $(".contenedorLibros").eq(0).append(card);    
        
    });
}