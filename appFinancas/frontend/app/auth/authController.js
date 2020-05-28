(function () {
  angular
    .module("App")
    .controller("AuthCtrl", ["$location", "msgs", AuthController]);

  function AuthController($location, msgs) {
    const _self = this;
    _self.loginMode = true;

    _self.changeMode = () => (_self.loginMode = !_self.loginMode);

    _self.login = () => {
      console.log(`Login.... ${_self.user.email}`);
    };

    _self.signup = () => {
      console.log(`Signup... ${_self.user.email}`);
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
