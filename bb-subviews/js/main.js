var App = {};
$(function () {
  var layoutView = new LayoutView();
  App.router = new AppRouter({layout: layoutView});
  Backbone.history.start();
});
