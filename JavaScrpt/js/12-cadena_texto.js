"use strict";

//! combersion a mayuscularr//

var fraceAMayuscula = "Esto es una prueva en JavaSCRipt";

var fraceAMayuscula = fraceAMayuscula.toUpperCase();

console.log(fraceAMayuscula);


//?convertir a minuscula//

var fraceAMinuscula = "Esto es una prueva en JavaSCRipt";

var fraceAMinuscula = fraceAMinuscula.toLowerCase();

console.log(fraceAMinuscula);

//? convertir primera mayuscula resto en minuscula

var frasePrimeraMayuscula = "eSta es una prUeba en JavaSCRipt"


for (var i = 0; i <= frasePrimeraMayuscula -1; i++){
    if(i === 0){
        var auxFrase = frasePrimeraMayuscula.charAt(0);
        console.log(auxFrase.toUpperCase);
    }else{
        auxFrase += frasePrimeraMayuscula.charAt(i).toLowerCase;

    }
}



