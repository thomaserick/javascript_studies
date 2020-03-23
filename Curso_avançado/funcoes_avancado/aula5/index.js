//Clouseres -> Habilidade de acessar o escopo Léxico
//Global

function retornaFuncao(nome) {
  return () => {
    return nome;
  };
}

const funcao = retornaFuncao("Thomas");
console.log(funcao());
