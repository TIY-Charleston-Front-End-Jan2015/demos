(function () {
    "use strict";
    angular.module('ngDirective')
      .directive('sampleDirective', function() {
        return {
          restrict: 'E',
          scope: {
            product: '=',
            action: '&'
          },
          templateUrl: 'core/core.directive.html',
          link: function(scope, element, attrs) {
          
          }
          
        };
    });
    
})();