let resultado = 0;
function nameClient() {
    var nombre=prompt("Cual es tu nombre?");
    var email=prompt("Cual es tu email?");
    if ((nombre == 0) && (email == 0)) {
        alert("Porfavor ingrese los datos solicitados");
    } else{
    alert ("gracias " + [nombre] + " por empezar esta experiencia con nosotros!");
    }    
    function sumar(nombre, email) {
        resultado = nombre + " " + email;

        function mostrar(resultado){
            console.log("Nuevo cliente  " + resultado);
        }
        mostrar(resultado);

      } sumar(nombre,email);

      

}   
 
  