//Atribuição via desestruturação Objeto
const pessoa = {
  nome: "Thomas",
  sobrenome: "Oliveira",
  idade: "24",
  endereco: {
    rua: "guia lopes",
    numero: "393",
    bairro: "Santo Antônio"
  }
};

const { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade);
