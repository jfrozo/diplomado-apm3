angular.module('lab15', ['ngCordova'])

.controller('lab15Controller', function($scope, $cordovaGeolocation){

document.addEventListener('deviceready', function(){
            var options = {
                timeout: 10000,
                enablehighAccuracy: false
            };

            $cordovaGeolocation.getCurrentPosition(options)
                .then(function(position){
                    var myLat = position.coords.latitude;
                    var myLong = position.coords.longitude;
                    var myAlti = position.coords.altitude;
                    var mySpeed = position.coords.speed;
                    var myTime = position.timestamp;


                    console.log(myLat, myLong);

                    $scope.my_latitude = myLat;
                    $scope.my_longitude = myLong;
                    $scope.my_altitude = myAlti;
                    $scope.my_speed = mySpeed;
                    $scope.my_time = myTime;

                });

        }, false);
});