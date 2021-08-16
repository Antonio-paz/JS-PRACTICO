//aqui estamos haciendo que solo exista el valor del salario

const salariosGt = guate.map(
    function(personita){
        return personita.salario
    }
)


// aqui estamos ordenando nuestros salaros
const salarioGTSorted = salariosGt.sort(
    function (salarioA, salarioB){
        return salarioA - salarioB
    }
)

// aqui vamos a crear una funcion que devulva si nuestro numero es par o impar

function esPar(numerito){
    return (numerito % 2 === 0)
}

// funcion para calcular el promedio
function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorActual){
            return valorAcumulado + valorActual
        }
    )
     const promedio = sumaLista / lista.length
     return promedio;
 }
 



//aqui encontramos la mediana

function medianaSalarios (lista){
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1]
        const personitaMitad2 = lista[mitad]

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2)
        return mediana
    }else{
        const personitaMitad = lista[mitad]
        return personitaMitad
    }
}

console.log(
    medianaSalarios(salarioGTSorted )
)

// link del proyecto
// https://static.platzi.com/media/tmp/class-files/github/curso-practico-javascript/curso-practico-javascript-taller4-analisis-salarial/analisis.js