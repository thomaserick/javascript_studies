//defineProperty(apenas uma chave) - defineProperties(é para varias chaves)

function Produto(nome, preco, estoque, quantidaed) {
  //  this.estoque = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra a chave
    value: estoque, //Valor
    writable: false, //Pode alterar valor variavel
    configurable: true //Pode apagar a chave/reconfigurar a chave
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra a chave
      value: nome, //Valor
      writable: true, //Pode alterar valor variavel
      configurable: true //Pode apagar a chave/reconfigurar a chave
    },
    preco: {
      enumerable: true, //mostra a chave
      value: preco, //Valor
      writable: true, //Pode alterar valor variavel
      configurable: true //Pode apagar a chave/reconfigurar a chave
    }
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
console.log(Object.keys(p1));
