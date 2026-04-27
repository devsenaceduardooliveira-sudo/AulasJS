// Criando um objeto
let pessoa = {
  nome: "Eduardo Oliveira",
  idade: 17,
  profissao: "Desenvolvedor",
  trabalhando: true,
  saudacao: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};

// Modificando propriedades
pessoa.idade = 18;
pessoa.profissao = "Engenheiro de Software";

console.log(pessoa);

// Adicionando novas propriedades
pessoa.cidade = "Arapiraca";

console.log(pessoa);

// Deletando propriedades
delete pessoa.trabalhando;
console.log(pessoa);
