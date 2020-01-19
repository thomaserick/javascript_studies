// function mostraAlert() {
//   alert("Botão Clicado");
// }

//var inputElement = document.getElementById("name");
//var inputElement = document.getElementsByTagName("input");
//var inputElement = document.getElementsByClassName("name");
//console.log(inputElement);

// var inputElement = document.querySelector("input[name=name]");
// var btnElement = document.querySelector("button.botao");

// btnElement.onclick = function() {
//   var text = inputElement.value;
//   alert(text);
// };

//*Adiciona um Link

var linkElement = document.createElement("a");
linkElement.setAttribute("href", "http://www.google.com.br");
linkElement.setAttribute("title", "Site da Google");
var textElement = document.createTextNode("Acessar site Google");
linkElement.appendChild(textElement);
var containerElement = document.querySelector("#app");
containerElement.appendChild(linkElement);

var inputElement = document.querySelector("#name");
containerElement.removeChild(inputElement);
