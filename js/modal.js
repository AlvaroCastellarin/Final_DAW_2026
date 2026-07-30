var btnAbrirContacto = document.getElementById("btnAbrirContacto");
var btnCerrarModalContacto = document.getElementById("btnCerrarModalContacto");
var modalContacto = document.getElementById("modalContacto");
var modalInstrucciones = document.getElementById("modalInstrucciones");
var btnAbrirInstrucciones = document.getElementById("btnAbrirInstrucciones");
var btnCerrarModalInstrucciones = document.getElementById("btnCerrarModalInstrucciones");

function cerrarModalContacto(){
    modalContacto.classList.add("oculto");
}

btnAbrirContacto.addEventListener("click", function(){
    modalContacto.classList.remove("oculto");
})
btnCerrarModalContacto.addEventListener("click", cerrarModalContacto);
btnAbrirInstrucciones.addEventListener("click", function(){
    modalInstrucciones.classList.remove("oculto");
})
btnCerrarModalInstrucciones.addEventListener("click", function(){
    modalInstrucciones.classList.add("oculto");
})
