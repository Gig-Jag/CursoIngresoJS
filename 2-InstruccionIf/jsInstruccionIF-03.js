/* 

Alumno: Diego Gabriel Elizalde Vidal
Division G

*/

function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18){

		alert("Usted es mayor de edad");
	}
	else{

		alert("Usted es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN