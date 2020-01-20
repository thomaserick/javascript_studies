//* 1

// btnElement = document.querySelector("button.botao");

// btnElement.onclick = function() {
//   var linkElement = document.createElement("div");
//   linkElement.setAttribute("class", "box");
//   linkElement.setAttribute("onclick", "alterColor(this)");

//   var containerElement = document.querySelector("#app");
//   containerElement.appendChild(linkElement);
// };

//*2

// function alterColor(element) {
//   var newColor = getRandomColor();

//   element.style.borderColor = newColor;
//   console.log(element);
// }
// //funçao Color Random
// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

//*3

var containerElment = document.querySelector("#app");
var listElement = document.querySelector("#app ul");
var inpuElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var nomes = ["Thomas", "Jaque", "Lucas"];

function renderTodos() {
  listElement.innerHTML = "";

  buttonElement.setAttribute("onclick", "adicionar()");

  containerElment.appendChild(buttonElement);

  for (nome of nomes) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(nome);

    todoElement.appendChild(todoText);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function adicionar() {
  var todoText = inpuElement.value;
  nomes.push(todoText);
  inpuElement.value = "";
  renderTodos();
}
