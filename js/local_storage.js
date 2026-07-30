"use strict";

function guardarPartida(partida){
    var historial = JSON.parse(localStorage.getItem('rankingMundialQuiz')) || [];

    var preguntasErradas = partida.contadorPreguntas - partida.contadorCorrectas;
    var registroRanking = {
        nombre: partida.nombre,
        puntaje: partida.puntaje,
        erradas: preguntasErradas,
        correctas: partida.contadorCorrectas,
        totales: partida.contadorPreguntas,
        tiempo: partida.tiempoTotal
    };

    var indiceExistente = -1;
    var i;
    for (i = 0; i < historial.length; i++) {
        if (historial[i].nombre === registroRanking.nombre) {
            indiceExistente = i;
            break;
        }
    }

    if (indiceExistente === -1) {
        historial.push(registroRanking);
    } else if (registroRanking.puntaje > historial[indiceExistente].puntaje) {
        historial[indiceExistente] = registroRanking;
    }

    historial.sort(function(a, b){
        //Criterio 1: mayor puntaje
        if(a.puntaje != b.puntaje){
            return b.puntaje - a.puntaje;
        }
        //Criterio 2: menor catidad de errores
        if(a.erradas != b.erradas){
            return a.erradas - b.erradas;
        }
        //Criterio 3: menor tiempo total
        return a.tiempo - b.tiempo;
    });

    historial = historial.slice(0, 10);
    localStorage.setItem('rankingMundialQuiz', JSON.stringify(historial));
}

function borrarRanking(){
    localStorage.removeItem('rankingMundialQuiz');
}