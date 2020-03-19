/*
Operadores de comparação

*/

//> maior que
const a = 10 > 5;
console.log(a);

//>= maio igual a que
const b = 10 >= 5;
console.log(b);
//<= menor que ou igual
const c = 10 <= 5;
console.log(c);
//== igualdade(valor)
const d = 10 == 10;
console.log(d);
//=== igualdade estrita(valor e tipo)
const e = 10 === 5;
console.log(e);
//!= diferente (valor)
let x = 10;
let y = "10";
const f = (x = !y);
console.log(f);
//!== diferente estrita (valor e tipo)
let x2 = 10;
let y2 = "10";
const f2 = x == !y;
console.log(f);
