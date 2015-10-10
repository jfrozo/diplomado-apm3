/* Array en JavaScript */

'use strict';

var my_array = new Array();

// Crear elementos+

my_array = [12,2,14,4,16,6];

console.log(my_array);

// Organizar elementos+
my_array.sort();

console.log(my_array);

// Agregando elemento despues de la ultima posicion

my_array.push(18,8);

console.log(my_array);

// eliminar el primer elemento

my_array.shift();

console.log(my_array);

// Insertar Elementos en un arreglo posicion, cantidad de elementos

my_array.splice(4,2, 20, 10);

console.log(my_array);

