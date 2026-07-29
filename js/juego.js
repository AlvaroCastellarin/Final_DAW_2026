"use strict";

var partida = {
    nombre: "",
    vidas: 3,
    inicio: null,
    fin: null,
    tiempoTotal: null,
    contadorPreguntas: 0,
    contadorCorrectas: 0,
    puntaje: 0,
    preguntasRestantes: []
}

function mezclarArray (array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temporal = array[i];
        array[i] = array[j];
        array[j] = temporal;
    }
    return array;
}
function inciarJuego(partida, bancoPreguntas, nombre){
    partida.nombre = nombre;
    partida.vidas = 3;
    partida.fin = null;
    partida.tiempoTotal = null;
    partida.contadorPreguntas = 0;
    partida.contadorCorrectas = 0;
    partida.puntaje = 0;
    partida.preguntasRestantes = bancoPreguntas.slice();
    mezclarArray(partida.preguntasRestantes);
    partida.inicio = Date.now();
}
function actualizaRestantes(partida){
    return partida.preguntasRestantes.pop();
}
function checkPoint(partida){
    if ((gameOver(partida.vidas) === false) && (valida3Vidas(partida.vidas) === false)){
        partida.vidas++;
    }
}
function preguntaRespondida(pregunta, respuestaSeleccionada, tiempoPregunta, partida){
    var esCorrecta = validaPregunta(pregunta, respuestaSeleccionada);
    if (esCorrecta){
        partida.puntaje = partida.puntaje + 10;
        partida.contadorCorrectas++;
        if (validaTiempo5(tiempoPregunta)){
            partida.puntaje = partida.puntaje + 5;
        }
        if (validaTiempo10(tiempoPregunta)){
            partida.puntaje = partida.puntaje + 2;
        }
    }
    else{
        partida.vidas--;
    }
    partida.contadorPreguntas++;
    if (validaPreguntasRespondidas(partida.contadorPreguntas)){
        checkPoint(partida);
    }
    return esCorrecta;
}
function finPartida(partida){
    partida.fin = Date.now();
    partida.tiempoTotal = partida.fin - partida.inicio;
}