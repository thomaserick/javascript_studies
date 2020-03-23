//Escopo léxico

const nome = "Thomas";

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = "Jaque";
  falaNome();
}
usaFalaNome();
