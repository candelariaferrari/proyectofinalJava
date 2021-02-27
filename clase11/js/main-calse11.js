//  PLANTILLA CLASE 11 - jQuery
/* crear boton */ 
const botonPrueba = document.getElementById('cBoton');
const boton = document.createElement('button');

botonPrueba.appendChild(boton);

boton.textContent = 'Queres conocernos ? (click)'

 /* boton conocenos */ 
 $(document).ready(function(){ 
  $('button').on('click',function(){
     $('#equipo').toggle();
  });
});




/* LISTA DE EQUIPO */ 
for(let person of dataNosotros){
  generarHTMLjQuery(person);
}

//FUNCION PARA GENERAR HTML USANDO jQUERY
function generarHTMLjQuery(person){
  $('#contenidoGenerado').prepend(`<div id="Contenedor${person.id}">
                                  <img src="${person.avatar}" class="imgPerson"><br>
                                  <h3 class="nombrePerson">${person.nombre}</h3>
                                  <h1 class="puestoPerson">${person.puesto}</h1>
                                  <a class="linkedinPerson" href="${person.linkedin}" target="_blank">Linkedin</a>
                                </div>`);
}

window.addEventListener('load', () => {
  console.log("Equipo");
})





/* FUNCION PARA AGREGAR UNA ESTRUCTURA HTML CON JS PLANO/VANILLA
function generarHTML(person){
  let padre            = document.getElementById("contenidoGenerado");
  let contenedor       = document.createElement("div");
  contenedor.innerHTML = `<img src="${person.avatar}"><br><h5>${person.nombre}</h5>`;
  padre.appendChild(contenedor);
}
 // PODEMOS SELECCIONAR UN CONJUNTO DE ELEMENTOS CON LA MISMA CLASE
let selectorVariable = $(".titulos");
// Y AGREGARLES A TODOS LA MISMA ESTRUCTURA HTML CON append
$(".titulos").append("<p> AMIGO DISPONIBLE </p>"); */
/* 
// TAMBIEN PODEMOS AGREGAR UN ELEMENTO COMO ULTIMO HIJO DE LA ETIQUETA BODY CON APPEND
$('body').append("HOLA CODER AL FINAL");
// O AGREGAR UN ELEMENTO COMO PRIMER HIJO DE LA ETIQUETA BODY CON PREPEND
$('body').prepend("HOLA CODER AL PRINCIPIO");
 */