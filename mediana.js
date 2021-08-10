function calcularMediaAritmetica (lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, valorActual){
            return valorAcumulado + valorActual
        }
    )
     const promedio = sumaLista / lista.length
     return promedio;
 }
 


const lista1 = [
    100,
    200,
    300,
    400,
    500,
    600,
];

let mediana;

const mitadLista1 = parseInt(lista1.length / 2 )

function esPar (numerito){
    if( numerito % 2 === 0){
        return true;
    }else {
        return false;
    }
}

// calculamos la mediana con un condicional para saber si tenemos que devolver solo la mediana o la mediana con promedio

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1]
    const elemento2 = lista1[mitadLista1 - 1]

    const elemento1y2 = calcularMediaAritmetica ([
        elemento1, elemento2
    ])

    mediana = elemento1y2
}else {
    mediana = lista1[mitadLista1]
}