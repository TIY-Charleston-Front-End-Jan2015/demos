$(document).ready(function () {

  $.ajax({
    url: 'http://www.reddit.com/r/itookapicture.json',
    type: 'GET',
    success: function (redditData) {
      console.log(redditData.data.children);
      var normData = redditData.data.children;
      normData.forEach(function(currentElement, idx, arr) {
        $('body').append("<img src='" + currentElement.data.thumbnail + "'>");
      });
    }
  });

});
