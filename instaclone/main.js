$(function () {

});

var page = {
  init: function () {

  },
  initStyling: function () {

  },
  initEvents: function () {

  },
  searchPhotos: function (term) {
    $.ajax({
      url: 'https://api.instagram.com/v1/tags/'+ term +'/media/recent?&client_id=b362cc0e66024b3cb5cda8f86e8004be',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        console.log(data.data);
        var markup = "";
        data.data.forEach(function (item, idx, arr) {
          markup += "<img style='width:200px' src='" + item.images.standard_resolution.url + "'>";
        });
        $('body').append(markup);
      }
    })
  },
  getPhotos: function () {
    $.ajax({
      url: 'https://api.instagram.com/v1/media/popular?client_id=b362cc0e66024b3cb5cda8f86e8004be',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data);
        page.geoLocate();
      }

    });
  },
  geoLocate: function () {
      return navigator.geolocation.getCurrentPosition(page.getPosition);
  },
  getPosition: function (position) {
     console.log(position.coords.latitude, position.coords.longitude);
  },
  getByLocation: function () {
    $.ajax({
      url: 'https://api.instagram.com/v1/media/search?lat=32.9495911&lng=-80.0149958&distance=5000&client_id=b362cc0e66024b3cb5cda8f86e8004be',
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(data.data);
        var markup = "";
        data.data.forEach(function (item, idx, arr) {
          markup += "<img style='width:75px' src='" + item.images.standard_resolution.url + "'>";
        });
        $('body').append(markup);
      }
    })
  }
}
