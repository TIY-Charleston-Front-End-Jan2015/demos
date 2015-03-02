(function () {
  "use strict";
  angular.module('demoApp')
    .factory('SuperHerosService', function () {
      var superHeros = [
        {
          name: "Superman",
          villian: "Lex Luthor"
        },
        {
          name: "Black Widow",
          villian: 'Magneto'
        },
        {
          name: "Batman",
          villian: "Joker"
        },
        {
          name: "Super Woman",
          villian: "Zod"
        }
      ];

      var getSuperHeros = function () {
        return superHeros;
      };
      var addSuperHero = function (hero) {
        superHeros.push(hero);
      };

      var deleteSuperHero = function (index) {
        // var idx = superHeros.indexOf(hero);
        superHeros.splice(index, 1);
        console.log(superHeros);
      };

      var getSingleHero = function (index) {
        return superHeros[index];
      };

      var editHero = function (hero, index) {
        superHeros[index] = hero;
      }

      return {
        getHeros: getSuperHeros,
        addHero: addSuperHero,
        deleteHero: deleteSuperHero,
        getHero: getSingleHero,
        editHero: editHero
      };
    });

})();
