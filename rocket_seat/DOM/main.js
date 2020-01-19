// function mostraAlert() {
//   alert("Botão Clicado");
// }

//var inputElement = document.getElementById("name");
//var inputElement = document.getElementsByTagName("input");
//var inputElement = document.getElementsByClassName("name");
//console.log(inputElement);

var inputElement = document.querySelector("input[name=name]");
var btnElement = document.querySelector("button.botao");

btnElement.onclick = function() {
  var text = inputElement.value;
  alert(text);
};
