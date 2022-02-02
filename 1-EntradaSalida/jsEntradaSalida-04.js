/* 

alumno: Diego Gabriel Elizalde Vidal
Division G
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var ingresarNombre;
	ingresarNombre = prompt("ingrese su nombre");
	
	document.getElementById("txtIdNombre").value = ingresarNombre;

}

