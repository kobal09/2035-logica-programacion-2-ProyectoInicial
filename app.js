/* let $_titulo = document.querySelector('h1'),
    $_parrafo = document.querySelector('p');


$_titulo.innerHTML = "Juego del Numero Secreto";
$_parrafo.innerHTML = "Indica un numero del 1 al 10"; */

//se creo una funcion para no repetir el automatizar la interaccion con el html

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

asignarTextoElemento('h1', 'Juego del Numero Secreto!');
asignarTextoElemento('p', 'Indica un numero del 1 al 10!');