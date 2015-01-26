// function init() {
//   initStyling();
//   initEvents();
// }
//
// function initStyling() {
//   console.log("called init styling");
//   addAllPosts(posts);
// }
//
// function initEvents() {
//
//   $("body").on("click", function () {
//     alert("my event is bound.");
//   })
//   console.log("called init events");
//
// }
//
// function addPost(post, index, array) {
//   $("section").append(
//     "<article>" +
//     "<h3>" + post.title + "</h3>"
//     + "<p>" + post.content + "</p>"
//     + "<blockquote>" + post.author + "</blockquote>"
//     + "</article>"
//   );
// }
//
// function addAllPosts(postsData) {
//   postsData.forEach(addPost);
//
//   // postsData.forEach(function (item, index, array) {
//   //   $("section").append(
//   //     "<article>" +
//   //     "<h3>" + item.title + "</h3>"
//   //     + "<p>" + item.content + "</p>"
//   //     + "<blockquote>" + item.author + "</blockquote>"
//   //     + "</article>"
//   //   );
//   // });
// }





var blogPage = {

  init: function () {
    blogPage.initStyling();
    blogPage.initEvents();

  },
  initStyling: function () {
    console.log("called init styling");
    blogPage.addAllPosts(posts);
  },
  initEvents: function () {

    $("body").on("click", function () {
      alert("my event is bound.");
    })
    console.log("called init events");
  },
  addPost: function (post, index, array) {

    // compiled underscore template
    // partial application
    var compiled = _.template(templates.post);



    console.log(compiled(post));

    $("section").append(compiled(post));

    // $("section").append(
    //   "<article>" +
    //   "<h3>" + post.title + "</h3>"
    //   + "<p>" + post.content + "</p>"
    //   + "<blockquote>" + post.author + "</blockquote>"
    //   + "</article>"
    // );
  },
  addAllPosts: function (postsData) {
    postsData.forEach(blogPage.addPost);

    // postsData.forEach(function (item, index, array) {
    //   $("section").append(
    //     "<article>" +
    //     "<h3>" + item.title + "</h3>"
    //     + "<p>" + item.content + "</p>"
    //     + "<blockquote>" + item.author + "</blockquote>"
    //     + "</article>"
    //   );
    // });
  },
  sideBarReddit: function (redditData) {
    console.log(redditData);
    var reddits = redditData.data.children;
    var markup = "";

    // lets use our template
    var sideBarTmpl = templates.sidebar;
    console.log(reddits);
    reddits.forEach(function (item, index, array) {
      markup += sideBarTmpl(item.selftext);
    });
    console.log(markup);
    $("aside").append(markup);

  }

};

$(document).ready(function () {
  // code goes here for page.
  blogPage.init();
  // init();
});
