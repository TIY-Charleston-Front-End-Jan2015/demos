var Post = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/calvinfresh',
  idAttribute: "_id",
  defaults: {
    photo: 'http://www.placecage.com/100/100'
  },
  initialize: function () {
    console.log("post model is created!");
  }
});

var post1 = new Post({title: 'this is my killer post title.', uggaBugga: 'some data'});

// POST to the server

post1.save();

// now we want to edit the post

post1.set({title: 'this is a new title.'});

// now we will PUT to the server

post1.save();
