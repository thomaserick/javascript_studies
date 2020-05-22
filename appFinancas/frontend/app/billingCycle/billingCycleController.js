(function () {
  angular
    .module("App")
    .controller("BillingCycleCtrl", ["$http", "msgs", BillingCycleController]);

  function BillingCycleController($http, msgs) {
    const _self = this;
    const url = `http://localhost:3003/api/billingCycles`;

    _self.createBillingCycle = function () {
      $http
        .post(url, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com sucesso");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    _self.refresh = function () {
      $http.get(url).then(function (response) {
        _self.billingCycle = {};
        _self.billingCycles = response.data;
      });
    };

    _self.refresh();
  }
})();
