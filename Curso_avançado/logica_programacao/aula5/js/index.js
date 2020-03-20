const form = document.querySelector(".form");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector("#peso");
  const inputAltuta = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltuta.value);

  if (!peso) {
    setResult("Peso inválido", false);
    return;
  }
  if (!altura) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu imc é ${imc} (${nivelImc})`;
  setResult(msg, true);
});

function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obsidade grau 1",
    "Obsidade grau 2",
    "Obsidade grau 3"
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function getImc(peso, altura) {
  return (peso / (altura * altura)).toFixed(2);
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createP();

  if (isValid) {
    p.classList.add("result");
  } else {
    p.classList.add("badResult");
  }
  p.innerHTML = `${msg}`;

  result.appendChild(p);
}
