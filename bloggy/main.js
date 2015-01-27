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
        isPublished: true
      };

      posts.push(newPost);


      blogPage.renderPost(newPost, posts.indexOf(newPost));

      $('.box input').val('');
      $('.box textarea').val('');

    },
    updatePost: function () {

    },
    deletePost: function (event) {

      var postIndex = $(this).closest('article').data('index');

      console.log(postIndex);
      posts.splice(postIndex, 1);

      $(this).closest('article').remove();
    },
    renderPost: function (post, index, array) {
      post.idx = index;
      var compiled = _.template(templates.post);

      // console.log(compiled(post));

      $("section").prepend(compiled(post));

    },
    renderAllPosts: function (allPosts) {

      _.each(allPosts, blogPage.renderPost)
    }
  };

$(document).ready(function () {
  blogPage.init();
});
