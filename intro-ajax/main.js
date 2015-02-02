$(document).ready(function () {
  // stuff goes here
  page.init();
});


var page = {

  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    console.log('init styling');

  },
  initEvents: function () {
    console.log('init events');
  },
  config: {
    baseUrl: 'https://api.instagram.com/v1/',
    clientId: 'b362cc0e66024b3cb5cda8f86e8004be',
    lat: '32.7929094',
    lng: '-79.8781075'

  },
  getPhotosNearMe: function () {
    $.ajax({
      url: page.config.baseUrl + 'media/search?' + 'lat=' + page.config.lat + '&lng=' + page.config.lng + '&client_id=' + page.config.clientId, // url here
      type: 'GET',
      dataType: 'JSONP', // type of data that were expecting to get
      success: function (data) {
        console.log(data);
        data.data.forEach(function(item, idx, arr) {
          $('.container').append('<img src="' + item.images.thumbnail.url + '">');
        });

      },
      error: function (error) {
        console.log(error);
      }
    });
  },
  getPhotosByTag: function (term) {
    $.ajax({
      url: page.config.baseUrl + 'tags/' + term + '/media/recent?client_id=' + page.config.clientId,
      type: 'GET',
      dataType: 'JSONP',
      success: function (data) {
        console.log(page.config.baseUrl + 'tags/' + term + '/media/recent?client_id=' + page.config.clientId);
        console.log(data);
        data.data.forEach(function(item, idx, arr) {
          $('.container').append('<img src="' + item.images.standard_resolution.url + '">');
        });
      },
      error: function (error) {
        console.log(error);
      }
    });
  }
};
