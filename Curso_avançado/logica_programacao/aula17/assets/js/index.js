const paragrafos = document.querySelector(".paragrafos");
const paragrafosAll = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const bgBody = estilosBody.backgroundColor;
console.log(paragrafosAll);

for (const key of paragrafosAll) {
  console.log(key);
  key.style.backgroundColor = bgBody;
  key.style.color = "#FFFFFF";
}
