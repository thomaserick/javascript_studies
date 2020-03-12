const alunos = ["Luiz", "Thomas", "Joao"];

console.log(alunos);

//Adiciona no final o elemento
alunos.push("Jaque");
console.log(alunos);
//Adiciona no Inicio o elemento
alunos.unshift("Pedro");

console.log(alunos);

//Remove do final
const removido = alunos.pop();

console.log(alunos);
console.log(removido);

//Remove do inicial
const removido2 = alunos.shift();
console.log(removido2);

console.log(alunos.length);
