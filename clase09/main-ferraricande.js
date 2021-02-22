//primer paso - asosciar evento (en cual lo escucho)
//let miBoton = document.getElementById("btnPrueba");
// segundo paso - asociar el evento al manejador de eventos
/* // OPCION 1
miBoton.onclick = function(){
    alert("respuesta al click");
}
// OPCION 2
miBoton.addEventListener('click', ()=> {
    alert(" respuesta desde addEvent ");
})
// OPCION DESDE VARIABLE 
let eventoNombre = 'click';
miBoton.addEventListener(eventoNombre, ()=>{
    alert(" respuesta desde variable  ");

})
console.dir(miBoton);*/

/* let  formulario = document.getElementById("pruebaFormulario");
formulario.onsubmit = (event) => {
    event.preventDefault (); // evita el comportamiento por defecto del form de "volver a cargar la pag"
    // para enviar la info del formulario 
    let dataFormulario = {
        nombre: event.target.children[0].value,
        precio: event.target.children[1].value
    }
    let padre = document.getElementById("notificacion"); // salida 
    padre.innerHTML = `agregado producto ${dataFormulario.nombre}`;
    console.log(dataFormulario); // para ver la info del formulario 
    /* console.log(event.target.children[0].value); // "text" en la consola me muestra los valores obtenidos
    console.log(event.target.children[1].value);// "number" en la consola me muestra los valores obtenidos

} */
class Producto{
    constructor(datosProductos){
        this.id     = datosProductos.id;
        this.nombre = datosProductos.nombre;
        this.precio = parseFloat(datosProductos.precio);
    }

    descuento(agregado){
        this.precio -= agregado;
    }
}

let   productosSeleccionados = [];
const PREFIJO                = "productoID";

let padre = document.getElementById("contenedorProductos");
for(let dato of datosProductos){
    crearElemento(dato);

}


// funcion para crear un elemento del dom 
function crearElemento(dato){
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id        = PREFIJO + dato.id;
    nuevoElemento.innerHTML = `<h3 class="nombre"> ${dato.nombre}</h3>
                              <h4>${dato.precio}</h4>
                              <button id="${dato.nombre}"> comprar </button>`;

    padre.appendChild(nuevoElemento);
    let boton = document.getElementById(dato.nombre);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        alert ("producto vendido " + dato.nombre)
    };
}