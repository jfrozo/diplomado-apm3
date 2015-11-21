angular.module('lab11', ['ngCordova'])

.controller('lab11Controller', function($scope, $cordovaDialogs){

	$scope.active_alert =function(){
		$cordovaDialogs.alert('nCordova', 'Hola!', 'Aceptar')
	    .then(function() {
	    	$scope.lab = "Lab11";
	      	console.log('Ok alerts');
	    });
	};

		$scope.active_confirm = function(){
		 $scope.respuesta = "";	
		 $cordovaDialogs.confirm('QUe vas a utilizar', 'Confirmar', ['Aceptar','Cancelar','Volver'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;

		      if (btnIndex === 0) {
		      	$scope.respuesta = "SIN RESPUESTA";
		      } 

		      else if(btnIndex===1){
 				$scope.respuesta = "ACEPTAR";
		      	console.log('El boton es Aceptar');
		      }

			  else if(btnIndex===3){
 				$scope.respuesta = "VOLVER";
		      	console.log('El boton es Volver');
		      }

		      else {
		      	$scope.respuesta = "CANCELAR";
		      	console.log('El boton es Cancelar');
		      }

    	});
	};

	$scope.active_prompt = function(){

		$cordovaDialogs.prompt('Indicar algo', 'prompt', ['Aceptar','Cancelar'], 'Indique su edad')
		    .then(function(result) {
		      $scope.input = '';	
		      var input = result.input1;
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = result.buttonIndex;

		      if (btnIndex === 1) {
		      	console.log('el input es: ' + input);
		      	$scope.input = input;
		      } else {

		      	console.log('Usted cancelo');
		      }


    });	
	}

});