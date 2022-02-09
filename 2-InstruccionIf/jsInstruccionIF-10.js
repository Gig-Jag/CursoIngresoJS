/*

alumno: Diego Gabriel Elizalde Vidal
Division G
*/

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	numero = Math.floor(Math.random() * 10) + 1;

	if(numero < 4)
	{
		alert("Vamos, la proxima se puede");
	}
	else
	{
		if(numero < 9)
		{
			alert("APROBÓ");
		}
		else
		{
			alert("EXCELENTE");
		}
	}

}//FIN DE LA FUNCIÓN