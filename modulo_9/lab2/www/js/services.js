angular.module('app.services', ['ngResource'])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('Products', function($resource){
    this.item_list = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/list');
	this.item_detail = $resource('http://private-bcbaa-productapp.apiary-mock.com/products/detail/:id');

});



