//Validaciones del usuario
function validaUsuario (usuario){
    if(usuario.length === 0){
        return true;
    }
    if(usuario.length < 3){
        return true;
    }
    return false;
}

//Validaciones del formulario
function validaFormulario(nombreMensaje, email, asunto, mensaje){
    if (nombreMensaje.length === 0){
        return true;
    }
    if(email.length === 0){
        return true;
    }
    if(asunto.length === 0){
        return true;
    }
    if(mensaje.length === 0){
        return true;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        return true;
    }
    if (nombreMensaje.length < 3){
        return true;
    }
    if (asunto.length < 3){
        return true;
    }
    if(mensaje.length < 5){
        return true;
    }
    return false;
}
//Validaciones del juego
function gameOver(vidasUsuario){
        if (vidasUsuario <= 0){
        return true;
    }
    return false;
}
function finPreguntas(preguntasRestantes){
    if(preguntasRestantes.length === 0){
        return true;
    }
    return false;
}
function valida3Vidas(vidasUsuario){
    if (vidasUsuario === 3){
        return true;
    }
    return false;
}
function validaPregunta(pregunta, respuestaSeleccionada){
    if(pregunta.correcta === respuestaSeleccionada){
        return true;
    }
    return false;
}
function validaTiempo10(tiempo){
    if(tiempo > 5 && tiempo <= 10){
        return true;
    }
    return false;
}
function validaTiempo5(tiempo){
    if(tiempo <= 5){
        return true;
    }
    return false;
}
function validaPreguntasRespondidas(contadorPreguntas){
    // Verificamos que sea mayor a 0 para no dar una vida extra al iniciar el juego
    if (contadorPreguntas > 0 && contadorPreguntas % 10 === 0) {
        return true;
    }
    return false;
}