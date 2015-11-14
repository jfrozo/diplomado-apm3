angular.module('lab8', ['ngCordova'])

.controller('lab8Controller', function($scope, $rootScope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {

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