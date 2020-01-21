// class List {
//   constructor() {
//     this.data = [];
//   }

//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }

// class TodoList extends List {
//   constructor() {
//     super();
//     this.usuario = "Thomas";
//   }

//   mostraUsuario() {
//     console.log(this.usuario);
//   }
// }

// const MinhaLista = new TodoList();

// document.getElementById("newtodo").onclick = function() {
//   MinhaLista.add("Novo Todo");
// };

// MinhaLista.mostraUsuario();

//Não funciona por ser statico
// class TodosList {
// constructor() {
//     this.todos = [];
// }

//   static addTodo() {
//     this.todos.push("Novo Todo");
//     console.log(this.todos);
//   }
// }
// TodosList.addTodo();

// Funciona pois nao precisa de informção do restante da classe;
// class Matematic {
// static soma(a, b) {
//     return a + b;
// }
// }
// console.log(Matematic.soma(2, 5));

//Const e Let

const t = 30;

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4;
  }
  console.log(x, y);
}

teste();
