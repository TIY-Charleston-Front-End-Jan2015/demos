(function () {
    "use strict";
    angular.module('ngDirective')
      .factory('CoreService', function () {
        var monkeys = [
          {
            title: "Monkey One",
            photo: "http://www.amusingtime.com/images/09/cute-baby-orangutan.jpg",
            description: "This is an amazing Monkey",
            price: 25
          },
          {
            title: "Monkey Two",
            photo: "http://2.bp.blogspot.com/-e2o58By0l8A/TnD7MSSOVKI/AAAAAAAAAEY/mqj1-j17fuk/s320/Funny%252BMonkey.jpg",
            description: "This is an amazing Monkey",
            price: 50
          },
          {
            title: "Monkey Three",
            photo: "http://freethoughtblogs.com/pharyngula/files/2012/10/orange-baby-monkey.jpg",
            description: "This is an amazing Monkey",
            price: 100
          },
          {
            title: "Monkey Four",
            photo: "http://www.livescience.com/images/i/000/044/849/i02/snow-monkey-baby-1-120511.jpg?1336767970",
            description: "This is an amazing Monkey",
            price: 125
          },
          {
            title: "Monkey Five",
            photo: "http://www.graphics20.com/wp-content/uploads/2013/06/Funny-Monkeys-16.jpg",
            description: "This is an amazing Monkey",
            price: 150
          }
        ];
      
        var getMonkeys = function () {
          return monkeys;
        };
      
      return {
        getProducts: getMonkeys
      };
        
      });
})();