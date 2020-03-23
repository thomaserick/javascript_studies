//Declaracao de função (Function hoisting) -> Eleva as declarações no topo as VAR

falaOi();

function falaOi() {
  console.log("Oie");
}

// Fist-class object (objetos de primeira Classe)
//Function expression
//pode ser tratada como dado

const souUmDado = () => {
  console.log("Sou um dado");
};

souUmDado();

// Arrow Function
const arrow = () => {
  console.log("Sou uma arrow function");
};

arrow();

//Dentro de um Objeto
const obj = {
  falar: function() {
    console.log("Doidera");
  }
};

obj.falar();
