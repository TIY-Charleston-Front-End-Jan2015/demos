var BookModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/bb-subviews',
  defaults: function () {
    return {
      photo: 'http://fc09.deviantart.net/fs70/f/2011/321/a/2/old_book_cover_1_by_foxinshadow-d4ghgle.png'
    };
  },
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
