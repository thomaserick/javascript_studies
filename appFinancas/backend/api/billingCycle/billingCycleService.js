//Services
const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);
//Retorna o objeto novo no update
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;
