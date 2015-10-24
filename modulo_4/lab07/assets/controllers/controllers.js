angular.module('lab07.controllers', ['lab07.services'])
.controller('lab07Controller', function($scope, data){
    'use strict';
    data.query(function(data){
       $scope.data = data;
    });
});