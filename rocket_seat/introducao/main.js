//* Variaveis
// var nome = "Thomas";
// var idade = 30;
// var pedo = 80;
// var humano = true;
// var alunos = ["Jaque", "Thomas", "Lucas"];

// var pessoa = {
//   nome: "Thomas",
//   idade: 30,
//   peso: 80,
//   humano: true
// };

// console.log(pessoa.nome);
// console.log(alunos[1]);

//*operações Matemáticas

// var x = 10,
//   y = 5;

// var sub = x + y;
// var mult = x * y;
// var div = x / y;
// var mod = x % y;

// x *= y;
// x = x + 3; //x +=3;

// console.log(x);

//*Funçoes

// function soma(n1, n2) {
//   var result = n1 + n2;

//   return result;
// }

// var result = soma(1, 4);

// console.log(result);

//*Condicionais

// function retornaSexo(sexo) {
//M,F
//Masculino|| Feminono
//==  Valores iguais
//=== Valores iguais e Tipos
//   if (sexo === "M") {
//     return "Masculino";
//   } else if (sexo == "F") {
//     return "Feminino";
//   } else {
//     return "Outro";
//   }
//   switch (sexo) {
//     case "M":
//       return "Masculino";
//     case "F":
//       return "Feminino";
//     default:
//       return "Outro";
//   }
// }
// console.log(retornaSexo("a"));

//*Operadores Lógicos

//AND,OR,NOT

// var sexo = "M",
//   idade = 23;

// if (sexo === "M" && idade >= 18) {
//   console.log("OK");
// }

// if (sexo === "M" || idade >= 18) {
//   console.log("OK");
// }

// if (sexo !== "M") {
//   console.log("OK");
// } else {
//   console.log("NOT");
// }

// var masculino = "M";
// if (sexo === "F") {
//   var masculino = true;
// } else {
//   var masculino = false;
// }
// console.log(masculino);

// var masculino = sexo === "M";
// console.log(masculino);

//*Condição ternária
// var sexo = "M";

// var result = sexo === "M" ? "Masculino" : "Feminono";

// console.log(result);

//*Estruturas de Repetição

for (var i = 0; i <= 100; i++) {
  console.log(i);
}

var j = 0;
while (j <= 100) {
  console.log(j);
  j++;
}

//*intervalo e timeout
