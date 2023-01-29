$.ajax({
    type: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    success: function(libros){

        libros.forEach(element => {

            let cardBook = `
            <div class="cajita">
                <div>Titulo: ${element.username}</div>
                <hr>
                <div>Autor: ${element.name}</div>
                <hr>
                <div>Num. páginas: 425</div>
                <hr>
                <button class="btnRead">Leído ✓</button>
                <hr>
                <button class="btnRemoveBook">Eliminar</button>
            </div>
            `

            $(".contenedorLibros").eq(1).append(cardBook);  
        });
    }
});