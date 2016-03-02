var locateMeControllers = angular.module('locateMeControllers',[]);
locateMeControllers.controller('locateMeController', function ($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

  $ionicPlatform.ready(function() {




                  var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 15,
                    mapTypeId : google.maps.MapTypeId.ROADMAP
                  });
//                  var infoWindow = new google.maps.InfoWindow({map: map});

                  // Try HTML5 geolocation.
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                      var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                      };

//                      infoWindow.setPosition(pos);
//                      infoWindow.setContent('Location found.');
                      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                        var beachMarker = new google.maps.Marker({
                          position: pos,
                          map: map
                        });
                      map.setCenter(pos);
                    }, function() {
                      handleLocationError(true, infoWindow, map.getCenter());
                    });
                  } else {
                    // Browser doesn't support Geolocation
                    handleLocationError(false, infoWindow, map.getCenter());
                  }


                function handleLocationError(browserHasGeolocation, infoWindow, pos) {
                  infoWindow.setPosition(pos);
                  infoWindow.setContent(browserHasGeolocation ?
                                        'Error: The Geolocation service failed.' :
                                        'Error: Your browser doesn\'t support geolocation.');
                }
      })
 });

//locateMeControllers.factory('GeoService', function($ionicPlatform, $cordovaGeolocation) {
//  var positionOptions = {timeout: 10000, enableHighAccuracy: true};
//  return {
//    getPosition: function() {
//      return $ionicPlatform.ready()
//        .then(function() {
//          return $cordovaGeolocation.getCurrentPosition(positionOptions);
//        })
//    }
//  };
//});
//
//locateMeControllers.controller('locateMeController',function($scope, GeoService){
//  GeoService.getPosition()
//      .then(function(position) {
//        $scope.coords = position.coords;
//        showMap(position.coords);
//      }, function(err) {
//        console.log('getCurrentPosition error: ' + angular.toJson(err));
//  });
//  function showMap(coords) {
//      var mapOptions = {
//        center: { lat: coords.latitude, lng: coords.longitude},
//        zoom: 8
//      };
//      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
//  }
//});
