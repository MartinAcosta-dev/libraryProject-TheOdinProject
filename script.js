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
        var titulo = padre.find("#title").text();
        removeBookFromArray(titulo);

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

    $(".contenedorLibros").on("click",".btnReadNotRead",function(){
        if ( $(this).hasClass("btnRead") ){
            $(this).removeClass("btnRead");
            $(this).addClass("btnNotRead");
            $(this).text("No leido ✗")
        }else{
            $(this).removeClass("btnNotRead");
            $(this).addClass("btnRead");
            $(this).text("Leído ✓")
        }
    });

});