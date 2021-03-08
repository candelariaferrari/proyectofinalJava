//  PLANTILLA CLASE 13 - jQuery ANIMACIONES
//POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML SELECCIONADO.
for(let robot of DATOSROBOTS){
  $("#contenidoGenerado").append(crearComponente(robot));
}
//ESCUCHAMOS EL EVENTO CLICK DE TODOS LOS BOTES CUYOS ID CONTIENE LA SUBCADENA "amigo"
$('button[id^="amigo"]').click((e) =>{
  //  OBTENEMOS EL NOMBRE DE AMIGO SEPARANDO LA CADENA DEL ID
  let nombreAmigo = e.target.id.substr(5).toUpperCase();
  $("#notificacion").html(`AGREGASTE A ${nombreAmigo} COMO AMIGO`);
})

//FUNCION QUE DEFINE LA ESTRUCTURA DEL HTML A AGREGAR EN EL DOCUMENTO
function crearComponente(robot){
  return `<div class="column">
          <img src="${robot.avatar}">
          <div class="container">
            <h3>${robot.nombre}</h3>
            <button id="amigo${robot.nombre}">AGREGA</button>
          </div>
          </div>`;
}
