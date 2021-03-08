//  PLANTILLA CLASE 12 - jQuery II
//POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML ASOCIADA.
for (let robot of DATOSROBOTS) {
  //LLAMADA A LA FUNCIÓN DE generarHTML POR CADA ROBOT. PASAMOS LA INFORMACION DEL "robot" POR PARÁMETRO.
  generarHTML(robot);
}
//FUNCION PARA AGREGAR UNA ESTRUCTURA HTML EMPLEANDO LA INFORMACIÓN RECIBIDA POR PARÁMETRO.
function generarHTML(robot) {
  $("#contenidoGenerado").append(`<div>
                                    <input value =${robot.id} hidden>
                                    <img src="${robot.avatar}"><br>
                                    <h5>${robot.nombre}</h5>
                                    <button class="agregarAmigo">AGREGAR</button>
                                  </div>`);
}
$(document).ready(function () {
  $(".agregarAmigo").click(function (e) {
    let idAmigoActual = $(e.target).parent().children()[0].value;
    //BUSCAMOS LA INFORMACIÔN DEL AMIGO SELECCIONADO EN NUESTRO ARRAY DE DATOS
    const infoAmigo = DATOSROBOTS.find(amigo => amigo.id == idAmigoActual);
    //AGREGAMOS LA SELECCION A OTRA ARRAY CON LA INTENCION DE DISTINGUIR SELECCIONADOS Y NO SELECCIONADOS
    AMIGOSAGREADOS.push(infoAmigo);
    //SALIDA DE LA INFORMACIÒN DEL AMIGO SELECCIONADO POR EL USUARIO
    $("#notificacion").html(`<h2>Amigo Agregado: ${infoAmigo.nombre}</h2>
                                <h3> Cantidad de Amigos: ${AMIGOSAGREADOS.length} </h3>`);
  });

  $('img').click(function (e) {
    //USO DE TRIGGER PARA DISPARAR EL MISMO COMPORTAMIENTO CON AL CLICKEAR EL BOTON "AGREGAR" 
    $(e.target).parent().children().last().trigger('click');
  });

});


