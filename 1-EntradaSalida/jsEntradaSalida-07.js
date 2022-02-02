/*

alumno: Diego Gabriel Elizalde Vidal
Division G
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	var mensajeSuma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	suma = parseInt(numeroUno) + parseInt(numeroDos);
	mensajeSuma = "La suma es " + suma;
	
	alert(mensajeSuma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var mensajeResta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	resta = parseInt(numeroUno) - parseInt(numeroDos);
	mensajeResta = "La resta es " + resta;

	alert(mensajeResta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var mensajeMultiplicacion;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	multiplicacion = parseInt(numeroUno) * parseInt(numeroDos);
	mensajeMultiplicacion = "La multiplicacion es " + multiplicacion;

	alert(mensajeMultiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var division;
	var mensajeDivision;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	division = parseInt(numeroUno) / parseInt(numeroDos);
	mensajeDivision = "La division es " + division;

	alert(mensajeDivision);
}

