'use strict'


function validar(){
    let nombre_usuario= document.getElementById('nombre_usuario').value;
    if(nombre_usuario=== '');
    alert('el nombre es obligatorio')
}

function validar(){
    let apellido_usuario = document.getElementById('apellido_usuario').value;
    if(apellido_usuario=== '')
    alert ('el apellido es obligatorio')
}

function validar(){
    let genero = document.getElementById('genero').value;
    if(genero=== '')
    alert ('el genero es obligatorio por favor seleccione su genero')
}

function validar(){
    let ipqr = document.getElementById('ipqr').value;
    if(ipqr=== '')
    alert ('la petición, queja o reclamo son obligatorios')
}
