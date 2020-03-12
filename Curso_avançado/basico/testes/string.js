const name = prompt("Digite o Seu nome");

document.body.innerHTML += `Seu nome é <string>${name}</string> <br/>`;
document.body.innerHTML += `Seu nome tem ${name.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é ${name[1]} <br/>`;
document.body.innerHTML += `Qual o primeiro indice da letra T no seu Nome: ${name.indexof(
  "T"
)} <br/>`;
