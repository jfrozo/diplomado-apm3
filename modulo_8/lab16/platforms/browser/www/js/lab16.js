angular.module('lab16', ['ngCordova'])

    .controller('lab16Controller', function($scope, $cordovaDevice){

        document.addEventListener('deviceready', function(){

            $scope.info = $cordovaDevice.getDevice();

            console.log($scope.info.cordova);
        
        }, false);
});