//String

// var nome = "Thomas Erick";
// var n1 = 30;
// var n2 = 20;
// var frase = "Japão é o maior país do mundo";
//alert(nome + "tem: " + n1 + " anos");
//alert(n1 + n2);
// console.log(nome);
// console.log(n1 + n2);
// console.log(frase.toUpperCase());
// console.log(frase.toLowerCase());
// console.log(frase.replace("Japão", "Brasil"));

//* Array

// var lista = ["maça", "banana", "laranja"];
// lista.push("pera");
// lista.pop();

// console.log(lista);
// console.log(lista.reverse());

// console.log(lista[0]);

// console.log(lista.toString()[0]);
// console.log(lista.join(" | "));

//*Dicionário

// var fruta = { nome: "maça", cor: "vermelha" };
// console.log(fruta);
// console.log(fruta.nome);

//*Lista de Dicionários

// var frutas = [
//   { nome: "maça", cor: "vermelha" },
//   { nome: "banana", cor: "amarela" }
// ];
// console.log(frutas);

//*Accept
// var idade = prompt("Qual sua idade?");
// if (idade >= 18) {
//   alert("Maior de idade");
// } else {
//   alert("Menor de idade");
// }

//* Repetições

// var count = 0;
// while (count <= 5) {
//   console.log(count);
//   //count = count + 1;
//   count++;
// }

// for (i = 0; i <= 5; i++) {
//   console.log(i);
// }

//*Date
// var d = new Date();
// //alert(d);
// console.log("Mês: " + d.getMonth() + 1);
// console.log("Minuto: " + d.getMinutes());
// console.log("Dia: " + d.getDay());

//*Function

function soma(n1, n2) {
  return n1 + n2;
}
function sub(n1, n2) {
  return n1 - n2;
}
function setReplace(frase, nome, novo_nome) {
  return frase.replace(nome, novo_nome);
}

function validaIdade(idade) {
  var validar;

  if (idade >= 18) {
    validar = true;
  } else {
    validar = false;
  }

  return validar;
}

console.log("Soma: " + soma(1, 5));
console.log("Sub: " + sub(1, 5));
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

var idade = prompt("Qual sua Idade?");
console.log(validaIdade(idade));
