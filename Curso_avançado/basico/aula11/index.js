/*  Aritméticos */

const num1 = 5;
const num2 = 10;
const potenciacao = 2;
let contador = 1;

//Adição
console.log("Soma: ", num1 + num2);

//Divisão
console.log("Divisão:", num1 / num2);

//Multiplicação
console.log("Multiplicação:", num1 * num2);

//Subtração
console.log("Subtração:", num1 - num2);

//Potenciação
console.log("Potenciação:", num1 ** potenciacao);

//Resto da divisão  = 0 Par
console.log("Resto da divisão:", num2 % num1);

//Operadores de Atribuição
contador *= 2;
console.log(`Atribuição: ${contador}`);

//++Contador
// ++ Incremento
// -- Decremento
console.log("Contador:", ++contador);

//Contador++
console.log("Contador:", contador++);
console.log("Contador:", contador);

//NaN - Not a number
//parseInt (inteiro)
//parseFloat (decimais)
//Number (numero inteiro/flutuante)

const n1 = 10;
const n3 = Number("Thomas");
console.log("NaN:", n3);
const n2 = Number("5");
//const n2 = parseFloat("5.3");
console.log(typeof n2);
console.log(n1 * n2);
