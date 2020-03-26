//Objetos

const pessoas = {
  nome: "Thomas",
  sobrenome: "Erick",
  idade: 30
};

console.log(pessoas.nome);
console.log(pessoas.idade);

//
const pessoa1 = new Object();
pessoa1.nome = "Joao";
pessoa1.sobrenome = "Pica";
pessoa1.falarNome = function() {
  return `${this.nome} esta falando`;
};
console.log(pessoa1);
console.log(pessoa1.falarNome());

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //Trava o objeto
  Object.freeze(this);
}

const p1 = new Pessoa("Thomas", "Erick");
delete p1.nome;
console.log(p1);
