process.stdout.write("Está Feliz?");
process.stdin.on("data", (data) => {
  process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado \n`);
  process.exit();
});
