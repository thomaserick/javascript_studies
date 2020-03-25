const nomes = ["Eduardo", "Joao", "Joana"];
const nomes2 = [];

const novo1 = nomes.slice(0, -1);
console.log(novo1);

//nomes[2] = "Joao";
console.log(nomes);

//Remove o elemento e não remove os index
//delete nomes[2];
console.log(nomes);
const novo = [...nomes];

//remove ultimo elemento
novo.pop();
//remove do começo
novo.shift();
console.log(nomes);
console.log(novo);

//tamanho de array
console.log(nomes.length);

nomes2.push(nomes[0]);
nomes2.push(nomes[1]);
console.log(nomes);
console.log(nomes2);

//String -> Array
const nomeCompleto = "Thomas Erick Fernandes Mariano Oliveira";
const nomeArray = nomeCompleto.split(" ");
const nomeString = nomeArray.join(" ");
console.log(nomeCompleto);
console.log(nomeArray);
console.log(nomeString);
