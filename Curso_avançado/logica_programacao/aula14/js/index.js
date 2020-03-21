const element = [
  {
    tag: "p",
    texto: "Frase1"
  },
  {
    tag: "div",
    texto: "Frase2"
  },
  {
    tag: "footer",
    texto: "Frase3"
  },
  {
    tag: "secttio",
    texto: "Frase4"
  }
];

const container = document.querySelector(".container");

const div = document.createElement("div");

for (let index = 0; index < element.length; index++) {
  let { tag, texto } = element[index];
  let elementTag = document.createElement(tag);
  //elementTag.innerHTML = texto;
  elementTag.innerText = texto;
  div.appendChild(elementTag);
}
container.appendChild(div);
