var formContacto = document.getElementById('formContacto');
var nombreMensaje = document.getElementById('nombreMensaje');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensaje');
var btnEnviar = document.getElementById('btnEnviar');

var MI_EMAIL_DESTINO = "avi.caste@gmail.com";

formContacto.addEventListener('input', function(){
    var verificacion = true;
    verificacion = validaFormulario(nombreMensaje.value.trim(), email.value.trim(), asunto.value.trim(), mensaje.value.trim());
    if(verificacion){
        btnEnviar.disabled = true;
    }
    else{
        btnEnviar.disabled = false;
    }
});

formContacto.addEventListener('submit', function (e) {
    e.preventDefault();

    var nombre = nombreMensaje.value.trim();
    var emailUsuario = email.value.trim();
    var asuntoTxt = asunto.value.trim();
    var mensajeTxt = mensaje.value.trim();

    var asuntoMail = encodeURIComponent('[MundialQuiz Reporte] ' + asuntoTxt);
    var cuerpoMail = encodeURIComponent(
        'Mensaje enviado desde la web de MundialQuiz:\n\n' +
        'De: ' + nombre + '\n' +
        'Responder a: ' + emailUsuario + '\n\n' +
        'Mensaje:\n' + mensajeTxt
    );

    window.location.href = 'mailto:' + MI_EMAIL_DESTINO + '?subject=' + asuntoMail + '&body=' + cuerpoMail;

    if (window.parent !== window && typeof window.parent.cerrarModalContacto === "function") {
        window.parent.cerrarModalContacto();
    }
});
