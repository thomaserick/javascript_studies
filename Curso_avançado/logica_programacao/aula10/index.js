let nome = "Thomas";
let nome2 = "Thomas";
const verdadeira = true;

//Let nao pode ser redeclarada
//let nome = "thomas";

//Let tem escopo de bloco{... bloco}
//Var so tem escopo de função

if (verdadeira) {
  let nome = "Joao";
  console.log(nome, nome2);

  //bloco alinhado
  if (verdadeira) {
    let nome = "Outra Nome";
    console.log(nome);
  }
}
