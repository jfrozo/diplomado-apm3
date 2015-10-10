// Funciones 
function test(){

	var a = 160;
    var b = 150;
    var c;
    var operacion;
	if(a > b){
		c = a + b;
		operacion = 'suma'
	} else if( a < b){
		c = a * b;
		operacion = 'multiplicacion'
	} else if( a === b){
		c = a / b;
		operacion = 'division'
	}
	console.log('Resultado fue una ' + operacion + ' que dio: ' + c);
	alert('Resultado fue una ' + operacion + ' que dio: ' + c);
}

test();