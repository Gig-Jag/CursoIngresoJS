function mostrar()
{
	//tomo la edad 
	
	let edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad <13){
		alert("Usted es menor de edad");
	}
	else
	{

		if(edad <= 17)
		{
		alert("Usted es adolescente");
		}
		else
		{
		alert("Usted es mayor de edad");
		}
	}



}//FIN DE LA FUNCIÓN