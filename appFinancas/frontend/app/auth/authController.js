(function () {
  angular
    .module("App")
    .controller("AuthCtrl", ["$location", "msgs", "auth", AuthController]);

  function AuthController($location, msgs, auth) {
    const _self = this;
    _self.loginMode = true;

    _self.changeMode = () => (_self.loginMode = !_self.loginMode);

    _self.login = () => {
      auth.login(_self.user, (err) =>
        err ? msgs.addError(err) : msgs.addSuccess("Sucesso!")
      );
    };

    _self.signup = () => {
      auth.signup(_self.user, (err) =>
        err ? msgs.addError(err) : msgs.addSuccess("Sucesso!")
      );
    };

    _self.getUser = () => ({
      name: "Thomas Erick Mock",
      email: "thominhaserick@gmail.com",
    });

    _self.logout = () => {
      console.log("Logout...");
    };
  }
})();
