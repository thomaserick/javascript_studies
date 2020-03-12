//Função
//b assume o valor
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2));

//Arrow function
const raiz = (a, b = 0) => a + b;
console.log(raiz(2));
