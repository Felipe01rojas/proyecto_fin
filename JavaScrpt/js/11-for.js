"use strict";

//!Generando un conteo del 1 al 10//

for (var i = 1; i <= 10; i++) {
    console.log("aprendiz N° "+i);
}


//? generar un consecutivo 2 4 8 32 64 128 256 512 1024//
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//?mostrando elementos de un array//


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
for(var i = 0; i<= aprendiz.length; i++){
    console.log(aprendiz[i]);
}

//?Instructor//

for(var i = 1; i<= instructor.length; i++){
    if(i === 5){
        //!No muestra informacion al usuario
    }
    else{
      
    }
    console.log(instructor[i]);
}