boton = document.querySelector("#botoncito");

boton.addEventListener('click', function(){
    fondo = document.querySelector("body");
    if (fondo.style.backgroundColor == "red"){
        fondo.style.backgroundColor = "blue"
    }else{
        fondo.style.backgroundColor = "red"
    }
}); 

