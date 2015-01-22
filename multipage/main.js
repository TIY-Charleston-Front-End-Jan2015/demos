$(document).ready(function() {
  // execute our javascript when the DOM has been loaded


// our nav links
  // var $post1 = $('nav a').eq(0);
  // var $post2 = $('nav a').eq(1);
  // var $post3 = $('nav a').eq(2);

// our event bindings for each click of the header navs
  // $post1.click(function (event) {
  //   event.preventDefault();
  //   var $myLi = $(this).closest("li");
  //   var $mySiblings = $myLi.siblings();
  //
  //   $mySiblings.removeClass("activeNav");
  //   $myLi.addClass("activeNav");
  //
  //   $('.post1').siblings().removeClass("active");
  //   $('.post1').addClass('active');
  //
  // });
  //
  // $post2.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("activeNav");
  //   $(this).closest("li").addClass("activeNav");
  //   $('.post2').siblings().removeClass("active");
  //   $('.post2').addClass('active');
  //
  // });
  //
  // $post3.click(function (event) {
  //   event.preventDefault();
  //
  //   $(this).closest("li").siblings().removeClass("activeNav");
  //   $(this).closest("li").addClass("activeNav");
  //   $('.post3').siblings().removeClass("active");
  //   $('.post3').addClass('active');
  //
  // });

// This is a more DRY version of the code above
   $("nav a").click(function (event) {
     event.preventDefault();

     console.log("this is href: ", $(this).attr("href"));

     var relatedClass = "." + $(this).attr('rel');  // .post1 or .post2 or .post3
     // changing activeNav class to my nav menu item
       $(this).closest("li").siblings().removeClass("activeNav");
       $(this).closest("li").addClass("activeNav");


       $(relatedClass).siblings().removeClass("active");
       $(relatedClass).addClass('active');

     console.log(relatedClass);




   });

















});
