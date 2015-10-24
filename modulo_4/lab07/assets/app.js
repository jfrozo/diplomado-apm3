angular.module('lab07', ['ngRoute', 'lab07.controllers', 'lab07.services'])
.config(function($routeProvider){

    'use strict';
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/data', {
            controller: 'lab07Controller',
            templateUrl: 'views/data.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});