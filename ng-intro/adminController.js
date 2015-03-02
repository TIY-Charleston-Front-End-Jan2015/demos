(function () {
  "use strict";
  angular.module('demoApp')
    .controller('AdminController', function (SuperHerosService, $routeParams, $location, $scope) {
        var adminCtrl = this;

        adminCtrl.superheros = SuperHerosService.getHeros();

        adminCtrl.sayHello = function () {
          alert("Hello from adminCtrl");
        };

        adminCtrl.deleteHero = function () {
          SuperHerosService.deleteHero($routeParams.heroIndex);
          $location.path('/');
        }

        adminCtrl.addSuperHero = function (newHero) {
          SuperHerosService.addHero(newHero);
          adminCtrl.newHero = {};
        };

    });

})();
