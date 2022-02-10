/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioTotal;
	
	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	precioTotal = precioUno + precioDos + precioTres;
	
	alert(precioTotal);


}
function Promedio () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioTotal;
	let promedio;
	let cantidadDeProductos;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	precioTotal = precioUno + precioDos + precioTres;

	cantidadDeProductos = 3;

	promedio = precioTotal / cantidadDeProductos;

	alert(promedio);

}
function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let precioTotal;
	let iva;

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	
	precioUno = parseFloat(precioUno);
	precioDos = parseFloat(precioDos);
	precioTres = parseFloat(precioTres);

	iva = 1.21;

	precioTotal = precioUno + precioDos + precioTres;

	precioTotal = precioTotal * iva;
	
	alert(precioTotal);
}