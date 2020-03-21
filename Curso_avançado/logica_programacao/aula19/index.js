const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let numero of numeros) {
  if (numero === 5) {
    continue;
  }

  if (numero === 8) {
    break;
  }
  console.log(numero);
}
