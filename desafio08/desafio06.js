const productos =[{categoria: "Diseño gráfico", nombre:"Logo", precio: 1000 },
                 {categoria: "Diseño gráfico", nombre:"Identidad visual", precio: 6000 },
                 {categoria: "Diseño gráfico", nombre:"Flyer", precio: 700 },
                 {categoria: "Diseño gráfico", nombre:"Redes sociales", precio: 5500 },
                 {categoria: "Diseño web", nombre:"Landing page", precio: 10000 },
                 {categoria: "Diseño web", nombre:"Web corporativa", precio: 45000 },
                 {categoria: "Diseño web", nombre:"Landing subcripcion", precio: 5000 }
                ];

const filtroGrafico = productos.filter(elemento => elemento.categoria.includes("gráfico"));
console.log(filtroGrafico);

const filtroWeb = productos.filter(elemento => elemento.categoria.includes("web"));
console.log(filtroWeb);




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