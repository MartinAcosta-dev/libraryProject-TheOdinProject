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

function removeBookFromArray(titulo){
    booksArray.forEach(function(element, index){
        if (element.titulo == titulo){
            booksArray.splice(index);            
        }
    });
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

        let card = `
        <div class="cajita">
            <div class="inline" >Titulo: <div class="inline" id="title">${element.titulo}</div></div>
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
            
      
        $(".contenedorLibros").eq(0).append(card);    
        
    });
}