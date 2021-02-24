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
class Empleados{ //DESAFIO  COMPLEMENTARIO 
    constructor(dEmpleados){
        this.id     = dEmpleados.id;
        this.puesto = dEmpleados.puesto;
    }
}

let   productosSeleccionados = [];
let carrito = [];
const PREFIJO  = "productoID";
const PREFIJOempleados  = "dempleadosID";

let padre = document.getElementById("contenedorProductos");
let cCarrito = document.getElementById("productosCargados");
let padreEmpleados = document.getElementById("contenedorEmpleados"); //desafio complementario

for(let dato of datosProductos){
    crearElemento(dato);

}

for(let empleado of dEmpleados){ //DESAFIO  COMPLEMENTARIO 
    crearElementoEmpleado(empleado);
} 

 // funcion para crear un elemento del dom 
function crearElemento(dato){
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id        = PREFIJO + dato.id;
    nuevoElemento.innerHTML = `<h3 class="nombre"> ${dato.nombre}</h3>
                              <h4>${dato.precio}</h4>
                              <button id="${dato.nombre}"  class="btnAgregar" > Agregar al carrito </button>`;

    padre.appendChild(nuevoElemento);
    let boton = document.getElementById(dato.nombre);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        carrito.push(crearElemento(dato))
        cCarrito.appendChild(nuevoElemento)
        console.log("Producto agregado " + dato.nombre + "\nCategoria: " +dato.id);
    };

} 
  


/* DESAFIO COMPLEMENTARIO */

function crearElementoEmpleado(empleado){
    let nuevoElementoE = document.createElement("div");
    nuevoElementoE.id        =  PREFIJOempleados + empleado.id;
    nuevoElementoE.innerHTML = `<h3 class="empleado"> ${empleado.id}</h3>
                              <div>${empleado.puesto}</div>`;

    padreEmpleados.appendChild(nuevoElementoE);

} 