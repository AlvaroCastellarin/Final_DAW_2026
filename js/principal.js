function mostrar(pantalla){
    pantalla.classList.remove("oculto");
}
function ocultar(pantalla){
    pantalla.classList.add("oculto");
}

//Pantalla Juego

var usuario = document.getElementById("usuario");
var btnJugar = document.getElementById("btnjugar");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");
var pantallaPrincipal = document.getElementById("pantallaPrincipal");
var pantallaJuego = document.getElementById("pantallaJuego");
var pantallaFin = document.getElementById("pantallaFin");

usuario.addEventListener("input", function(){
    var texto = usuario.value.trim();
    if(!validaUsuario(texto)){
        btnJugar.disabled = false;
    }
    else{
        btnJugar.disabled = true;
    }
})
btnJugar.addEventListener("click", function(){
    ocultar(pantallaPrincipal);
    mostrar(pantallaJuego);
    inciarJuego(partida, bancoPreguntas);
    mostrarPregunta(actualizaRestantes(partida));
    infoPartida(partida);
    iniciarTimer(partida);
    actualizarTimer(partida);
})