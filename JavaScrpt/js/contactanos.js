'use strict'


function validarInfo(){
    let nombre_usuario= document.getElementById("nombre_usuario").value;
    if(nombre_usuario === ""){
    alert('el nombre es obligatorio')
}


    let apellido_usuario = document.getElementById("apellido_usuario").value;
    if(apellido_usuario === ""){
    alert ('el apellido es obligatorio')
}

    let consulta = document.getElementById("consulta").value;
    if(consulta === ""){
    alert ('la petición, queja o reclamo son obligatorios')
}else{
    alert("Información valida")
}
}
