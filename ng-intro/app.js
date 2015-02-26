(function () {
  "use strict";

  angular.module('demoApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/tiy', {
        template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
      })
      .when('/not-found', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/not-found'
      });
  });



})();


// IIFE - Immediately Invoked Function Execution

// (function() {})();
