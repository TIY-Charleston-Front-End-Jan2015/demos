// Post Model

var PostModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-views',
  idAttribute: '_id',
  defaults: function () {
    return {
      author: 'Calvin'
    };
  },
  initialize: function () {
    console.log("model was created");
  }
});
