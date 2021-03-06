
class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Mazda", "3", "Touring", 2015, 41500000, 65800, 2000, "Bogotá", "img/mazda-touring.jpg");
let auto2 = new Automovil("Mazda", "3", "Prime", 2021, 82500000, 12650, 2000, "Bucaramanga", "img/mazda-prime.png");
let auto3 = new Automovil("Mazda", "3", "Touring", 2019, 73900000, 22090, 2000, "Cali", "img/mazda3_2019.jpg");
let auto4 = new Automovil("Mazda", "3", "Touring", 2019, 73900000, 22090, 2000, "Medellín", "img/03_mazda-3-sedan-galeria-19.png");
let auto5 = new Automovil("Toyota", "Hilux", "Cruiser", 2022, 81900000, 29090, 2000, "Neiva", "img/Toyota-Hilux-2022-Exterior.png");

function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
/*     alert(auto.precio); */
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);

    /* let contenedorSeparador = document.createElement("div"); */
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);
    
    anyoVehiculo.setAttribute("class", "style-anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            /* mostrarVehiculo(auto3); */
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "Toyota Hilux") {
            mostrarVehiculo(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
