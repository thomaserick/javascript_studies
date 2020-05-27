const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user");
const env = require("../../.env");

//String @ string
const emailRegex = /\S+@\S+\.\S+/;

//Entre 6 e 12 caracteres
//Precisa Digito, letra minuscula,Letra maiuscula
//Caracter especial
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,12})/;

//Erros do banco de dados
//Método genérico vem do MongoDb
const sendErrorsFromDB = (res, dbErros) => {
  const errors = [];
  _.forIn(dbErros.errors, error.push(error.message));
  return res.status(400).json({ errors });
};

//Login
const login = (req, res) => {
  const email = req.body.email || "";
  const password = req.body.password || "";

  User.findOne({ email }, (err, user) => {
    if (err) {
      return sendErrorsFromDB(res, err);
    } else if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(user, env.authSecret, {
        expiresIn: "1 day",
      });
      const { name, email } = user;
      res.json({ name, email, token });
    } else {
      return res.status(400).send({ errors: ["Usuário/Senha inválidos"] });
    }
  });
};

//Validar Token
const validateToken = (req, res) => {
  const token = req.body.token | "";
  jwt.verify(token, env.compareSync, function (err, decoded) {
    return res.status(200).send({ valid: !err });
  });
};

const signup = (req, res) => {
  const name = req.body.name || "";
  const email = req.body.email || "";
  const password = req.body || "";
  const confirmPassword = req.body.confirm_password || "";

  if (!email.match(emailRegex)) {
    return res
      .status(400)
      .send({ errors: ["O e-mail informado está inválido"] });
  }

  if (!password.match(passwordRegex)) {
    return res.status(400).send({
      errors: [
        "Senha precisa ter: Uma letra maiúscula,um número, um caracter especia(@#$) e tamnho entre 6-12",
      ],
    });
  }

  //Verifica hash de senha
  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);
  if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
    return res.status(400).send({ errors: ["Senhas não conferem."] });
  }

  //consulta se ja existe o usuário
  User.findOne({ email }, (err, user) => {
    if (err) {
      //Erros de banco de dados
      return sendErrorsFromDB(res, err);
    } else if (user) {
      return res.status(400).send({ errors: ["Usuário já cadastrado!"] });
    } else {
      const newUser = new User({ email, name, password: passwordHash });
      newUser.save((err) => {
        if (err) {
          return sendErrorsFromDB(res, err);
        } else {
          login(req, res, next);
        }
      });
    }
  });
};

module.exports = { login, signup, validateToken };
