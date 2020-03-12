function meuEscopo() {
  const FORM = document.querySelector(".form");
  const RESULTADO = document.querySelector(".resultado");

  const PESSOAS = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();
    let nome = FORM.querySelector(".nome");
    let sobrenome = FORM.querySelector(".sobrenome");
    let peso = FORM.querySelector(".peso");
    let altura = FORM.querySelector(".altura");

    PESSOAS.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(PESSOAS);
    RESULTADO.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} Kg ${altura.value} M</p>`;
  }

  FORM.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
