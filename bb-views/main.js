// var posts = [
//   {title: 'this is the title1', content: 'this is some content, hello from model', author: 'mike tyson'},
//   {title: 'this is the title2', content: 'this is some content, hello from model', author: 'colin firth'},
//   {title: 'this is the title4', content: 'this is some content, hello from model', author: 'kary mullis'}
// ];


$(function () {

  var postCollection = new PostCollection();

 postCollection.fetch().then(function () {
   var appView = new AppView({collection: postCollection});
 });
 





});
