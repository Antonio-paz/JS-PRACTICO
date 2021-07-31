

// calcular descuento de las compras
function calcularDescuento (precio, descuento) {
    const calcularPorcentaje = 100 - descuento;
    const precioFinal = (precio * calcularPorcentaje) / 100

    return precioFinal;
}

//acá conectamos con hTML
function BotonDescuento(){
    const inputPrecio = document.getElementById("precio");
    const valorPrecio = inputPrecio.value;
    const inputDecuento = document.getElementById("descuento");
    const valorDescuento = inputDecuento.value;

    //aqui se llma a la funcion para calcualar 
    const precioConDecuento = calcularDescuento(valorPrecio, valorDescuento);
    //aquí escribimos el resultado de nuestra operación escribiendo html desde JS 
    const resultP = document.getElementById("resultP");
    resultP.innerText = "tu precio final es de: $" + precioConDecuento;
}