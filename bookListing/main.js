$(document).ready(function () {
  books.init();

});


var books = {

  init: function () {
    books.initStyling();
    books.initEvents();
    setInterval(function() {
      console.log("hi everyone!");
    }, 1000);



  },
  initStyling: function () {
    books.renderBooks();
  },
  initEvents: function () {

    $('section').on('click', '.showEditBook', function (event) {
      event.preventDefault();
      $(this).closest('article').find('.editBook').toggleClass('show');
    });

    $('section').on('submit', '.editBook', function (event) {
      event.preventDefault();
      var bookId = $(this).closest('article').data('bookid');
      var editedBook = {
        title: $(this).find('input[name="editTitle"]').val(),
        author: $(this).find('input[name="editAuthor"]').val(),
        synopsis: $(this).find('textarea[name="editSynopsis"]').val(),
        bookCover: $(this).find('input[name="editBookCover"]').val()
      };

      books.updateBook(bookId, editedBook);


    });

    $('#createBook').on('submit', function (event) {
      event.preventDefault();
        var newBook = {
          title: $(this).find('input[name="newTitle"]').val(),
          author: $(this).find('input[name="newAuthor"]').val(),
          synopsis: $(this).find('textarea[name="newSynopsis"]').val(),
          bookCover: $(this).find('input[name="newBookCover"]').val()
        };

        books.createBook(newBook);
    });

    $('section').on('click', '.deleteBook', function (event) {
      event.preventDefault();
       var bookId = $(this).closest('article').data('bookid');
       console.log(bookId);
       books.deleteBook(bookId);
    });

  },
  config: {
    url: 'http://tiy-fee-rest.herokuapp.com/collections/spacejam',

  },
  render: function (data, tmpl, $el) {
    var template = _.template(data, tmpl);

    $el.append(template);
  },
  renderBooks: function () {
    $.ajax({
      url: books.config.url,
      type: 'GET',
      success: function (books) {
        console.log(books);
        var template = _.template($('#bookTmpl').html());
        var markup = "";
        books.forEach(function (item, idx, arr) {
          markup += template(item);
        });
        console.log('markup is.....', markup);
        $('section').html(markup);
      },
      error: function (err) {
        console.log(err);
      }
    });
  },
  createBook: function (book) {

    $.ajax({
      url: books.config.url,
      data: book,
      type: 'POST',
      success: function (data) {
        console.log(data);
        var userInfo = JSON.stringify(data);
        localStorage.setItem('userInfo', userInfo);
        // books.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });

  },
  deleteBook: function (id) {

    $.ajax({
      url: books.config.url + '/' + id,
      type: 'DELETE',
      success: function (data) {
        console.log(data);
        // books.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });



  },
  updateBook: function (id, book) {

    $.ajax({
      url: books.config.url + '/' + id,
      data: book,
      type: 'PUT',
      success: function (data) {
        console.log(data);
        books.renderBooks();
      },
      error: function (err) {
        console.log(err);
      }
    });


  },

};
