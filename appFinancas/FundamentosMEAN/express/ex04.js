const express = require("express");
const server = express();

server
  .route("/clientes")
  .get((req, res) => {
    res.send("lista de Cliente");
  })
  .post((req, res) => {
    res.send("Novo Cliente");
  })
  .put((req, res) => {
    res.send("Alterar Cliente");
  })
  .delete((req, res) => {
    res.send("Remove Cliente");
  });

server.listen(3000, () => {
  console.log(`Executando...`);
});
