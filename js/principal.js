function mostrar(pantalla){
    pantalla.classList.remove("oculto");
}
function ocultar(pantalla){
    pantalla.classList.add("oculto");
}
var pantallaPrincipal = document.getElementById("pantallaPrincipal");
var pantallaJuego = document.getElementById("pantallaJuego");
var pantallaFin = document.getElementById("pantallaFin");
var usuario = document.getElementById("usuario");
var btnJugar = document.getElementById("btnjugar");
var cancionInicio = new Audio('sounds/cancionInicio.mp3');
var silbato = new Audio('sounds/silbato.mp3');
var hinchada = new Audio('sounds/hinchada.mp3');
var gol = new Audio('sounds/gol.mp3');
var uhhhh = new Audio('sounds/uhhhh.mp3');
var pitazoFinal = new Audio('sounds/pitazoFinal.mp3');
cancionInicio.loop = true;
hinchada.loop = true;
function reproducirMusica(audio) {
    audio.play();
}
function detenerMusica(audio) {
    audio.pause();          // Pausa el audio
    audio.currentTime = 0;  // Regresa el audio al inicio (0 segundos)
}

silbato.addEventListener('ended', function(){
    reproducirMusica(hinchada);
});

//Pantalla Princiapl
document.addEventListener('DOMContentLoaded', function(){
    rellenarTabla();
    reproducirMusica(cancionInicio)
})

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
    detenerMusica(cancionInicio);
    ocultar(pantallaPrincipal);
    reproducirMusica(silbato);
    mostrar(pantallaJuego);
    inciarJuego(partida, bancoPreguntas, usuario.value.trim());
    p = mostrarPregunta(actualizaRestantes(partida));
    horaPreguntaActual = Date.now();
    op1.disabled = false;
    op2.disabled = false;
    op3.disabled = false;
    op4.disabled = false;
    infoPartida(partida);
    iniciarTimer(partida);
    actualizarTimer(partida);
})

//Pantalla Juego
var p;
var horaPreguntaActual = null;
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");

function opcion(op, indice){
    op1.disabled = true;
    op2.disabled = true;
    op3.disabled = true;
    op4.disabled = true;
    var respuestaSeleccionada = indice;
    var tiempoRespuesta = (Date.now() - horaPreguntaActual) / 1000;
    var resultado;
    resultado = preguntaRespondida(p, respuestaSeleccionada, tiempoRespuesta, partida);
    if(resultado){
        reproducirMusica(gol);
        op.classList.add('correcto');
    }
    else{
        reproducirMusica(uhhhh);
        op.classList.add('incorrecto');
    }
    setTimeout(function() {
        op.classList.remove('correcto');
        op.classList.remove('incorrecto');

        if(gameOver(partida.vidas) || finPreguntas(partida.preguntasRestantes)){
            detenerMusica(hinchada);
            reproducirMusica(pitazoFinal);
            detenerTimer();
            finPartida(partida);
            rellenarFin(partida);
            ocultar(pantallaJuego);
            mostrar(pantallaFin);
        } else {
            p = mostrarPregunta(actualizaRestantes(partida));
            horaPreguntaActual = Date.now();
            infoPartida(partida);
            actualizarTimer(partida);
            op1.disabled = false;
            op2.disabled = false;
            op3.disabled = false;
            op4.disabled = false;
        }
    }, 1000); // 1000 milisegundos = 1 segundo
}
op1.addEventListener("click", function(){opcion(op1, 0);})
op2.addEventListener("click", function(){opcion(op2, 1);})
op3.addEventListener("click", function(){opcion(op3, 2);})
op4.addEventListener("click", function(){opcion(op4, 3);})

//Pantalla Fin

var btnAceptar = document.getElementById("btnAceptar");
var exito = document.getElementById("exito");

btnAceptar.addEventListener("click", function(){
    guardarPartida(partida);
    reproducirMusica(cancionInicio);
    ocultar(pantallaFin);
    rellenarTabla();
    mostrar(pantallaPrincipal);
    if (finPreguntas(partida.preguntasRestantes)){
        exito.classList.add('oculto')
    }
})