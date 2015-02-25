var LayoutView = Backbone.View.extend({
  el: $('#layout'),
  events: {
    // 'click #footer': 'alertUser'
  },
  alertUser: function () {
    alert('some random stuff');
  },
  initialize: function () {

    var headView = new HeaderView().render().el;
    var footView = new FooterView().render().el;
    this.$el.find('#header').html(headView);
    this.$el.find('#footer').html(footView);
  },
  renderSubview: function (view) {
    this.subView && this.subView.remove();

      this.subView = view;
      this.$el.find('#container').html(this.subView.render().el);

  }
});

  var HeaderView = Backbone.View.extend({
   tagName: 'header',
  //  events: {'click nav': 'hellooo'},
   template: _.template($('#headTmpl').html()),
   initialize: function () {

   },
   render: function () {
     this.$el.html(this.template());
     return this;
   },
   hellooo: function () {
     alert("hi there, how are you?");
   }
});
var FooterView = Backbone.View.extend({
  tagName: 'footer',
  template: _.template($('#footTmpl').html()),
  initialize: function () {

  },
  render: function () {
    this.$el.html(this.template());
    return this;
  }

});
var BooksCollectionView = Backbone.View.extend({
  tagName: 'section',
  initialize: function () {
    // this.render();
  },
  render: function () {
    this.addAll();
    return this;
  },
  addOne: function (book) {
    var bookView = new BookView({model: book});
    this.$el.append(bookView.render().el);
  },
  addAll: function () {

    _.each(this.collection.models, this.addOne, this);

  }

});
var BookView = Backbone.View.extend({
  tagName: 'article',

  template: _.template($('#bookTmpl').html()),
  initialize: function () {

  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
