angular.module('lab9.controllers', [])

.controller('deviceController', function($scope){
	$scope.device_message = 'Algún Mensaje';
})

.controller('networkController', function($scope){
	$scope.network_message = 'Otro Mensaje';
});