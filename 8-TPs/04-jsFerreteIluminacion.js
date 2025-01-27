/*

alumno: Diego Gabriel Elizalde Vidal
Division G

4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantidadDeLamparas;
    let marca;
    let precioLamparas;
    let precio;
    let descuento;
    let mensaje;
    let iibb;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    precioLamparas = 35;

    marca = document.getElementById("Marca").value;

    precio = cantidadDeLamparas * precioLamparas; 
    
    iibb = 0.1;

    descuento = 1;

    if(cantidadDeLamparas > -1)
    {
        if(cantidadDeLamparas > 5)
        {
        descuento = 0.5;
        }
        else
        {
            if(cantidadDeLamparas == 5)
            {
                if(marca == "ArgentinaLuz")
                {
                descuento = 0.6;
                }
                else
                {
                descuento = 0.7;
                }
            }
            else
            {
                if(cantidadDeLamparas == 4)
                {
                    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                    {   
                    descuento = 0.75;
                    }
                    else
                    {
                    descuento = 0.80;
                    }
                }
                else
                {
                    if(cantidadDeLamparas == 3) 
                    {   
                        if(marca == "ArgentinaLuz")
                        {
                        descuento = 0.85;
                        }
                        else
                        {
                            if(marca == "FelipeLamparas")
                            {
                            descuento = 0.90;
                            }
                            else
                            {
                            descuento = 0.95;
                            }
                        }
                    }
                }
            }
        }
    }
    else
    {
        alert("Numero Invalido");
    }

    precio = precio * descuento;
    iibb = precio * iibb;

    if(precio > 120)
    {
        mensaje = "IIBB Usted pago " + iibb;
        precio = precio + iibb;

        alert(mensaje);
    }

    document.getElementById("txtIdprecioDescuento").value = precio;
}