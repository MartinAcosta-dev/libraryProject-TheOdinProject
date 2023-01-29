$(document).ready(function(){

    $("#btnAddBook").click(function(){
        $("#dialog").dialog({
            modal: true,
            draggable: false,
            width: 500
        });

    });

    $(".contenedorLibros").on('click', ".btnRemoveBook" , function(){
        var padre = $(this).parent();
        padre.hide("fast");
    });


    $("#addBook").click(function(){
        let titulo = $("#titulo").val();
        let autor = $("#autor").val();
        let numPaginas = $("#numPaginas").val();
        let leido = $("#checkRead").is(":checked");

        let newBook = new Book(titulo, autor, numPaginas, leido);

        addBookToArray(newBook);

        limpiarFormulario();

        listBooks(booksArray);

       
    });
});