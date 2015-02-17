// Model View

var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  initialize: function () {
    // console.log(this.el);
  },
  events: {
    "click .deletePost": "removePost"
  },
  render: function () {
    // console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removePost: function () {
    this.$el.remove();
    this.model.destroy();

  }
});

// Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllPosts();
  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createPost": "createPost"
  },
  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      title: $('#createPost').find('input[name="newTitle"]').val(),
      content: $('#createPost').find('textarea[name="newContent"]').val(),
      author: $('#createPost').find('input[name="newAuthor"]').val()
    };

    var newModelPost = new PostModel(newPost);
    newModelPost.save();
    console.log(this.collection.length);
    this.collection.add(newModelPost);
    console.log(this.collection.length);
    // this.addOnePost(newModelPost); // alternative method
    this.addAllPosts();
    this.$el.find('#createPost').find('input, textarea').val('');
    this.showCreate();


  },
  showCreate: function () {
    // e.preventDefault();
    this.$el.find('#createPost').toggleClass('show');
  },
  addOnePost: function (post) {

    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  },
  addAllPosts: function () {
    _.each(this.collection.models, this.addOnePost, this)
  },
  alertMe: function () {
    alert("hi everyone!");
  }
});
