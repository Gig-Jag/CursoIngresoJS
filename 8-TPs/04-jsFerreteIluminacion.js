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
    let precioConDescuento;
    let porcentajeIibb;

    cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
    cantidadDeLamparas = parseInt(cantidadDeLamparas);
    precioLamparas = 35;

    marca = document.getElementById("Marca").value;

    precio = cantidadDeLamparas * precioLamparas; 
    mensaje = "Usted pago " + precioConDescuento + " de IIBB."

    porcentajeIibb = 1.1;

    if(cantidadDeLamparas >= 6){
        
        descuento = 0.5;
        precioConDescuento = precio * descuento;
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    }
    else if(cantidadDeLamparas == 5){

        if(marca == "ArgentinaLuz"){

            descuento = 0.6;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

        }
        else{

            descuento = 0.7;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }

    }
    else if(cantidadDeLamparas == 4){

        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

            descuento = 0.75;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }
        else{

            descuento = 0.80;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }
    }
    else if(cantidadDeLamparas == 3){

        if(marca == "ArgentinaLuz"){

            descuento = 0.85;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
            }
        else if(marca == "FelipeLamparas"){
    
            descuento = 0.90;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
            }
        else{
            descuento = 0.95;
            precioConDescuento = precio * descuento;
            document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        }

    }

    if(precioConDescuento > 120){

        let ibb;
        ibb = precioConDescuento * 0.1;
        precioConDescuento = precioConDescuento * porcentajeIibb;
        document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
        let mensaje;
        mensaje = "Usted pago " + ibb + " de IIBB."
        alert(mensaje);
    }
}
    

