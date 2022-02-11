"use strict"
function validarInfo(numeroDocumento) {
    let numroDocumento = document.getElementById(numeroDocumento).value;

    if(numroDocumento === ""){
        alert ("el numero de documento es obligatorio por favor diligenciar numero de documento");
    }
    else{
        alert ("La información se a enviado exitosamente!!")
    }
}