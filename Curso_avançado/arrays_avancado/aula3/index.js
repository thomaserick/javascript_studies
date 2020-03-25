//Concatenando Arrays

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];
//const a3 = a1.concat(a2);
//String
//const a3 = a1 + a2;
const a3 = [...a1, "Thomas", ...a2, ...[6, 7, 8]];
console.log(a3);
