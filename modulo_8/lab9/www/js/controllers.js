angular.module('lab9.controllers', ['ngCordova'])


.controller('networkController', function($scope, $rootScope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {
    $scope.network_message = 'NetWork Information';

    $scope.network = $cordovaNetwork.getNetwork();
    $scope.isOnline = $cordovaNetwork.isOnline();
    $scope.isOffline = $cordovaNetwork.isOffline();

    console.log($scope.network);
    console.log($scope.isOnline);
    console.log($scope.isOffline);

    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      console.log("got online");
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      console.log("got offline");
      })

  }, false);
});

.controller('deviceController', function($scope, $cordovaDeviceMotion){
  $scope.device_message = 'Device Motion';
    // watch Acceleration
  var options = { frequency: 2000 };

  document.addEventListener("deviceready", function () {

    var watch = $cordovaDeviceMotion.watchAcceleration(options);
    watch.then(
      null,
      function(error) {
      // An error occurred
      },
      function(result) {
        $scope.x = result.x;
         $scope.y = result.y;
         $scope.z = result.z;
         $scope.time_stamp  = result.timestamp;
    });


    /*watch.clearWatch();
    // OR
    $cordovaDeviceMotion.clearWatch(watch)
      .then(function(result) {
        // success
        }, function (error) {
        // error
      });*/

  }, false);

   
});
