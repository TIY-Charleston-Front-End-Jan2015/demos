$(document).ready(function () {
  // all code that is dom dependent lives here


  // events

  // shorthand
  $(".box").eq(0).click(function (event) {
    event.preventDefault();
    $(this).css("background-color", "blue");

  });

  $(".box").eq(1).find("select").change(function () {
      console.log("change working");
      $(this).closest(".box").css("background-color", "green");

  });
  $(".box").eq(2).dblclick(function (event) {
    event.preventDefault();
    console.log("double click");

    $(this).css({"transform": "scale(2.5)", "background-color ": "black"});

  });

  $(".box").eq(3).hover(function (event) { // MOUSEOVER
    event.preventDefault();

    $(this).css("transform", "scale(0.5)");

  }, function (event) { // MOUSEOUT
    $(this).css("transform", "scale(1.5)");
  });

  $(".box").eq(4).mouseover(function (event) {
    $(this).css("opacity", ".5");
  });

  $(".box").eq(5).mouseout(function (event) {
    $(this).css("opacity", ".5");
  });


  $(".box").eq(6).on("click mouseout", function () {
    console.log("hi ya'll");
  });


  $("body").on("click","button", function () {
    $(this).parent().css("background-color", "yellow");
  });


  // $(domElement-parent).on(event, target, callback); - event delegation

  // $(domElement-target).on(event, callback); - non delegated






});
