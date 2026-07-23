"use strict";

function Usuario(nombre, partida) {
    this.nombre = nombre;
    this.partida = partida;
}

function Partida(preguntasRestantes) {
    this.vidas = 3;
    this.inicio = new Date();
    this.fin = null;
    this.tiempoTotal = null;
    this.contadorPreguntas = 0;
    this.contadorCorrectas = 0;
    this.puntaje = 0;
    this.preguntasRestantes = preguntasRestantes;
}

Partida.prototype.finalizar = function () {
    this.fin = new Date();
    this.tiempoTotal = this.fin - this.inicio;
};