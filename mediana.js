const lista1 = [
    100,
    200,
    300,
    400,
    500,
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

}else {
    mediana = lista1[mitadLista1]
}