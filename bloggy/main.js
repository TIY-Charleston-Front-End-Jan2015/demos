var blogPage = {
    init: function () {
      blogPage.initStyling();
      blogPage.initEvents();
    },
    initStyling: function () {
      blogPage.renderAllPosts(posts);
    },
    initEvents: function () {

      $('.box form').on('submit', function (event) {
        event.preventDefault();
        blogPage.createPost();
      });

      $('section').on('click', '.deletePost', blogPage.deletePost);

    },
    createPost: function () {
      var newPost = {
        title: $('.box input[name="title"]').val(),// title goes here
        content: $('.box textarea[name="content"]').val(), // content goes here
        author: $('.box input[name="author"]').val() ,// author goes here
        photo: $('.box input[name="photo"]').val(),
        isPublished: true
      };

      posts.push(newPost);
      blogPage.renderAllPosts(posts);

      $('.box input').val('');
      $('.box textarea').val('');

    },
    updatePost: function () {

    },
    deletePost: function (event) {

      var postIndex = $(this).closest('article').data('index');

      console.log(postIndex);
      posts.splice(postIndex, 1);
      blogPage.renderAllPosts(posts);


    },
    compileTmpl: function (data, tmpl) {
      var tmpl = _.template(tmpl);
      return tmpl(data);
    },
    renderAllPosts: function (allPosts) {
      var tmplStr = ""
      var compiledTmpl = _.template(templates.post);

          _.each(allPosts, function (item, index, arr) {
            item.idx = index;
            tmplStr += compiledTmpl(item);
          });

      $("section").html(tmplStr);
    }
  };

$(document).ready(function () {
  blogPage.init();
});
