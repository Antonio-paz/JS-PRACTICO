function calcularMediaAritmetica (lista){
   const sumaLista = lista.reduce(
       function (valorAcumulado = 0, valorActual){
           return valorAcumulado + valorActual
       }
   )
   
    const promedio = sumaLista / lista.length
    return promedio;
}


//