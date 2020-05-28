(function () {
  angular
    .module("App")
    .controller("AuthCtrl", ["$location", "msgs", AuthController]);

  function AuthController($location, msgs) {
    const _self = this;

    _self.getUser = () => ({
      name: "Thomas Erick Mock",
      email: "thominhaserick@gmail.com",
    });

    _self.logout = () => {
      console.log("Logout...");
    };
  }
})();
