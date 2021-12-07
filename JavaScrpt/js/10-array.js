"use strict"

//! forma 1 de declarar e iniciar array//

var aprendiz = new Array();

aprendiz[0]=1;
aprendiz[1]="C.C";
aprendiz[2]="1007576011";
aprendiz[3]="Felipe";
aprendiz[4]="Rojas Reyes";
aprendiz[5]="calle 7 #3-12 centro poblado Maito";
aprendiz[6]="3125671196";
aprendiz[7]="13-06-2001";
aprendiz[8]=true;

//! 2da forma de declarar e iniciar array//

var instructor = new Array(1,"C.C","Wilson","Martinez","calle 4 N. 3-23","3155671123","1967-11-23",true);

//! 3ra forma de declaracion e iniciar array//

var titulado =[1,"2236074","ADSI","2021-01-24","2022-07-05","Sergio Jaramillo",true];


//! Mostrar los nombres Apellido del aprendiz, del intructor y lider del titulado//

console.log(aprendiz[3],"\n",aprendiz[4],"\n",instructor[2],"\n",titulado[5]);



//!metodo length//

//? si la frase supera las 20 letras informar al usuario//

var fraseUsuario = "LOS APRENDIZES DE ADSI"
var cantCaracteresFrase = fraseUsuario.length

if(cantCaracteresFrase > 20) {
    console.log("La frace supera las 20 caracteristicas")
}