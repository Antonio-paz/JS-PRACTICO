// codigo del cuadrado





function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
  return lado * lado
}



//codigo triangulo


//function perimetroTriangulo (lado1, lado2, base){
   // return lado1 + lado2 + base
//}

//function areaTriangulo (base, altura){
    //return (base * altura)/2
//}

//triangulo isosceles

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
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

 // aqui interactuamos con HTML

 function calcularPerimetroCuadrado (){
     const input = document.getElementById("inputCuadrado");
     const value = input.value;

     const resultadoPerimetro = perimetroCuadrado(value); 
     alert("El resultado del perimetro es: " + resultadoPerimetro)
 }

 function calcularAreaCuadrado (){
     const input = document.getElementById("inputCuadrado");
     const valor = input.value;

     const resultadoArea = areaCuadrado(valor);
     alert("El resultado del area es: " + resultadoArea)
 }
 
 function calcularAlturaTrianguloIso() {
     const inputUno = document.getElementById("lado1");
     const inputDos = document.getElementById("lado2");
     const inputBase = document.getElementById("base");

     const valorUno = inputUno.value;
     const valorDos = inputDos.value;
     const valorBase = inputBase.value;

     const resultado = alturaTrianguloIsosceles(valorUno, valorDos, valorBase)
     
     alert("El resultado del triangulo es: " + resultado)
 }