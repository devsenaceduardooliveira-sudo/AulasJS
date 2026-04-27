let precoCombustivel = 5.89; // Preço por litro
let gastoMedio = 100; // Km por litro
let distancia = 112; // Distância percorrida em km

// Calculando o consumo de combustível necessário
let custototal = (distancia / gastoMedio) * precoCombustivel; // Custo total da viagem

console.log("O custo total da viagem é: R$ " + custototal.toFixed(3)); // Exibindo o custo total com 3 casas decimais
