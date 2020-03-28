//Herença
//Produto
//Camiseta = Cor,Caneca = material
//Aumento,desconto

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.Aumento = function(quantia) {
  this.preco += this.quantia;
};

Produto.prototype.Desconto = function(quantia) {
  this.preco -= this.quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

const p1 = new Produto("Gen", 11);
//o Prototype da Camiseta vai ser o mesmo do Produto
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("regata", 8.0, "Preta");

console.log(p1);
console.log(camiseta);
