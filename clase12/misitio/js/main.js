//  PLANTILLA CLASE 12 - jQuery II


//POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML ASOCIADA.
for(let robot of DATOSROBOTS){
  //LLAMADA A LA FUNCIÓN DE generarHTML POR CADA ROBOT. PASAMOS LA INFORMACION DEL "robot" POR PARÁMETRO.
  generarHTML(robot);
}

//FUNCION PARA AGREGAR UNA ESTRUCTURA HTML EMPLEANDO LA INFORMACIÓN RECIBIDA POR PARÁMETRO.
function generarHTML(robot){
  /*let padre            = document.getElementById("contenidoGenerado");
  let contenedor       = document.createElement("div");
  contenedor.innerHTML = `<img src="${robot.avatar}"><br><h5>${robot.nombre}</h5>`;
  padre.appendChild(contenedor);
} */

  $("#contenidoGenerado").append(`<div>
                                <img src="${robot.avatar}">
                                <h5> ${robot.nombre}</h5>
                                <button class="agregarAmigo">Agregar</button>
                                </div>`);
}

$(document).ready(function () { 
  /* $(".agregarAmigo").on("click",function(){ //determina porque se cumpla un evento 
    console.log("agregado");
  }) */

  
  // METODO TRIGGER 
  $.$(".agregarAmigo").click(function (e) { 
      let idAmigoActual = $(e.target).parent();    
      console.log(idAmigoActual);
  });
});

// METODO TRIGGER 
//  (envio de formulario)
/* dispara un evento especifico y el compportamiento predeterminado de un evento para los elementos seleccionados */ 
// activar eventos de otros elementos 
// tiene que haber un manejador de eventos si o si 
