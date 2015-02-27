(function () {
  "use strict";
  angular.module('demoApp')
    .controller('MainController', function (SuperHerosService) {
        var mainCtrl = this;

        mainCtrl.newHero = {};

        mainCtrl.superheros = SuperHerosService.getHeros();

        mainCtrl.alertMe = function () {
          alert("Hi from mainCtrl");
        };

        mainCtrl.addSuperHero = function (newHero) {
          SuperHerosService.addHero(newHero);
          mainCtrl.newHero = {};
        };

    });

})();
