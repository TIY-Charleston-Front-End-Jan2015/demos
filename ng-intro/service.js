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
      }

      return {
        getHeros: getSuperHeros,
        addHero: addSuperHero
      };
    });

})();
