(function () {
  angular
    .module("App")
    .controller("BillingCycleCtrl", ["$http", BillingCycleController]);

  function BillingCycleController($http) {
    const _self = this;

    _self.createBillingCycle = function () {
      const url = `http://localhost:3003/api/billingCycles`;
      $http
        .post(url, _self.billingCycle)
        .then(function (res) {
          console.log('Sucesso"');
        })
        .catch(function (res) {
          console.log('Error"');
        });
    };
  }
})();
