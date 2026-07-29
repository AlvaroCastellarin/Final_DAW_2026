//Pantalla Principal
var cuerpoTabla = document.getElementById("cuerpoTabla")
function rellenarTabla(){
    var historial = JSON.parse(localStorage.getItem('rankingMundialQuiz')) || [];
    var i;
    var partida;
    var fila;
    if(historial.length === 0){
        return;
    }
    for(i = 0; i < historial.length; i++){
        partida = historial[i];

        fila = document.createElement("tr");
        fila.innerHTML =
            "<td>" + partida.nombre + "</td>" +
            "<td>" + partida.puntaje + "</td>" +
            "<td>" + partida.correctas + "/" + partida.totales + "</td>" +
            "<td>" + formatearTiempo(partida.tiempo) + "</td>";
        cuerpoTabla.appendChild(fila);
    }
}

// Pantalla Juego
var vidas = document.getElementById("vidas");
var timer = document.getElementById("timer");
var puntos = document.getElementById("puntos");

var pregunta = document.getElementById("pregunta");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");

var nombre = document.getElementById("nombre");
var contadorPreguntas = document.getElementById("contadorPreguntas");

var idTimer = null;

function infoPartida(partida){
    if(partida.vidas === 0){
        vidas.textContent = "0";
    }
    if(partida.vidas === 1){
        vidas.textContent = "❤️";
    }
    if(partida.vidas === 2){
        vidas.textContent = "❤️❤️";
    }
    if(partida.vidas === 3){
        vidas.textContent = "❤️❤️❤️";
    }
    puntos.textContent = partida.puntaje;
    nombre.textContent = partida.nombre;
    var rellenarContador = `${partida.contadorCorrectas}/${partida.contadorPreguntas}`;
    contadorPreguntas.innerHTML = rellenarContador;

}

function formatearTiempo(milisegundos){
    var segundosTotales = Math.floor(milisegundos / 1000);
    var minutos = Math.floor(segundosTotales / 60);
    var segundos = segundosTotales % 60;
    var minutosTexto = minutos < 10 ? "0" + minutos : "" + minutos;
    var segundosTexto = segundos < 10 ? "0" + segundos : "" + segundos;
    return minutosTexto + ":" + segundosTexto;
}

function actualizarTimer(partida){
    var transcurrido = Date.now() - partida.inicio;
    timer.textContent = formatearTiempo(transcurrido);
}

function iniciarTimer(partida){
    actualizarTimer(partida);
    idTimer = setInterval(function () {
        actualizarTimer(partida);
    }, 1000);
}

function detenerTimer(){
    clearInterval(idTimer);
    idTimer = null;
}

function mostrarPregunta(preguntaRecibida){
    pregunta.textContent = preguntaRecibida.pregunta;
    op1.textContent = preguntaRecibida.opciones[0];
    op2.textContent = preguntaRecibida.opciones[1];
    op3.textContent = preguntaRecibida.opciones[2];
    op4.textContent = preguntaRecibida.opciones[3];
}

//Pantalla Fin

var puntajeFin = document.getElementById("puntajeFin");
var correctasFin = document.getElementById("correctasFin");
var tiempoFin = document.getElementById("tiempoFin");

function rellenarFin(partida){
    puntajeFin.textContent = partida.puntaje;
    var rellenarContador = `${partida.contadorCorrectas}/${partida.contadorPreguntas}`;
    correctasFin.innerHTML = rellenarContador;
    tiempoFin.textContent = formatearTiempo(partida.tiempoTotal);
}