(function () {
  "use strict";

  angular.module('tiyzon', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController as main'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminController as admin'
      })
      .when('/admin/new', {
        templateUrl: 'views/newProduct.html',
        controller: 'AdminController as admin'
      })
      .when('/admin/edit/:productId', {
        templateUrl: 'views/editProduct.html',
        controller: 'AdminController as admin'
      })
      .when('/admin/detail/:productId', {
        templateUrl: 'views/productDetail.html',
        controller: 'AdminController as admin'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartController as cart'
      });

  })
  .constant('_', _);
})();
