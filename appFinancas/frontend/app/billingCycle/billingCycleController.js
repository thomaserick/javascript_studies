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
        _self.billingCycle = { credits: [{}], debts: [{}] };
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

    _self.updateBillingCycle = function () {
      const updateUrl = `${url}/${_self.billingCycle._id}`;
      $http
        .put(updateUrl, _self.billingCycle)
        .then(function (response) {
          _self.refresh();
          msgs.addSuccess("Operação realizada com Sucesso!");
        })
        .catch(function (resp) {
          msgs.addError(resp.data.errors);
        });
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

    //--Credits

    //Incluir
    _self.addCredit = (index) => {
      _self.billingCycle.credits.splice(index + 1, 0, {});
    };

    //Copiar
    _self.cloneCredit = (index, { name, value }) => {
      _self.billingCycle.credits.splice(index + 1, 0, { name, value });
    };
    //Delete
    _self.deleteCredit = (index) => {
      if (_self.billingCycle.credits.length > 1) {
        _self.billingCycle.credits.splice(index, 1);
      }
    };

    //--Debts

    //Incluir
    _self.addDebt = (index) => {
      _self.billingCycle.debts.splice(index + 1, 0, {});
    };

    //Copiar
    _self.cloneDebt = (index, { name, value, status }) => {
      _self.billingCycle.debts.splice(index + 1, 0, { name, value, status });
    };
    //Delete
    _self.deleteDebt = (index) => {
      if (_self.billingCycle.debts.length > 1) {
        _self.billingCycle.debts.splice(index, 1);
      }
    };

    _self.refresh();
  }
})();
