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

      $(".mainContent").on('click', '.showEditForm', function (event) {
        $(this).closest('article').find('.form').toggleClass('active');
      });

      $('.mainContent').on('click', '.deletePost', blogPage.deletePost);

      // update post
      $('.mainContent').on('click', '.editWholePost', blogPage.updatePost);

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

      var thisIndex = $(this).closest('article').data('index');

      var updatedPost = {
        title: $(this).closest('article').find('input.editTitle').val(),
        content: $(this).closest('article').find('input.editContent').val(),
        author: $(this).closest('article').find('input.editAuthor').val(),
        photo: $(this).closest('article').find('input.editPhoto').val(),
        isPublished: true
      };

      posts.splice(thisIndex, 1, updatedPost);
      blogPage.renderAllPosts(posts);

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
      // var tmplStr = "";
      var compiledTmpl = _.template($("#postTmpl").html());

      var markup = compiledTmpl(allPosts);
      console.log(markup);
          // _.each(allPosts, function (post, index, arr) {
          //   post.idx = index;
          //   tmplStr += compiledTmpl(post);
          //
          // });

      $(".mainContent").html(markup);
    }
  };

$(document).ready(function () {
  blogPage.init();
});
