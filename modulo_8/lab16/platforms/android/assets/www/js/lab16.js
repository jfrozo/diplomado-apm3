angular.module('lab16', ['ngCordova'])

    .controller('lab16Controller', function($scope, $cordovaDevice){

        document.addEventListener("deviceready", function () {

            var info = $cordovaDevice.getDevice();

            var data = [];

            angular.forEach(info, function(value, key){
                this.push(key + '= ' + value);
            }, data);


            $scope.information = data;

            console.log(data);

        }, false);
        
});