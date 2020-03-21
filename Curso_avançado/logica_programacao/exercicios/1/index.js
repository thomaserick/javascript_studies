//Escreva uma função que recebe 2 números e retorne o maio deles

//Padrão
function higherNumber(x, y) {
  // if (x > y) return x;
  // return y;
  return x > y ? x : y;
}

//Arrow
const max2 = (x, y) => (x > y ? x : y);

console.log(higherNumber(10, 5));
console.log(max2(10, 5));
