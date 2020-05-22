(function () {
  angular
    .module("App")
    .controller("BillingCycleCtrl", [
      "$http",
      "msgs",
      "tabs",
      BillingCycleController,
    ]);

  function BillingCycleController($http, msgs, tabs) {
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
        tabs.show(_self, { tabList: true, tabCreate: true });
      });
    };

    _self.showTabUpdate = function (billingCycle) {
      _self.billingCycle = billingCycle;
      tabs.show(_self, { tabUpdate: true });
    };

    _self.showTabDelete = function (billingCycle) {
      _self.billingCycle = billingCycle;
      tabs.show(_self, { tabDelete: true });
    };

    _self.deleteBillingCycle = function () {
      const deleteUrl = `${url}/${_self.billingCycle._id}`;
      $http
        .delete(deleteUrl, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com Sucesso!");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
    };

    _self.refresh();
  }
})();
