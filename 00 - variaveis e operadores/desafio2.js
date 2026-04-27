const bandeirada = 5.0; // Valor da bandeirada inicial
const valorPorKm = 2.0; // Valor cobrado por quilômetro rodado
const kmPercorridos = 10; // Quantidade de quilômetros percorridos

const valorTotal = bandeirada + valorPorKm * kmPercorridos;
console.log("O valor total da corrida é: R$ " + valorTotal.toFixed(2));
