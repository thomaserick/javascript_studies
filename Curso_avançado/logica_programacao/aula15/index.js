const frutas = ["Pera", "Maca", "Uva"];
const pessoa = {
  nome: "Thomas",
  sobrenome: "Oliveira",
  idade: "30"
};

//Array
for (const key in frutas) {
  console.log(frutas[key]);
}

//Objetos
for (const key in pessoa) {
  //chaves
  console.log(key);
}
