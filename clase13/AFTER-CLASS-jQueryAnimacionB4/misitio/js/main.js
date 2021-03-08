//  PLANTILLA CLASE 13 - AFTER CLASS

$('#notificacion').hide();
$('#resultados').hide();

$('#busquedaForm').submit(function (e) { 
    e.preventDefault();
    // MODIFICACION DE CONTENIDO HTML DEL DIV NOTIFICACION
    let criterioBusqueda = $('#busquedaForm input').first().val().toUpperCase();
    console.log(criterioBusqueda);
    //const busqueda1 = DATOSAPP.find(elemento => elemento.pais.toUpperCase() == criterioBusqueda);
    const filtro1   = DATOSAPP.filter(elemento => elemento.pais.toUpperCase() == criterioBusqueda);
    //console.log($("#busquedaForm input")[0].value);
    $('#notificacion').html(`<div class="alert alert-primary" role="alert">
                                Alquileres Buscados ${criterioBusqueda.toUpperCase()}
                            </div>`);
    
    //$('#resultados').hide();
    $('#resultados').html(salidaResultado(filtro1));
    $('#resultados')
        .slideDown(1000)
            .delay(2000)
                .slideUp(1000);
    // SALIDA ANIMADA DEL DIV NOTIFICACION                           
    $('#notificacion').fadeIn(1000, function(){
        //alert("LA ANIMACION TERMINO");
        $('#notificacion').fadeOut(1000);
    });                        
});

function salidaResultado(listadoResultados){
    let estructuraGenerada = '';
    for (const resultado of listadoResultados) {
      estructuraGenerada +=  `<div class="card" style="width: 18rem;">
                                <div class="card-body">
                                    <h6 class="card-subtitle mb-2 text-muted">${resultado.calle}</h6>
                                    <span class="badge badge-dark">${resultado.pais}</span>
                                    <span class="badge badge-info">${resultado.codigo}</span>
                                    <span class="badge badge-light">${resultado.ciudad}</span>
                                </div>
                            </div><hr>`;
    }
    return estructuraGenerada;

}
