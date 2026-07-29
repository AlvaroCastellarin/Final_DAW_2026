var btnAbrirContacto = document.getElementById("btnAbrirContacto");
var btnCerrarModal = document.getElementById("btnCerrarModal");
var modalContacto = document.getElementById("modalContacto");

btnAbrirContacto.addEventListener("click", function(){
    modalContacto.classList.remove("oculto");
})
btnCerrarModal.addEventListener("click", function(){
    modalContacto.classList.add("oculto");
})