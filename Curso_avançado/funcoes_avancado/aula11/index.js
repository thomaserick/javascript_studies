//Função Recursiva
//Quando ela se chama novamente

function recursiva(max) {
  if (max >= 14000) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
