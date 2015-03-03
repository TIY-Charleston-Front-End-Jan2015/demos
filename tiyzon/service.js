(function () {
  "use strict";
  angular.module('tiyzon')
    .factory('ProductService', function ($http, $rootScope) {

      var url = 'http://tiy-fee-rest.herokuapp.com/collections/ng-server';


      var getProducts = function () {
        
        return $http.get(url);

      };

      var deleteProduct = function (id) {
        $http.delete(url + '/' + id);

        $rootScope.$broadcast('product:deleted');
        // products.splice(index, 1);
      };

      var updateProduct = function (product, id) {
        $http.put(url + '/' + id, product);
        $rootScope.$broadcast('product:updated');
      };

      var createProduct = function (product) {
        $http.post(url, product);
        $rootScope.$broadcast('product:created');
        // products.push(product);
      };

      var getSingleProduct = function (id) {
        return $http.get(url + '/' + id);
      }

      return {
        getProducts: getProducts,
        deleteProduct: deleteProduct,
        updateProduct: updateProduct,
        createProduct: createProduct,
        getSingleProduct: getSingleProduct
      };

    })
    .factory('CartService', function (_) {
      var cart = [];

      var addToCart = function (item) {
        cart.push(item);
      };

      var removeFromCart = function (item) {
        var index = cart.indexOf(item);
        cart.splice(index, 1);
      };

      var getCart = function () {
        return cart;
      };

      var updateQuantity = function () {

      };

      var calculateTotal = function () {

        if(!cart.length) return 0;

        return _.pluck(cart, 'price').reduce(function (memo, num) {
           return memo + num;
         });

      };


        return {
          getCart: getCart,
          addToCart: addToCart,
          removeFromCart: removeFromCart,
          calculateTotal: calculateTotal
        };
    });
})();
