const precoProduto = 50.0; // Preço do produto
const quantidadeComprada = 3; // Quantidade de produtos comprados
const valorDesconto = 0.1; // Desconto de 10%

const valorTotal = precoProduto * quantidadeComprada; // Valor total sem desconto
const valorDescontoAplicado = valorTotal * valorDesconto; // Valor do desconto aplicado
const valorFinal = valorTotal - valorDescontoAplicado; // Valor final a pagar
console.log("O valor total a pagar é: R$ " + valorFinal.toFixed(2));
