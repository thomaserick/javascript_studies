const inputTarefa = document.querySelector(".input-new-tarefa");
const btnTarefa = document.querySelector(".btnTarefa");
const listTarefa = document.querySelector(".list-tarefa");

inputTarefa.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    addTarefa(inputTarefa.value);
  }
});

function clearInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function addLi() {
  return (li = document.createElement("li"));
}

function addBtnRemove(li) {
  li.innerText += " ";
  const btnRemove = document.createElement("button");
  btnRemove.innerText = "Remove";
  btnRemove.setAttribute("class", "remove");
  btnRemove.setAttribute("title", "Apagar essa tarefa.");
  li.appendChild(btnRemove);
}

function addTarefa(valueTarefa) {
  if (!valueTarefa) return;
  const li = addLi();
  li.innerText = valueTarefa;
  listTarefa.appendChild(li);
  addBtnRemove(li);
  clearInput();
  saveTarefas();
}

document.addEventListener("click", e => {
  let el = e.target;

  if (el.classList.contains("remove")) {
    el.parentElement.remove();
    saveTarefas();
  }
});

btnTarefa.addEventListener("click", function(event) {
  addTarefa(inputTarefa.value);
});

function saveTarefas() {
  const liTarefas = listTarefa.querySelectorAll("li");
  const ListaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace("Remove", "").trim();
    ListaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(ListaDeTarefas);
  localStorage.setItem("tarefas", tarefasJSON);
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas");
  const ListaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of ListaDeTarefas) {
    addTarefa(tarefa);
  }
}

addTarefasSalvas();
