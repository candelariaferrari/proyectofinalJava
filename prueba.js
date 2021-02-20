//OBTENER EL FORMULARIO SOBRE EL QUE VAMOS A ESCUCHAR EL EVENTO SUBMIT
let formulario = document.getElementById("miFormulario");
//DEFINIMOS EL MANEJADOR DE EVENTOS USANDO LA PROPIEDAD onsubmit
formulario.onsubmit = (event) => {
  //EMPLEAMOS EL PARAMETRO EVENT PARA PREVENIR EL COMPORTAMIENTO POR DEFECTO DEL FORMULARIO
  event.preventDefault();
  //CREAMOS UN OBJETO EMPLEANDO LOS VALUE DEL FORMULARIO.
  let dataFormulario = {
    nombre: event.target.children[0].value,
    precio: event.target.children[1].value
  }
  //AGREGAMOS UNA SALIDA EMPLEANDO UN ELEMENTO EXISTENTE EN EL HTML CON ID notificacion.
  let padre = document.getElementById("notificacion");
  padre.innerHTML = `AGREGADO PRODUCTO ${dataFormulario.nombre}`;
  
}

class Producto{
    constructor(datos){
        this.id     = parseInt(datos.id);
        this.nombre = datos.nombre;
        this.precio = parseFloat(datos.precio);
    }
    sumarPrecio(agregado){
        this.precio += agregado;
    }
}
//  SECCION DE DECLARACION DE VARIABLES, CREANDO OBJETOS DESDE INFORMACION ESTATICA
let   productosSeleccionados = [];
const PREFIJO                = "productoID";  
//  SECCION DE GENERACION DE HTML DESDE DATOS ESTATICOS
//  OBTENER EL CONTENEDOR DONDE VAMOS A AGREGAR LOS NUEVOS ELEMENTOS 
let contenedorPadre = document.getElementById("contenedorProductos");
//  AGREGAMOS UN NUEVO ELEMENTO AL HTML POR CADA REGISTRO DE DATO ESTATICO
for(let dato of DATOS){
  crearElemento(dato);
}
//  FUNCION PARA CREAR UN ELEMENTO DEL DOM
function crearElemento(dato){
  let nuevoElemento = document.createElement("div");
  nuevoElemento.id         = PREFIJO + dato.id;
  //MODIFICAMOS EL INNERHTML DEL ELEMENTO AGREGADO
  nuevoElemento.innerHTML  =` <h3 style='color:green' class='claseTitulo'>${dato.nombre}</h3>
                              <h4 class="miClaseTitulo">$ ${dato.precio}</h4>
                              <button id="${dato.id}">Comprar</button>`;
  //LO AGREGAMOS AL DOM COMO HIJO DEL contenedor Padre
  contenedorPadre.appendChild(nuevoElemento);
  //BUSCAMOS EL BOTON CREADO
  let boton = document.getElementById(dato.id);
  //ASOCIAMOS AL EVENTO CLICK EL MANEJADOR DE EVENTOS
  boton.onclick = () => {
      alert("PRODUCTO VENDIDO" + dato.id);
  };
}