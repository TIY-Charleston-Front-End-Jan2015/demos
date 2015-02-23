var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'books',
    'books': 'books',
    'bookDetail': 'testView',
    'poop': 'anotherView'
  },
  initialize: function (options) {
    var options = options || {};
    this.layout = options.layout;

  },
  books: function () {
    var booksCol = new BookCollection(books);
    this.layout.renderSubview(new BooksCollectionView({collection: booksCol}));

  },
  testView: function () {
    this.layout.renderSubview(new FooterView());
  },
  anotherView: function () {
    this.layout.renderSubview(new HeaderView());
  }
});
