//  EJEMPLO CLASE 13 - jQuery ANIMACIONES
//CREAMOS UNA ARRAY PARA GUARDAR LOS ARRAY SELECCIONADOS
let amigosAgregado = []; 
//ANIMAMOS TODOS LOS H2 CON ANIMATE (ES POSIBLE INDENTAR EL ENCADENADO DE METODOS). USAMOS DELAY PARA ESPERAR X MILISENGUNDOS
$("h2")
    .animate({fontSize: '2cm', opacity:'0.4'}, "slow",()=>{
      console.log("FIN DE PRIMERA ANIMACION");
    })
      .delay(4000)
        .animate({fontSize: '1cm', opacity:'1'},"slow",()=>{
          console.log("FIN DE SEGUNDA ANIMACION");
});

// OCULTAMOS EL CONTEDOR DE NOTIFICACIONES PARA PODER MOSTRARLO LA PRIMERA VEZ CON FADEIN
$("#notificacion").hide();
//CREAMOS UNA ESTRUCTURA HTML POR CADA ROBOT EN DATOSROBOTS
for(let robot of DATOSROBOTS){
  $("#contenidoGenerado").append(crearComponente(robot));
}
//ESCUCHAMOS EL EVENTO CLICK DE TODOS LOS BOTES CUYOS ID CONTIENE LA SUBCADENA "amigo"
$('button[id^="amigo"]').click((e) =>{
  //  OBTENEMOS EL NOMBRE DE AMIGO SEPARANDO LA CADENA DEL ID
  let nombreAmigo = e.target.id.substr(5).toUpperCase();
  //  MODIFICAMOS EL innerHTML DEL ELEMENTO CON ID notificacion
  $("#notificacion").html(`AGREGASTE A ${nombreAmigo} COMO AMIGO`);
  //  MOSTRAMOS #notifcacion con FADE IN, LUEGO LO OCULTAMOS CON fadeOut. AL CONCLUIR EL fadeOut OCULTAMOS CON slideUp EL DIV DEL AMIGO AGREGADO
  $("#notificacion").fadeIn(400).fadeOut(400,()=>{
    $(`#${nombreAmigo}`).slideUp("slow");
    // AGREGAMOS EL NOMBRE DEL AMIGO AL ARRAY PARA PODER VERIFICAR EN OTRA PARTE DEL PROGRAMA QUE FUE AGREGADO
    amigosAgregado.push(nombreAmigo);
    // REALIZAMOS LA SALIDA DE LOS AMIGOS AGREGADOS CON EL METODO amigosHTML()
    amigosHTML();
  });
})

//  FUNCION QUE DEFINE LA ESTRUCTURA DEL HTML A AGREGAR EN EL DOCUMENTO 
function crearComponente(robot){
  return `<div id="${robot.nombre.toUpperCase()}" class="column">
          <img src="${robot.avatar}">
          <div class="container">
            <h3>${robot.nombre}</h3>
            <button id="amigo${robot.nombre}">AGREGA</button>
          </div>
          </div>`;
}
//  FUNCION QUE GENERA UNA SALIDA CON TODOS LOS AMIGOS SELECIONADOS
function amigosHTML(){
  // DECLARAMOS UNA VARIABLE AUXILIAR PARA GUARDAR LA ESTRUCTURA DE LA NUEVA SALIDA
  let html = '';
  // RECORREMOS DATOSROBOTS CON FOR..OF
  for (const amigo of DATOSROBOTS) {
     //NOS PREGUNTAMOS SI EN EL ARRAY DE LOS AMIGOS AGREGADOS EXISTE EL NOMBRE DEL AMIGO ACTUAL (amigo) EN MAYUSCULA
     if(amigosAgregado.includes(amigo.nombre.toUpperCase())){
        //SI EXISTE CONCATENAMOS UNA NUEVA TEMPLATE A html (+=)
        html += `<h3>${amigo.nombre}</h3>`;
     }
  }
  //PARA FINALIZAR AGREGAMOS EL CONTENIDO DE "html" COMO SALIDA EN "#amigos"
  $("#amigos").html(html);
}