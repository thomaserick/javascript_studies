var listElement = document.querySelector("#app ul");
var inpuElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = ["Fazer Café", "Estudar Js", "Acessar Comunidade"];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    todoElement.appendChild(todoText);

    listElement.appendChild(todoElement);
  }
}
renderTodos();

function addTodo() {
  var todoText = inpuElement.value;
  todos.push(todoText);
  inpuElement.value = "";
  renderTodos();
}

buttonElement.onclick = addTodo;
