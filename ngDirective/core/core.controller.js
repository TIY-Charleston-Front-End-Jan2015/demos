(function () {
    "use strict";
    angular.module('ngDirective')
      .controller('CoreController', function (CoreService) {
        this.sampleText = "Hello world!"
        this.products = CoreService.getProducts();
        this.doSomething = function (msg) {
          alert(msg);
        };
      });
})();