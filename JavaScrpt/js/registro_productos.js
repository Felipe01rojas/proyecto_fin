"use strict"

function crearTabla(){
    let contenedor = document.getElementById("table-js");
    let nodeTabla = document.createElement("table");
    contenedor.appendChild(nodeTabla);

    let nodeTR1 = document.createElement("tr");
    nodeTabla.appendChild(nodeTR1);
   

    let nodeth1 = document.createElement("th");
    nodeTR1.appendChild(nodeth1);
    let nodeth2 = document.createElement("th");
    nodeTR1.appendChild(nodeth2);
    let nodeth3 = document.createElement("th");
    nodeTR1.appendChild(nodeth3);
    let nodeth4 = document.createElement("th");
    nodeTR1.appendChild(nodeth4);

    let nodeth1Txt = document.createTextNode("CODIGO");
    nodeth1.appendChild(nodeth1Txt);
    let nodeth2Txt = document.createTextNode("DESCRIPCIÓN");
    nodeth2.appendChild(nodeth2Txt);
    let nodeth3Txt = document.createTextNode("VALOR UNITARIO");
    nodeth3.appendChild(nodeth3Txt);   
    let nodeth4Txt = document.createTextNode("UNIDAD STOCK");
    nodeth4.appendChild(nodeth4Txt);

    nodeTabla.setAttribute("class","table-style")
}