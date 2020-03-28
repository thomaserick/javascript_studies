// Manipulando Prototypes
// const objA = {
//   chaveA: "A"
//   __proto__:Object.prototype
// };

// const objB = {
//   chaveB: "B"
// };

// const objC = new Object();
// objC.chaveC = "C";

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);

//Performatico criar metodos fora da Construtora
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};
const p1 = new Produto("Camiseta", 50);

//Literal
const p2 = { nome: "Caneca", preco: 20 };
//Adicionando o prototype (metodo desconto/aumento)
Object.setPrototypeOf(p2, Produto.prototype);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  }
});

p3.aumento(100);

console.log(p1);
console.log(p2);
