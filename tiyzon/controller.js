(function () {
  "use strict";
  angular.module('tiyzon')
    .controller('MainController', function (ProductService) {
      var main = this;
      ProductService.getProducts().success(function(data) {
        main.products = data;
      });

      console.log(main.products);
    })
    .controller('AdminController', function (ProductService, $location, $routeParams, _, $rootScope) {

      var admin = this;

      ProductService.getProducts().success(function(data) {
        admin.products = data;
      });
      ProductService.getSingleProduct($routeParams.productId).success(function(data) {
        admin.singleProduct = data;
      });

      admin.currentIndex = $routeParams.productId;
      // admin.productsCheap = _.pluck(ProductService.getProducts(), 'price').reduce(function (memo, num) {
      //   return memo + num;
      // });
      // console.log(admin.productsCheap);
      admin.addProduct = function (newProduct) {
        newProduct.price = parseInt(newProduct.price);
        ProductService.createProduct(newProduct);
        $location.path('/admin');
      };

      admin.deleteProduct = function (id) {
        ProductService.deleteProduct(id);
      };

      admin.updateProduct = function (product) {
        ProductService.updateProduct(product, $routeParams.productId);
        $location.path('/admin');
      };

      // $rootScope.$on('product:deleted', function() {
      //   console.log('triggered delete');
      //   ProductService.getProducts().success(function(data) {
      //   admin.products = data;
      //   });
      // })


    })
    .controller('CartController', function (CartService) {
      var cart = this;

      cart.items = CartService.getCart();
      cart.total = 0;

      cart.addItem = function (item) {
        CartService.addToCart(item);
      };

      cart.removeItem = function (item) {
        CartService.removeFromCart(item);
      }

      cart.updateTotal = function () {
        cart.total = CartService.calculateTotal();
        return cart.total;
      };



    });
})();
