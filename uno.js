/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador = 0;
	var nombre;
	var temperatura;
	var sexo;
	var edad;
	var contadorSexoM = 0;
	var contadorSexoF = 0;
	var contadorEdad = 0;
	var acumuladorEdad = 0;
	var promedio;
	var bandera = true;
	var temperaturaMayor;
	var nombreMujerTemperaturaMayor;

	while(contador < 5)
	{
		do{
			nombre = prompt("Ingrese su nombre");
		}while(!(isNaN(nombre)));

		do{
			temperatura = prompt("Ingrese su temperatura");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura));

		do{
			sexo = prompt("Ingrese su sexo");
		}while(sexo != "m" && sexo != "f");

		do{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
		}while(isNaN(edad));

		//a)informar la cantidad de personas de cada sexo.

		if(sexo == "m"){
			contadorSexoM++;
		}else if(sexo == "f"){
			contadorSexoF++;
		}

		//b)la edad promedio en total

		if(edad){
			acumuladorEdad+= edad;
			contadorEdad++;
		}
		promedio = acumuladorEdad / contadorEdad;

		//c)la mujer con más temperatura(si la hay)

		if(sexo == "f" && bandera){
			temperaturaMayor = temperatura;
			nombreMujerTemperaturaMayor = nombre;
			bandera = false;
		}else if(temperatura > temperaturaMayor){
			temperaturaMayor = temperatura;
			nombreMujerTemperaturaMayor = nombre;
		}
		if(sexo == "f"){
			console.log("La mujer con mas temperatura es " + nombreMujerTemperaturaMayor + " con " + temperaturaMayor);
		}

		contador++;
	}//fin del while

	//a
	console.log("La cantidad de hombres son " + contadorSexoM + " y de mujeres son " + contadorSexoF);
	//b
	console.log("La edad promedio total es " + promedio);
	//c
	
}
