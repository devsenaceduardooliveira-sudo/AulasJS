// Objetos são coleções de propriedades,
// onde cada propriedade é uma associação entre um
// nome (chave) e um valor.
// Eles são usados para armazenar e organizar dados relacionados.

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

// Acessando propriedades
console.log(pessoa.nome); // Acessa a propriedade "nome" do objeto pessoa
console.log(pessoa.idade); // Acessa a propriedade "idade" do objeto pessoa
console.log(pessoa.profissao); // Acessa a propriedade "profissao" do objeto pessoa
console.log(pessoa.trabalhando); // Acessa a propriedade "trabalhando" do objeto pessoa

// Chamando o método saudacao
pessoa.saudacao(); // Chama o método saudacao do objeto pessoa
