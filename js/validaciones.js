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
        if (asunto.length < 5){
        alert("Ingresse un nombre valido");
        return;
    }
    return true;
}

function validacionVidas(vidasUsuario){
    if (vidasUsuario === 0){
        return true;
    }
    if (vidasUsuario === 3){
        return true;
    }
    return false;
}