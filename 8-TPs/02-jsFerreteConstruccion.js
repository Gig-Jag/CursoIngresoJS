/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	let largo;
	let ancho;
	let vueltasDeAlambre;
	let calcularVueltas;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseInt(largo) * 2;
	ancho = parseInt(ancho) * 2;

	vueltasDeAlambre = 3;

	calcularVueltas = (largo + ancho) * vueltasDeAlambre;

	alert(calcularVueltas);


}
function Circulo () 
{

	let radio;
	let vueltasDeAlambre;
	let calculoPerimetro;
	let calculoAlambreTotal;
	radio = document.getElementById("txtIdRadio").value;
	radio = parseFloat(radio);
	
	vueltasDeAlambre = 3;

	calculoPerimetro = 2 * Math.PI * radio;

	calculoAlambreTotal = calculoPerimetro * vueltasDeAlambre;
	
	alert(calculoAlambreTotal);

}
function Materiales () 
{
	
	let largo;
	let ancho;

	let bolsasDeCementoPorMetroCuadrado;
	let bolsasDeCalPorMetroCuadrado;

	let area;

	let calcularCal;
	let CalcularCemento;

	let mensaje;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	area = (largo * ancho);

	bolsasDeCalPorMetroCuadrado = 3;
	bolsasDeCementoPorMetroCuadrado = 2;

	calcularCal = area * bolsasDeCalPorMetroCuadrado;
	CalcularCemento = area * bolsasDeCementoPorMetroCuadrado;

	mensaje = "se necesitan " + CalcularCemento;
	mensaje = mensaje + " bolsas de cemento y ";
	mensaje = mensaje + calcularCal ;
	mensaje = mensaje + " bolsas de cal";

	alert(mensaje);


}