// Desafio 1
let pessoa = "Eduardo Oliveira";
let idade = 17;
console.log(`Meu nome é ${pessoa} e minha idade é ${idade} anos.`);

// Desafio 2
// Tipagem dinâmica
let saudacao = "Olá, seja bem-vindo!";
saudacao = 15;
console.log(saudacao);

// Desafio 3
// Objetos e manipulação de objetos
let pessoaObjeto = {
  nome: "Eduardo Oliveira",
  idade: 17,
  profissao: "Estudante",
  tatrabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Desafio 4
// Objetos e manipulação de objetos (Parte 2)
pessoa.hobbies = ["Programação", "Jogos", "Música"];
console.log(pessoa.hobbies);

// Desafio 5
// If, else, else if
let media = 4.3;
if (media >= 7) {
  console.log("Parabéns você é um aluno: Aprovado");
} else if (media < 6 && media >= 4) {
  console.log("Você é um aluno: Recuperação");
} else {
  console.log("Infelizmente você é um aluno: Reprovado");
}
