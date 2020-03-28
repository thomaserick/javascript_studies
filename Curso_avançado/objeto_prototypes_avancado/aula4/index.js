//Object.value
//Objetct.Keys
//Object.entries

//Object.assign(des,any)
//Object.getOwnPropertyDescriptor(o,'prop')
//..(spred)

const produto = {
  nome: "Caneca",
  preco: "2.0"
};

//Retorna as propriedades writable,configurable,enumerable
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

//Retorna chave e valores em Array
console.log(Object.entries(produto));
//Ler apenas os valores do Objeto
console.log(Object.values(produto));
//Ler apenas as chaves do objetos
console.log(Object.keys(produto));

//Aponta o mesmo valor na Memória
//Copiando via spread
//const outraCoisa = { ...produto, material: "porcelana" };

//Copiando via object.assign{}
const outraCoisa = Object.assign({}, produto);
outraCoisa.nome = "Thomas";
outraCoisa.preco = 3.0;

console.log(outraCoisa);
console.log(produto);
