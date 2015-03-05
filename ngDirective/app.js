(function () {
    "use strict";
    angular.module('ngDirective', [
      'ngRoute'
    ])
      .config(function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: 'core/core.view.html',
              controller: 'CoreController as coreCtrl'
            });
      });
    
})();