/* If,else if,else 

Entre 0 - 11 = Bom dia
entre 12 - 17 - Boa Tarde
entre 18 - 23 - Boa noite

*/

const hora = 10;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa Tarde");
} else {
  console.log("Boa Noite");
}
