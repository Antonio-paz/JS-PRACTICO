//agregamos los cupones 
const cupones = [
    "andy",
    "superAndy",
    "OMGANDY",
]

// calcular descuento de las compras
function calcularDescuento (precio, descuento) {
    const calcularPorcentaje = 100 - descuento;
    const precioFinal = (precio * calcularPorcentaje) / 100

    return precioFinal;
}

//acá conectamos con hTML
function BotonDescuento(){

    //extraer el valor precio
    const inputPrecio = document.getElementById("precio");
    const valorPrecio = inputPrecio.value;

    //extraer el valor descuento
    //const inputDecuento = document.getElementById("descuento");
    //const valorDescuento = inputDecuento.value;

    //extrar el valor del cupon
    const inputCupon = document.getElementById("inputCupon");
    const cupon = inputCupon.value;


    let descuento;

    switch(cupon){
        case "andy":
            descuento = 15;
        break;
        case "superAndy":
            descuento = 30;
        break;
        case "OMGANDY":
            descuento = 45;
        break;
    }


    //aqui se llma a la funcion para calcualar 
    const precioConDecuento = calcularDescuento(valorPrecio, descuento);
    //aquí escribimos el resultado de nuestra operación escribiendo html desde JS 
    const resultP = document.getElementById("resultP");
    resultP.innerText = "tu precio final es de: $" + precioConDecuento;
}