angular.module('initial_spi.controllers', [])

.controller('MessageproductsController', function($scope){
	$scope.product_message = 'All Products';
})

.controller('MessagecontactsController', function($scope){
	$scope.contact_message = 'All Contacts ';
})

.controller('productsController', function($scope, $http){
   var url = "data.json";
   $http.get(url).success(function(response){
   $scope.products = response;
   $scope.product_message = 'All Products';
  });
})


.controller('contactsController', function($scope){
    $scope.reset = function(){
        $scope.descriptions = '';
        $scope.email = "";
        $scope.nid = 0;
    }
    $scope.reset();

    $scope.submit= function(){
    	console.log("click Submit");
    	localStorage.setItem("descriptions",$scope.descriptions);
    	localStorage.setItem("email",$scope.email);
    	localStorage.setItem("nid",$scope.nid);
    }
});

