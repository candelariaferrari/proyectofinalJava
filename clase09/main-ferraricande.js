//primer paso - asosciar evento (en cual lo escucho)
let miBoton = document.getElementById("btnPrueba");
// segundo paso - asociar el evento al manejador de eventos
/* // OPCION 1
miBoton.onclick = function(){
    alert("respuesta al click");
}
// OPCION 2
miBoton.addEventListener('click', ()=> {
    alert(" respuesta desde addEvent ");
})*/
// OPCION DESDE VARIABLE 
let eventoNombre = 'click';
miBoton.addEventListener(eventoNombre, ()=>{
    alert(" respuesta desde variable  ");

})
console.dir(miBoton);

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
/* let listaProductos = [];
listaProductos.push(new Producto(datosProductos[0]));
listaProductos.push(new Producto(datosProductos[1]));
listaProductos.push(new Producto(datosProductos[2]));
listaProductos.push(new Producto(datosProductos[3]));
listaProductos.push(new Producto(datosProductos[4]));
listaProductos.push(new Producto(datosProductos[5]));
listaProductos.push(new Producto(datosProductos[6])); */

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
    nuevoElemento.innerHTML = `<h3> ${dato.nombre}</h3>
                              <h4>${dato.precio}</h4>
                              <button id="${dato.id}"> comprar </button>`;

    padre.appendChild(nuevoElemento);
    let boton = document.getElementById(dato.id);
    boton.onclick = () => { // para que se vea el nombre del producto " comprado "
        alert ("producto vendido " + dato.nombre)
    };
}