(function () {
  "use strict";
  angular.module('demoApp')
    .controller('MainController', function (SuperHerosService, $scope, $routeParams,  $location) {
        var mainCtrl = this;

        mainCtrl.today = Date.now();

        mainCtrl.superheros = SuperHerosService.getHeros();

        mainCtrl.singleItem = SuperHerosService.getHero($routeParams.heroIndex);
        mainCtrl.go = function (index) {
          $location.path('/detail/' + index);
        }
       console.log("single item index is: ", mainCtrl.singleItem);

        mainCtrl.alertMe = function () {
          alert("Hi from mainCtrl");
        };

        mainCtrl.addSuperHero = function (addHero) {
          var newHero = angular.copy(addHero);
          SuperHerosService.addHero(newHero);
          mainCtrl.newHero = {};
        };

        mainCtrl.deleteItem = function (index) {
          SuperHerosService.deleteHero(index);
        };

        mainCtrl.editItem = function (hero) {
          SuperHerosService.editHero(hero, $routeParams.heroIndex);
          $location.path('/detail/' + $routeParams.heroIndex);
        };

        mainCtrl.login = function (username) {
          if(username === "calvin") {
            $location.path('/tiy');
          }
        };

    });

})();
