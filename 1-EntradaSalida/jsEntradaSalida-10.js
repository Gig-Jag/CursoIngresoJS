/*

alumno: Diego Gabriel Elizalde Vidal
Division G
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var calcularDescuento;
	var descuento;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	porcentaje = 25;
	calcularDescuento = ((importe * porcentaje) / 100);
	descuento = importe - calcularDescuento;

	document.getElementById("txtIdResultado").value = descuento;
}
