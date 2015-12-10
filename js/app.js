

var app = angular.module("myapp", []);
    app.controller("mycontroller", ['$scope', '$window', function($scope, $window) {

        var montreal = {lat: 45.501689, lng: -73.567256};
        $window.map;
        $window.initMap = function() {
        $window.map  = new google.maps.Map(document.getElementById('map'), {
          center: montreal,
          zoom: 8
        });
         var infowindow = new google.maps.InfoWindow;
         infowindow.setContent('<b>Montréal</b>');

         var marker = new google.maps.Marker({map: map, position: montreal});
         marker.addListener('click', function() {
           infowindow.open(map, marker);
         });
      }

}]);
