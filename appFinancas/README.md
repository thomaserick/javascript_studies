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
- db.billingCycles.find()
  - Localiza os registros dentro da collections
- db.billingCycles.find.pretty()
  - Mostra de forma mais legivel
- db.billingCycles.findOne()
  - Mostra o primeiro registro
- db.billingCycles.findOne({month:2})
  - Mostrando o registro passando filtro
- db.billingCycles.find({\$or:[{month:1},{monsth:2}]})
  - Monstra os registros OU sobre dois critérios
- db.billingCycles.find({credits:{\$exists:true}}).pretty()
  - Apenas os registros que possui o atributo credits
- db.billingCycles.find({year:2017}).skip(1).pretty()
  - Pula o primeiro registro
- db.billingCycles.find({year:2017}).skip(1).limit(1)
  - Pula o primeiro registro e traz apenas o primeiro elemento
  - Fazer paginação
