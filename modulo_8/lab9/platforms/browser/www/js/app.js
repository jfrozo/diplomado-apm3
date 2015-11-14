angular.module('lab9', ['ngRoute', 'lab9.controllers'])

.config(['$routeProvider', function($routeProvider){
	/*
	 * `when()` cuantas veces sea necesario
	 * `otherwise()` una sola vez "OJO"
	*/
	$routeProvider

	.when('/device', {
	    templateUrl : "views/device.html",
	    controller: 'deviceController'
	})

	.when('/network', {
		templateUrl: "views/network.html",
		controller: 'networkController'
	})
	
	.otherwise({
	    redirectTo: '/',
	    templateUrl: 'views/otherwise.html'
	});
 }]);