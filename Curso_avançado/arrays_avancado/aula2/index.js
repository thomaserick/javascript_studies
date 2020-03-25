//                -3      -2      -1
//                 0       1       2
const nomes = ["Thomas", "Joao", "Pedro"];

//1-Indice que quero mexer
//2-delete
//3-elemento para adicionar
//nomes.splice(indice,delete,el1,el2,el3)

const removidos = nomes.splice(1, 2);
console.log(nomes, removidos);
