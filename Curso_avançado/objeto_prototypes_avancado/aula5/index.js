//Construtora
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //this.nomeCompleto = () => this.nome + "" + this.sobrenome;
}

//Melhoria de Performace
Pessoa.prototype.nomeCompleto = () => {
  return this.nome + " " + this.sobrenome;
};

const p1 = new Pessoa("Thomas", "Erick");
const p2 = new Pessoa("Jaque", "Fernandes");
console.log(p1);
