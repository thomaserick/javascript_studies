//Services
const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);
//Retorna o objeto novo no update
BillingCycle.updateOptions({ new: true, runValidators: true });

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

module.exports = BillingCycle;
