// codigo del cuadrado





function perimetroCuadrado(lado) {
    var resultado = lado * 4;
    console.log(`El perimetro del cuadrado es: ${resultado}`)
}

function areaCuadrado (lado) {
    var resultado = lado * lado;
    console.log(`El area del cuadrado es: ${resultado}`);
}



//codigo triangulo


function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo (base, altura){
    return (base * altura)/2
}



//codigo del circulo

const PI = Math.PI;

function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo( radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


function areaCirculo(radio) {
    return (radio * radio ) * PI;
}

 
