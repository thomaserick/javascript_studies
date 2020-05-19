//Services
const BillingCycle = require("./billingCycle");
const _ = require("lodash");

BillingCycle.methods(["get", "post", "put", "delete"]);
//Retorna o objeto novo no update
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.after("post", sendErrorsOrNext).after("put", sendErrorsOrNext);

BillingCycle.route("count", function (req, res) {
  //Consulta os registros
  BillingCycle.count(function (error, value) {
    if (error) {
      res.status(500).json({
        errors: [error],
      });
    } else {
      res.json({ value });
    }
  });
});

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;

  if (bundle.errors) {
    let errors = parseError(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
}

function parseError(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, (error) => errors.push(error.message));
}

module.exports = BillingCycle;
