//conexao banco de dados -> NoSQL mapeado a documentos
const mongoose = require("mongoose");
module.exports = mongoose.connect("mongodb://localhost/db_finance");
