
/* objetos y funciones */
var my_object = new Object();

var other_object = {};

var person_object = {};


my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};

person_object = {
	firstName: 'John Fitzgerald',
	lastName: 'Rozo',
	phone: 2353535
};


console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}

for(key in person_object){
	console.log(person_object[key]);
}

// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
	console.log('Que tengan una feliz');
}

bye_bye();