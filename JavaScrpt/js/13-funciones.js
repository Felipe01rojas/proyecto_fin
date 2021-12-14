"use strict"

//! Funcion sin parametros y sin retorno
function mostrarHora() {
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    var minutosActualStr = minutosActual.toString();

    if(horaActual > 12){
        horaActual = horaActual -12;
    }
    if(minutosActual < 10){
        minutosActualStr = "0" + minutosActualStr
    }

    alert("La hora actual es:" +horaActual + ":" + minutosActualStr);
}


//! funcion con parametros y sin retorno
function saludo(strHtml){
    alert(strHtml);
}

function precentacion(nombre, titulado){
    alert("Mi nombre es: " + nombre + "del titulado: " + titulado);
}

//! Funcion con retornos

//? Si la compra es mayor o igual a 10000 tiene un descuento de 10%
function validarDescuento(valorProducto){
    var total= 0;
    if(valorProducto >= 10000){
        total = valorProducto * .9;
    }else if(valorProducto >= 5000 && valorProducto <= 9999){
        total = valorProducto * .95;
    }
    return total;
}

function calcularDescuento(valorProducto){
    alert("El costo total con el descuento es: " +validarDescuento(valorProducto));
}