//Função construtura    -> Objetos
//Funcção Fabrica -> factori -> Objetos  -> criaPessoa
//Construtura -> Letras maiuscula  -> Pessoa

function Pessoa(nome, sobrenome) {
  //Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log("Sou um método");
  };
}

const p1 = new Pessoa("Thomas", "Erick");
p1.metodo();
const p2 = new Pessoa("Jaque", "Fernanddes");
console.log(p1);
console.log(typeof p1);
