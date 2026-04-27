//const numero = 11;

//const numeroPar = numero % 2 === 0;

//console.log(numeroPar);

// if estruturas condicionais

const numero = 10;

const numeroPar = numero % 2 === 0;
if (numeroPar) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

// else if estruturas condicionais

const idade = 17;
if (idade < 18) {
  console.log("Menor de idade");
} else if (idade >= 18 && idade < 65) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
