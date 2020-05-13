# App Finanças

### Tecnologias Utilizadas para desenvolvimento

- MongoDB
- Express
- AngularJs
- NodeJs

### MongoDB NoSQL

- Orientado a Documento
- Usa Json
- Tabelas -> Collections
- Registros/Tuplas -> Documentos (objetos Json)

* Instalação

  - colocar no path o caminho do Mongo
  - C:\Program Files\MongoDB\Server\3.4\bin
  - Testar o comando -> cmd -> mongod

* Comandos

- show dbs
  - Mostra quantas base
- use db_finance
  - Troca o banco de dados
- db.createCollection('billingCycles')
  - Cria Collection
- db.billingCycles.drop()
  - Remove Collection
- db.billingCycles.insert({})
  - Inseri registro
- db.billingCycles.save({})
  - Salva/atualiza registro
