(function () {
  "use strict";
  angular.module('demoApp')
    .controller('MainController', function (SuperHerosService, $scope) {
        var mainCtrl = this;

        mainCtrl.superheros = SuperHerosService.getHeros();

        mainCtrl.alertMe = function () {
          alert("Hi from mainCtrl");
        };

        mainCtrl.addSuperHero = function (newHero) {
          SuperHerosService.addHero(newHero);
          $scope.newHero = {};
        };

    });

})();
