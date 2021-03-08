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

let  formulario = document.getElementById("pruebaFormulario");
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
*/
} 
class Producto{
    constructor(datosProductos){
        this.id     = datosProductos.id;
        this.categoria     = datosProductos.categoria;
        this.nombre = datosProductos.nombre;
        this.precio = parseFloat(datosProductos.precio);
        this.encarrito = datosProductos.encarrito;
    }
}
class Empleados{ //DESAFIO  COMPLEMENTARIO 
    constructor(dEmpleados){
        this.id     = dEmpleados.id;
        this.puesto = dEmpleados.puesto;
    }
}
let   productosSeleccionados = [];
const PREFIJO                = "productoID";
const PREFIJOempleados  = "dempleadosID"; //DESAFIO  COMPLEMENTARIO 

let padre = document.getElementById("contenedorProductos");
this.cargarProductos();

let carrito = document.getElementById("productosCargados");
let padreEmpleados = document.getElementById("contenedorEmpleados"); //desafio complementario

for(let empleado of dEmpleados){ //DESAFIO  COMPLEMENTARIO 
    crearElementoEmpleado(empleado);
}
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
    let nuevoElementoCarrito = document.createElement("div")
    nuevoElementoCarrito.id        = PREFIJO + dato.id;
    nuevoElementoCarrito.innerHTML = `<div class="cCarrito">
                                        <h3 class="nombreCarrito"> ${dato.nombre} </h3>
                                        <h4 class="precioCarrito">$${dato.precio * dato.cantidad}</h4>
                                        <h5 class="cantidad"> cantidad: ${dato.cantidad}</h5>
                                      </div>
                                      <div class="cBtn">
                                        <button id="${dato.id}" class="btnEliminar"> Elimnar producto </button>
                                      </div>`;

    carrito.appendChild(nuevoElementoCarrito);
    let boton = document.getElementById(dato.id);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        dato.encarrito = false;
        dato.cantidad = 0;
        console.log("Producto eliminado " + dato.nombre + "\nCategoria: " +dato.categoria);
        this.cargarCarrito();
    };

}
function cargarCarrito(){
    if (carrito.hasChildNodes()){
        while (carrito.firstChild){
            carrito.removeChild(carrito.firstChild);
        }
    }
    for(let dato of datosProductos){
        if (dato.encarrito == true){
           
            crearCarrito(dato);
        }
    }
}

/* DESAFIO COMPLEMENTARIO */

function crearElementoEmpleado(empleado){
    let nuevoElementoE = document.createElement("div");
    nuevoElementoE.id        =  PREFIJOempleados + empleado.id;
    nuevoElementoE.innerHTML = `<div class="cEmpleados">
                                    <h3 class="empleado"> ${empleado.id}</h3>
                                </div>
                                <div class="puesto">${empleado.puesto}</div>`;

    padreEmpleados.appendChild(nuevoElementoE);

} 