class productoPack {
    constructor(datosPacks) {
        this.id = datosPacks.id;
        this.nombre = datosPacks.nombre;
        this.precio = parseFloat(datosPacks.precio);
    }
}
let carritoPack = []; // para la funcion carrito
let padrePack = document.getElementById("contenedorPacks"); // contenedor de pack
let carritopackHtml = document.getElementById("packsCargados"); // contendor de futura lista creada del carrito
// funcion para crear un elemento del dom 
function crearElementoPack() {
    datosPacks.forEach(pack => { // para crear cada pack 
        let nodo = document.createElement('div')
        nodo.innerHTML =    `<h3 class="nombreP"> ${pack.nombre}</h3>
                            <h4 class="precioP">${pack.precio}</h4>
                            <button id="${pack.nombre}" onclick="addToCart(${datosPacks.indexOf(pack)})" class="btnAgregarP"> Agregar al carrito </button>`;
        padrePack.appendChild(nodo);                       // para saber que index es
    })
}
crearElementoPack();

function addToCart(index) { // funcion para el push carrito y sumar la cantidad 
    let pack = datosPacks[index];
    if (carritoPack.length > 0) {
        let noExiste = true;
        for (let i = 0; i < carritoPack.length; i++) { //si no se agrega
            if (pack.nombre === carritoPack[i].nombre) {
                carritoPack[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) { //si se agrega (.push)
            pack.cantidad = 1;
            carritoPack.push(pack);
        }
    } else {
        pack.cantidad = 1;
        carritoPack.push(pack)
    }
    renderCarritoPack();
}
//FUNCION RENDERIZAR CARRITO (GRAFICAR EL ARRAY)
function renderCarritoPack() {
    carritopackHtml.innerHTML = '';
    if (carritoPack.length > 0) {
        carritoPack.forEach(pack => {
            carritopackHtml.innerHTML += `
            <div>
            <h3 class="nombreP"> ${pack.nombre}</h3>
            <h4 class="precioP">${pack.precio * pack.cantidad}</h4>
            <h5>${pack.cantidad}</h5>
            <button id="${pack.nombre}" class="btnAgregarP" type="button" onclick='borradoDePack(${carritoPack.indexOf(pack)})'>Elimnar producto</button>
            </div>
            `
        })
    }
}
// PARA BORRAR (borra de a uno y cuando llega a cero lo quita de la lista)
function borradoDePack(index) {
    carritoPack[index].cantidad = carritoPack[index].cantidad - 1;
    if (carritoPack[index].cantidad <= 0) {
        carritoPack.splice(index, 1)
    }
    renderCarritoPack();
}









/* class Producto {
    constructor(datosPacks) {
        this.id = datosPacks.id;
        this.nombre = datosPacks.nombre;
        this.precio = parseFloat(datosPacks.precio);
        // this.encarrito = datosPacks.encarrito;
    }
    descuento(agregado) {
        this.precio -= agregado;
    }
}
let carrito = []; // para la funcion carrito
let padrePack = document.getElementById("contenedorProductos"); // contenedor de pack
let carritopackHtml = document.getElementById("productosCargados"); // contendor de futura lista creada del carrito
// funcion para crear un elemento del dom 
function crearElemento() {
    datosPacks.forEach(producto => { // para crear cada pack 
        let nodo = document.createElement('div')
        nodo.innerHTML = `<h3 class="nombre"> ${producto.nombre}</h3>
        <h4>${producto.precio}</h4>
        <button id="${producto.nombre}" onclick="addToCart(${datosPacks.indexOf(producto)})" class="btnAgregar"> Agregar al carrito </button>`;
        padrePack.appendChild(nodo);                       // para saber que index es
    })
}
crearElementoPack();

function addToCart(index) { // funcion para el push carrito y sumar la cantidad 
    let producto = datosPacks[index];
    if (carrito.length > 0) {
        let noExiste = true;
        for (let i = 0; i < carrito.length; i++) { //si no se agrega
            if (producto.nombre === carrito[i].nombre) {
                carrito[i].cantidad++;
                noExiste = false;
            }
        }
        if (noExiste) { //si se agrega (.push)
            producto.cantidad = 1;
            carrito.push(producto);
        }
    } else {
        producto.cantidad = 1;
        carrito.push(producto)
    }
    renderCarrito();
}
//FUNCION RENDERIZAR CARRITO (GRAFICAR EL ARRAY)
function renderCarrito() {
    carritopackHtml.innerHTML = '';
    if (carrito.length > 0) {
        carrito.forEach(producto => {
            carritopackHtml.innerHTML += `
            <div>
            <h3 class="nombre"> ${producto.nombre}</h3>
            <h4>${producto.precio}</h4>
            <h5>${producto.cantidad}</h5>
            <button id="${producto.nombre}" class="btnAgregar" type="button" onclick='borradoDeProducto(${carrito.indexOf(producto)})'>Elimnar producto</button>
            </div>
            `
        })
    }
}
// PARA BORRAR (borra de a uno y cuando llega a cero lo quita de la lista)
function borradoDeProducto(index) {
    carrito[index].cantidad = carrito[index].cantidad - 1;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1)
    }
    renderCarrito();
} */