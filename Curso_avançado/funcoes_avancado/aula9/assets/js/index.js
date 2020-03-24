//Exercício Calculadora
//Criar uma Factory Function -> Treinar
function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    //Metodos Abaixos
    inicia: function() {
      this.clickBtn();
      this.pressEnter();
    },
    pressEnter() {
      this.display.addEventListener("keyup", e => {
        console.log(e);
        if (e.keyCode === 13) {
          this.result();
        }
      });
    },
    result() {
      let conta = this.display.value;
      try {
        conta = eval(conta);
        if (!conta) {
          alert("Conta Inválida");
          return;
        }
        this.display.value = String(conta);
      } catch (error) {
        alert("Conta Inválida");
        return;
      }
    },
    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    clearDisplay() {
      this.display.value = "";
    },
    clickBtn() {
      //this -> calculadora
      //Quando usa Arrow function o This prevalece o chamado ->Calculadora
      document.addEventListener("click", e => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }
        if (el.classList.contains("btn-eq")) {
          this.result();
        }
      });
    },
    btnParaDisplay(value) {
      this.display.value += value;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
