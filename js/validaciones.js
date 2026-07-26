//Validaciones del usuario
function validaUsuario (usuario){
    if(usuario.length === 0){
        alert("Escriba un nombre para poder jugar");
        return;
    }
    if(usuario.length < 3){
        alert("El nombre debe tener 3 caracteres como minimo");
        return;
    }
    return true;
}

//Validaciones del formulario
function validaFormulario(nombreMensaje, email, asunto, mensaje){
    if (nombreMensaje.length === 0){
        alert("Falta llenar el campo nombre");
        return;
    }
    if(email.length === 0){
        alert("Falta llenar el campo email");
        return;
    }
    if(asunto.length === 0){
        alert("Debe llenar el campo asunto");
        return;
    }
    if(mensaje.length === 0){
        alert("Debe llenar el campo mensaje");
        return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        alert("Debe ingresar un mail valido");
        return;
    }
    if (nombreMensaje.length < 3){
        alert("Ingresse un nombre valido");
        return;
    }
        if (asunto.length < 4){
        alert("Ingresse un asunto valido");
        return;
    }
    if(mensaje.length < 10){
        alert("EL mensaje debe tener 10 caracteres o mas");
        return;
    }
}
//Validaciones del juego
function gameOver(vidasUsuario){
        if (vidasUsuario === 0){
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