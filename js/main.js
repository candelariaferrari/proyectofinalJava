function PosibleCliente ( nuevoNombre, nuevoEmail, nuevoCelular){
  this.nombre = nuevoNombre;
  this.email = nuevoEmail;
  this.celular = nuevoCelular;

}


let resultado = 0;
function nameClient() {
    var nombre=prompt("Cual es tu nombre?");
    var email=prompt("Cual es tu email?");
    //var numero01= prompt("ingresa el numero que mas te guste, para ver si tenes suerte !");
    //var numero02= prompt("ingrese numero 2");
    if ((nombre == "") || (email == "")) {
        alert("Porfavor ingrese los datos solicitados");
        nameClient();
    } else{
    alert ("gracias " + [nombre] + " por empezar esta experiencia con nosotros!");
    }    
    function sumar(nombre, email) {
        resultado = nombre + " " + email;

        function mostrar(resultado){
            if (resultado.trim() !==""){ // .trim quita espacios en blanco de la cadena 
            console.log("Nuevo cliente  " + resultado);
            //numero01=numero01.replace(",","."); // reemplazo coma por punto para que lo tome el parsefloat
            //alert(parseFloat(numero01) - 2); // parseFloat te respeta los numeros con coma
            }
        }
        mostrar(resultado);

      } sumar(nombre,email);

      let packElegido;
      let pack;
      
      const descuento = 15;
      
      elegirPack()
      function elegirPack(){
          packElegido = parseInt(prompt("Elegí el Pack que mas se ajuste a tus necesidades: 1 - Kasper $50 / 2 - Moro $100 / 3 - Pandy $150"));

          if(packElegido == 1){
            pack = 50;
              alert("Elegiste el pack Kasper");
          }else if (packElegido == 2){
            pack = 100;
              alert("Elegiste el pack Moro");
          } else if (packElegido == 3){
            pack = 150;
            alert("Elegiste el pack Pandy");
          }
      } 
      calcularPrecio()
      function calcularPrecio (){
        calcularPrecio = (pack * descuento) / 100;
          console.log("total de descuento $" + calcularPrecio);
      }
      precioFinal()
      function precioFinal(){
        precioFinal = pack - calcularPrecio;
          alert("tu pack te queda en $" + precioFinal);
      }

} 



  