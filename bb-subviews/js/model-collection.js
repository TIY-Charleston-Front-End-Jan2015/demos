var BookModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-subviews',
  initialize: function () {
    console.log('book model created');
  }
});

var BookCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/bb-subviews',
  model: BookModel,
  initialize: function () {
    console.log('book collection created');
  }
});
