/* let $_titulo = document.querySelector('h1'),
    $_parrafo = document.querySelector('p');


$_titulo.innerHTML = "Juego del Numero Secreto";
$_parrafo.innerHTML = "Indica un numero del 1 al 10"; */

//se creo una funcion para no repetir el automatizar la interaccion con el html

let numeroSecreto = 0;
let intentos = 0;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    //let numeroDeUsuario = document.getElementById('valorUsuario').value;
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /* //evaluamos el tipo de variable de numeroDeUsuario
    console.log(typeof(numeroDeUsuario));
    //mostramos por consola el numero secreto
    console.log(numeroSecreto);
    //evaluamos el tipo de variable de numeroSecreto
    console.log(typeof(numeroSecreto));    
    //mostramos por consola el numero de usuario
    console.log(numeroDeUsuario);
    //verificamos si las 2 variables son estrictamente iguales (tanto en el valor asigando a la variable, como el tipo de dato)
    //dara TRUE, si lo dejamos el valor de numeroDeUsuario con el parseInt()
    //dara FALSE, si lo dejamos el valor de numeroDeUsuario sin el parseInt()
    console.log(numeroDeUsuario === numeroSecreto);
    return;    */

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor');            
        }
        intentos++;
        limpiarCaja();
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Numero Secreto!');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

condicionesIniciales();

