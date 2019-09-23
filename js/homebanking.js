
var nombreUsuario= "Damian";
var saldoCuenta= 3800;
var limiteExtraccion= 1500;
var Clave= 123;




function depositarDinero(x){
	saldoCuenta+=x;
	
	

     }
function sumarDinero(x){ 
	saldoCuenta+=x;
	

	} 
function restarDinero(x){
    saldoCuenta-=x;	
    } 

  

//Ejecución de las funciones q actualizan los valores de las variables en el HTML.
window.onload = function() {
	iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
   
} 



//Funciones que tenes que completar
function extraerDinero() {
	var dinero =parseInt( prompt('Ingrese monto a extraer'));
	var saldoAnterior=saldoCuenta;
if(dinero>saldoCuenta) {
		 alert('No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero');
		 
	}else if(dinero>limiteExtraccion){
		alert('Tu limite de extracción es inferior al importe solicitado.');
	}else if(dinero % 100 != 0){
    alert("Solo puedes sacar billetes de 100.");
  }else if(dinero<=saldoCuenta){
		restarDinero(dinero)
	    alert("Has extraido:"+dinero+ "\nSaldo anterior:"+ saldoAnterior+"\nSaldo actual:"+saldoCuenta );
	    actualizarSaldoEnPantalla();
	
}
	}





function depositarDinero(){
	var dinero =parseInt( prompt('Ingrese monto a depositar'));
	var saldoAnterior= saldoCuenta;
	sumarDinero(dinero)
	alert("Has depositado:"+dinero+ "\nSaldo anterior:"+ saldoAnterior+"\nSaldo actual:"+saldoCuenta );
	actualizarSaldoEnPantalla();
}

function pagarServicio() {
	var Agua = 350;
	var Telefono = 425;
	var Luz = 210;
	var Internet = 570;
	var servicioAPagar= parseInt( prompt("Ingresa el numero que corresponda con el servicio que queres pagar:\n 1-Agua\n 2-Telefono \n 3- Luz \n 4-Internet"))
	var saldoAnterior=saldoCuenta;
	switch( servicioAPagar){
		case 1:
	        if(Agua>saldoCuenta){
	        	alert("No hay dinero suficiente en tu cuenta para pagar este servicio");
	        	return;
	        }
	        restarDinero(Agua);
	        alert("has pagado el servicio de Agua.\n Saldo anterior: "+ saldoAnterior+"\nDinero descontado"+Agua+"\nSaldo Actual:"+saldoCuenta);
	        break;
	    case 2:
	        if(Telefono>saldoCuenta){
	        	alert("No hay dinero suficiente en tu cuenta para pagar este servicio");
	        	return;
	        }
	        restarDinero(Telefono);
	        alert("has pagado el servicio de Telefono.\n Saldo anterior: "+ saldoAnterior+"\nDinero descontado"+Telefono+"\nSaldo Actual:"+saldoCuenta);
	        break;
	    case 3:
	        if(Luz>saldoCuenta){
	        	alert("No hay dinero suficiente en tu cuenta para pagar este servicio");
	        	return;

	        }
	        restarDinero(Luz);
	        alert("has pagado el servicio de Luz.\n Saldo anterior: "+ saldoAnterior+"\nDinero descontado"+Luz+"\nSaldo Actual:"+saldoCuenta);    
            break;        
        case 4:
	        if(Internet>saldoCuenta){
	        	alert("No hay dinero suficiente en tu cuenta para pagar este servicio");
	        	return;
	        }
	        restarDinero(Internet);
	        alert("has pagado el servicio de Internet.\n Saldo anterior: "+ saldoAnterior+"\nDinero descontado"+Internet+"\nSaldo Actual:"+saldoCuenta);  
            break;
	    default:
	    	alert("servicio inexistente.") ; 

	}
	actualizarSaldoEnPantalla();


}

function transferirDinero() {
	var CuentaAmiga1= 1234567;
	var CuentaAmiga2 = 7654321;
	var MontoATransferir= parseInt( prompt("Ingrese el monto a transferir:"));
	if(MontoATransferir>saldoCuenta){
		alert("No posees esa cantidad de dinero en tu cuenta");
		return;
	}

    var CodigoIngresado= parseInt( prompt("Ingrese el numero de cuenta a transferir:"));

    if(CodigoIngresado !== CuentaAmiga1 && CodigoIngresado !== CuentaAmiga2) {
    	alert("solo puede transferir a una cuenta amiga")
    	return;
    } 
    restarDinero(MontoATransferir)
    alert("Se han transferido:\n"+MontoATransferir+"\nCuenta destino:"+CodigoIngresado);
	actualizarSaldoEnPantalla();
}

function iniciarSesion() {
	var claveIngresada=parseInt( prompt("Ingrese su clave"));
	if(Clave!==claveIngresada){
      alert("clave Incorrecta");
      saldoCuenta=0;
      return;
	}
	alert("Bienvenido:"+ nombreUsuario);



}
function cambiarLimiteDeExtraccion(){
    var limiteExtraccion=parseInt( prompt("Ingrese su nuevo limite de extraccion"));
	
	actualizarSaldoEnPantalla();
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
    
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;


    
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
    

}
actualizarSaldoEnPantalla();