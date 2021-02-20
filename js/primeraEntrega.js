let resultado = 0;
let nombre;
let email;
 /* PACK */
let packElegido;
let pack;
const descuento = 15;
/* Consulta */ 
let tipoconsulta;
let celular;

function PosibleCliente ( nuevoNombre, nuevoEmail){
  this.nombre = nuevoNombre=prompt("Cual es tu Nombre y Apellido?");
  this.email = nuevoEmail=prompt("Cual es tu email?");

  if ((this.nombre == "") || (this.email == "")) {
    alert("Porfavor ingrese los datos solicitados");
    PosibleCliente();
  } else{
    alert ("Gracias " + [this.nombre] + " por empezar esta experiencia con nosotros!");
  };

  function sumar(nombre, email) {
    resultado = "Nombre: " + nombre + " " + "Email: " + email;

    function mostrar(resultado){
      if (resultado.trim() !==""){ // .trim quita espacios en blanco de la cadena 
        console.log("Posible cliente  " + resultado);
        //numero01=numero01.replace(",","."); // reemplazo coma por punto para que lo tome el parsefloat
        //alert(parseFloat(numero01) - 2); // parseFloat te respeta los numeros con coma
      };
    };
    mostrar(resultado);
  }; 
  sumar(this.nombre,this.email);   
} // termina la funcion posible

/* PACK */
function clickPack() {
  elegirPack();
  function elegirPack(){
    packElegido = parseInt(prompt(this.nombre + " elegí el Pack que mas se ajuste a tus necesidades: \n 1 - Kasper $50 \n 2 - Moro $100 \n 3 - Pandy $150"));

    if(packElegido == 1){
      pack = 50;
      alert("Elegiste el pack Kasper");
    }else if (packElegido == 2){
      pack = 100;
      alert("Elegiste el pack Moro");
    } else if (packElegido == 3){
      pack = 150;
      alert("Elegiste el pack Pandy");
    } else{
      alert("Porfavor ingrese los datos solicitados");
      elegirPack();
    };
  };

  calcularPrecio();

  function calcularPrecio (){
    calcularPrecio = (pack * descuento) / 100;
    console.log("Total de descuento $" + calcularPrecio);
  }

  precioFinal();

  function precioFinal(){
    precioFinal = pack - calcularPrecio;
    alert(this.nombre + " tu pack te queda en $" + precioFinal);
  };
}

/* Consulta */

function Consulta (){
  this.celular = parseFloat(prompt( "Porfavor ingresa tu numero de celular:"));
  this.tipoconsulta = this.Cargar(this.nombre, this.email); 
  console.log("Consulta Posible  \n Cliente: " + this.nombre + "\n Email: " + this.email + "\n Consulta: " + this.tipoconsulta + "\n Celular: " + this.celular);
}

function Cargar(nombre,email){
  let especificaConsulta;
  especificaConsulta = parseInt(prompt ("Ingresa tu tipo de consulta: 1 Diseño gráfico - 2 Diseño web - 3 Quiero formar parte de Pandy"));
  if(especificaConsulta == 1){
    alert( "Gracias "+ nombre + " pronto responderemos tu consulta al email " + email + " sobre Diseño gráfico");
  } else if (especificaConsulta == 2){
    alert( "Gracias "+ nombre +  " pronto responderemos tu consulta al email " + email + " sobre Diseño Web");
  } else if (especificaConsulta == 3){
    alert( "Gracias "+ nombre +  " pronto responderemos tu consulta al email " + email + " sobre Trabajar en Pandy");
  } else {
    alert( nombre + " debes seleccionar una consulta valida");
    this.Cargar(nombre);
    return;
  };
  return especificaConsulta;
}    


