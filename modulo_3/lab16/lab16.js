angular.module('tech', [])
         .controller('techController', ['$scope', function($scope){
          $scope.simple_names = ["Alejandro", "Patrick", "Bolson"];
            $scope.languages = [
                {
                    lans: "C#"
                },
                {
                    lans: "Java"
                },
                {
                    lans: "Visual Basic"
                },
                {
                    lans: "Delphi"
                },
                {
                    lans: "C++"
                },
                {
                    lans: "Php"
                }
            ];
         }])
    