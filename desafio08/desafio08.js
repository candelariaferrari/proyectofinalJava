const datosProductos =[{id: "Diseño gráfico", nombre:"Logo", precio: 1000 },
                 {id: "Diseño gráfico", nombre:"Identidad visual", precio: 6000 },
                 {id: "Diseño gráfico", nombre:"Flyer", precio: 700 },
                 {id: "Diseño gráfico", nombre:"Redes sociales", precio: 5500 },
                 {id: "Diseño web", nombre:"Landing page", precio: 10000 },
                 {id: "Diseño web", nombre:"Web corporativa", precio: 45000 },
                 {id: "Diseño web", nombre:"Landing subcripcion", precio: 5000 }
                ];

class Producto{
    constructor(datosProductos){
        this.id     = datosProductos.id;
        this.nombre = datosProductos.nombre;
        this.precio = parseFloat(datosProductos.precio);
    }

    descuento(agregado){
        this.precio += agregado;
    }
}
let listaProductos = [];
listaProductos.push(new Producto(datosProductos[0]));
listaProductos.push(new Producto(datosProductos[1]));
listaProductos.push(new Producto(datosProductos[2]));
listaProductos.push(new Producto(datosProductos[3]));
listaProductos.push(new Producto(datosProductos[4]));
listaProductos.push(new Producto(datosProductos[5]));
listaProductos.push(new Producto(datosProductos[6]));



let padre = document.getElementById("contenedorProductos");
for(let producto of listaProductos){

    producto.descuento(500);
    let contenedor = document.createElement("div");
    contenedor.classList.add("contentProduct");
    contenedor.innerHTML = `<div class = "categoria">${producto.id}</div>
                            <div class = "nombre">${producto.nombre}</div>
                            <div  class ="precio">$${producto.precio}</div>`;
    padre.appendChild(contenedor);
}



/* 
Ejemplos de la clase 
console.dir(document);
console.dir(document.head);
console.dir(document.body);

let primerContenedor = document.getElementById("contenedorUno");
primerContenedor.innerHTML = "hola coder";
console.log(primerContenedor.innerHTML);


let parrafos = document.getElementsByClassName("parrafoUno");
console.log(parrafos);

for (const parrafoUno of parrafos) {
    parrafoUno.innerHTML = parrafoUno.innerHTML + "<strong>estoy sumando cosas</strong>";
    console.log(parrafoUno.innerHTML);
} */