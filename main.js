
let resultado = 0;
let ejecucion;

do {
	let numeroParaSumar = parseInt(prompt('El resultado es: ' + resultado + ' Escriba el numero que desea sumar'));
	resultado += numeroParaSumar;

	let desicion = prompt('Desea seguir sumando numeros? Escriba su respuesta: \n"Si" o "No"');
	desicion.toLowerCase();

	if(desicion === "si") {
		ejecucion = true;
	} else if(desicion === "no") {
		ejecucion = false;
		alert('El resultado final es: ' + resultado);
	} else {
		ejecucion = false;
		alert('La respuesta ingresada no es válida. Su programa finalizará.s\nEl resultado final es: ' + resultado);
	}
} while(ejecucion)