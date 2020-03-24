//IIFE -> Imeddiately invoked function expression

//Executa automaticamente e nao participa do Global
(function() {
  const sobrenome = "Erick";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Thomas"));
  }

  falaNome();
})();

const nome = "Joao";
console.log(nome);

// Executa pelo Global
// function qualquerCoisa() {
//   console.log("Meu Codigo Qualquer saindo do Scopo GLobal");
// }

// qualquerCoisa();
