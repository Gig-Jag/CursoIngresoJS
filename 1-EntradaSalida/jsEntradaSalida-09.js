/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var calcularAumento;
	var aumento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	porcentaje = 10;
	calcularAumento = ((sueldo * porcentaje) / 100);
	aumento = sueldo + calcularAumento;

	document.getElementById("txtIdResultado").value = aumento;
}
