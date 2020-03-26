//Gettes/Settrs

function Produto(nome, preco, estoque, quantidade) {
  //  this.estoque = estoque;
  this.nome = nome;
  this.preco = preco;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    configurable: true, //Pode apagar a chave/reconfigurar a chave
    get: function() {
      return estoque;
    },
    set: function(value) {
      estoque = value;
    }
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 200;
console.log(p1);
console.log(Object.keys(p1));
