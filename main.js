let ejecucion;

do {
	let palabra = prompt("Que palabra desea repetir");
	let cantidad = parseInt(prompt("Cuantas veces desea repetirla"));

	for(i=0; i<cantidad; i++) {
		console.log(palabra);
	}

	alert("Su palabra se repitió " + cantidad + " veces con éxito. Chequee la consola porfavor.");

	let desicion = prompt('Desea repetir otra palabra? Escriba su respuesta.\n"Si" o "No"');

	desicion.toLowerCase();
	if(desicion === "si") {
		ejecucion = true;
	} else if(desicion === "no") {
		ejecucion = false;
		alert('Su programa finalizó');
	} else {
		ejecucion = false;
		alert('La respuesta ingresada no es válida. Su programa finalizará.');
	}
} while(ejecucion)