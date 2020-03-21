//For OF
const nome = ["Thomas Erick", "jaque", "Thaila"];
const frutas = ["Pera", "Maca", "Uva"];
const pessoa = {
  nome: "Thomas",
  sobrenome: "Oliveira",
  idade: "30"
};

//For classico -> Array/Strings Iteráveis
for (let index = 0; index < nome.length; index++) {
  console.log(nome[index]);
}
console.log("-------------------------");

//For IN -> Retorna index Strings/Array/Objetos
for (const key in nome) {
  console.log(nome[key]);
}
console.log("-------------------------");

//For OF -> Retorna Valor -> Iteráveis
for (const iterator of nome) {
  console.log(iterator);
}
console.log("-------------------------");
//ForEach -> Normal
nome.forEach(function(element, index) {
  console.log(element);
  console.log(index);
});
console.log("-------------------------");
//ForEach -> ArrowFuction
nome.forEach(element => {
  console.log(element);
});
