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
      .when('/detail/:heroIndex', {
        templateUrl: 'views/detail.html',
        controller: 'MainController as mainCtrl'
      } )
      .when('/edit/:heroIndex', {
        templateUrl: 'views/editDetail.html',
        controller: 'MainController as mainCtrl'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as adminCtrl'
      })
      .when('/tiy', {
        template: '<h1>{{hello}}</h1><input type="text" ng-model="hello">'
      })
      .when('/not-found', {
        templateUrl: 'views/404.html'
      })
      .when('/something/:yo/:how/:are/:you', {
        template: '<h1>yo</h1>',
        controller: 'MainController as mainCtrl'
      })
      // .otherwise({
      //   redirectTo: '/not-found'
      // });
  });



})();


// IIFE - Immediately Invoked Function Execution

// (function() {})();
