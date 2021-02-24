class cEmpleados{
    constructor(dEmpleados){
        this.id     = dEmpleados.id;
        this.puesto = dEmpleados.puesto;
    }
}

const PREFIJO  = "cEmpleadosID";

let padreEmpleados = document.getElementById("contenedorEmpleados");
for(let dato of datosEmpleados){
    crearElemento(dato);
}


// funcion para crear un elemento del dom 
function crearElemento(dato){
    let nuevoElemento = document.createElement("div");
    nuevoElemento.id        = PREFIJO + dato.id;
    nuevoElemento.innerHTML = `<h3 class="empleado"> ${dato.id}</h3>
                              <div>${dato.puesto}</div>`;

    padreEmpleados.appendChild(nuevoElemento);

}