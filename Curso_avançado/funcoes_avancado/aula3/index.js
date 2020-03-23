//return
//Retorna um valor
//Termina a funçãp

function soma(a, b) {
  return a + b;
}

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

//Recebe a funçao (falaResto)
const fala = falaFrase("Ola");
//retorna a função
console.log(fala);
//Executa a função
const resto = fala("mundo!");
console.log(resto);
