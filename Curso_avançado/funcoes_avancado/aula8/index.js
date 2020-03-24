//Factory Functions
//this refere-se a pessoa que esta executando
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //get
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
    },
    fala: function(assunto = "Falando nada") {
      return `${this.nome} esta ${assunto}`;
    },
    altura: altura,
    peso: peso,
    //Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa("Thomas", "Erick", 1.75, 80);
//console.log(p1);
console.log(p1.imc);
p1.nomeCompleto = "Jaqueline Felizardo de Camargo Fernandes";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);

// const p2 = criaPessoa("Jaque", "Fernandes", 1.7, 95);
// console.log(p1, p2);
// console.log(p1.fala("Falando sobre Js"), p2);
