(function () {
  angular
    .module("App")
    .controller("BillingCycleCtrl", ["$http", "msgs", BillingCycleController]);

  function BillingCycleController($http, msgs) {
    const _self = this;

    _self.createBillingCycle = function () {
      const url = `http://localhost:3003/api/billingCycles`;
      $http
        .post(url, _self.billingCycle)
        .then(function (response) {
          _self.billingCycle = {};
          msgs.addSuccess("Operação realizada com sucesso");
        })
        .catch(function (resp) {
          console.log(resp);
          msgs.addError(resp.data.errors);
        });
    };
  }
})();
