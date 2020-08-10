/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta = true;
	var nombreTitular;
	var lugar;
	var temporada;
	var cantidadPersonas;
	var contadorBariloche = 0;
	var contadorCataratas = 0;
	var contadorSalta = 0;
	var nombreTitularMayorPasajeros;
	var cantidadPersonasMayor;
	var bandera = true;
	var contadorPersonas = 0;
	var acumuladorPersonas = 0;
	var promedio;

	while(respuesta)
	{
		do{
			nombreTitular = prompt("Ingrese nombre del titular");
		}while(!(isNaN(nombreTitular)));

		do{
			lugar = prompt("Ingrese lugar");
		}while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta");

		do{
			temporada = prompt("Ingrese temporada");
		}while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera");

		do{
			cantidadPersonas = prompt("Ingrese cantidad de personas");
			cantidadPersonas = parseInt(cantidadPersonas);
		}while(isNaN(cantidadPersonas));

		//a)el lugar más elegido

		switch(lugar){
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}

		//b)el nombre de titular que lleva más pasajeros.

		if(bandera){
			cantidadPersonasMayor = cantidadPersonas;
			nombreTitularMayorPasajeros = nombreTitular;
			bandera = false;
		}else if(cantidadPersonas > cantidadPersonasMayor){
			cantidadPersonasMayor = cantidadPersonas;
			nombreTitularMayorPasajeros = nombreTitular;
		}

		//c)el promedio de personas por viaje,  que viajan en invierno

		if(temporada == "invierno"){
			acumuladorPersonas+= cantidadPersonas;
			contadorPersonas++;
		}
		promedio = acumuladorPersonas / contadorPersonas;
	
	
		if(temporada == "invierno"){
		console.log("El promedio de personas que viaja en invierno es " + promedio);
		}
		
		




		respuesta = confirm("Desea ingresar otro?");
	}//fin de while

	//a
	if(contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		console.log("El lugar mas elegido es Bariloche");
	}else if(contadorCataratas > contadorSalta){
		console.log("El lugar mas elegido es Cataratas");
	}else{
		console.log("El lugar mas elegido es Salta");
	}
	//b
	console.log("El nombre del titular con mayor pasajeros es " + nombreTitularMayorPasajeros);
	



}
