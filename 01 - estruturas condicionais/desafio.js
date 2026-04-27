const precoEtanol = 4.5; // Preço por litro do etanol
const precoGasolina = 5.89; // Preço por litro da gasolina
const tipoCombustivel = "gasolina"; // Tipo de combustível escolhido
const gastomedio = 10; // Km por litro
const distancia = 112; // Distância percorrida em km

if (tipoCombustivel === "etanol") {
  valorGasto = (distancia / gastomedio) * precoEtanol; // Custo total da viagem com etanol
} else {
  valorGasto = (distancia / gastomedio) * precoGasolina; // Custo total da viagem com gasolina
}

console.log(
  "O valor gasto para realizar esta viagem é: R$ " + valorGasto.toFixed(2),
); // Exibindo o custo total com 2 casas decimais
