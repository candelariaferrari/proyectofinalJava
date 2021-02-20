

/* function Consulta ( nuevoNombre, nuevoEmail, nuevoConsulta){
    this.nombre = nuevoNombre;
    this.email = nuevoEmail;
    this.tipoconsulta = nuevoConsulta;

}


let nombreContacto = prompt ("Ingresa tu Nombre y Apellido");
let emailContacto = prompt ("Ingresa tu email");
let consultaContacto = prompt("Ingresa tu tipo de consulta: 1 Diseño gráfico - 2 Diseño web - 3 Quiero formar parte de Pandy");


const nuevaConsulta = new Consulta (nombreContacto, emailContacto, consultaContacto);
console.log(nuevaConsulta);

let queConsulta = "tipoconsulta";
for (let responderConsulta in nuevaConsulta){
    if (queConsulta == responderConsulta){
        alert("Gracias " + nombreContacto + " pronto recibiras tu respuesta al email sobre la consulta " + nuevaConsulta[responderConsulta])
        console.log (nuevaConsulta[responderConsulta]);
    }
}
 */

function Consulta ( nuevoNombre, nuevoEmail, nuevoConsulta){
    this.nombre = nuevoNombre;
    this.email = nuevoEmail;
    this.tipoconsulta = nuevoConsulta;

}


let nombreContacto = prompt ("Ingresa tu Nombre y Apellido");
let emailContacto = prompt ("Ingresa tu email");
let consultaContacto = prompt("Ingresa tu tipo de consulta: 1 Diseño gráfico - 2 Diseño web - 3 Quiero formar parte de Pandy");


const nuevaConsulta = new Consulta (nombreContacto, emailContacto, consultaContacto);
console.log(nuevaConsulta);

let queConsulta = "tipoconsulta";
for (let responderConsulta in nuevaConsulta){
    if (queConsulta == responderConsulta){
        alert("Gracias " + nombreContacto + " pronto recibiras tu respuesta al email sobre la consulta " + nuevaConsulta[responderConsulta])
        console.log (nuevaConsulta[responderConsulta]);
    }
}