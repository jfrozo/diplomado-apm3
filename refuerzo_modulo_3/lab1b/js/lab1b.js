angular.module('lab1b',  [])
.controller('lab1bController',  ['$scope', function($scope){
          $scope.filterlab1 = ["filter", "currency", "number", "date", "json", "lowercase", "uppercase", "limitTo", "orderBy"];
          $scope.inputlab1 = ["input[text]", "input[date]", "input[datetime-local]", "input[time]", "input[week]", "input[month]", "input[number]", "input[url]", "input[email]","input[radio]","input[checkbox]"];
         }])
         

