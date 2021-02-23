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

 /*let  formulario = document.getElementById("pruebaFormulario");
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
        this.encarrito = datosProductos.encarrito;
    }

    descuento(agregado){
        this.precio -= agregado;
    }
}

let   productosSeleccionados = [];
const PREFIJO                = "productoID";

let padre = document.getElementById("contenedorProductos");
this.cargarProductos();

let carrito = document.getElementById("productosCargados");

// funcion para crear un elemento del dom 
function crearElemento(dato){
    
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id        = PREFIJO + dato.id;
    nuevoElemento.innerHTML = `<h3 class="nombre"> ${dato.nombre}</h3>
                              <h4>${dato.precio}</h4>
                              <button id="${dato.nombre}" class="btnAgregar" > Agregar al carrito </button>`;

    padre.appendChild(nuevoElemento);
    let boton = document.getElementById(dato.nombre);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        dato.encarrito = true;
        dato.cantidad = dato.cantidad + 1;
        this.cargarCarrito();
        console.log("Producto agregado " + dato.nombre + "\nCategoria: " +dato.nombre);
    };

}


function cargarProductos(){
    for(let dato of datosProductos){
        if (dato.encarrito == false){
            crearElemento(dato);
        }
    }
}
function crearCarrito(dato){
    
    let nuevoElementoCarrito = document.createElement("div");
    nuevoElementoCarrito.id        = PREFIJO + dato.id;
    nuevoElementoCarrito.innerHTML = `<h3> ${dato.nombre}</h3>
                              <h4>${dato.precio}</h4>
                              <h5>${dato.cantidad}</h5>
                              <button id="${dato.id}" class="btnEliminar" > Elimnar producto </button>`;

    carrito.appendChild(nuevoElementoCarrito);
    let boton = document.getElementById(dato.id);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        dato.encarrito = false;
        dato.cantidad = 0;
        console.log("Producto eliminado " + dato.nombre + "\nCategoria: " +dato.nombre);
    };

}
function cargarCarrito(){
    for(let dato of datosProductos){
        if (dato.encarrito == true){
            if (carrito.hasChildNodes()){
                var children = carrito.children;
                console.log(children);
                while (carrito.firstChild){
                    //console.log(carrito.firstChild.nodeName);
                    carrito.removeChild(carrito.firstChild);

                }
                /* for ( var i = 0, i <= children.length, i++){

                } */
            }
            crearCarrito(dato);
        }
    }
}