function constructorObjeto(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}


boton = document.querySelector("#botoncito");

boton.addEventListener('click', function(){
    let nombre = prompt("Introduzca el nombre del sujeto");
    let edad = prompt("Introduzca la edad del sujeto");

    const objeto1 = new constructorObjeto(nombre, edad);

    console.log("El nombre es: "+objeto1.nombre+". Y su edad es: "+objeto1.edad);
}); 

