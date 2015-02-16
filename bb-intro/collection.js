var Posts = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/calvinfresh',
  model: Post
});
