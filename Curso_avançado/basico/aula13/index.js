//Retorna o caracter
//0123456789
let str = "HELLO WORLD";
let res = str.charAt(0);

//Concatenando
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);

//Encontra qual indice está a string
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");

//Encontra ultimo indice que está a string
var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");

//Retorna o tamanho da String
var str = "Hello World!";
var n = str.length;

//Replace a string
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");

//Pesquisa o indice da palavra
var str = "Visit W3Schools!";
var n = str.search("W3Schools");

//Extrai partes da string
var str = "Hello world!";
var res = str.slice(0, 5);

//Extrai parte da string e usa parte negativa -1
var str = "Hello world!";
var res = str.substr(1, 4);

//Remove os espaços
var str = "       Hello World!        ";
alert(str.trim());

//Divide a string em array
var str = "How are you doing today?";
var res = str.split(" ");

//Converte a string em upperCase
var str = "Hello World!";
var res = str.toUpperCase();
