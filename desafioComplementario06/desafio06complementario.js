/* DESAFIO COMPLEMENTARIO */ 
const familia = [{ nombre: "Nancy", edad: 52, mesDeCumple: 10},
                 { nombre: "Wado", edad: 58, mesDeCumple: 1},
                 { nombre: "Cori", edad: 69, mesDeCumple: 1},
                 { nombre: "Julian", edad: 29, mesDeCumple: 5},
                 { nombre: "Cande", edad: 28, mesDeCumple: 11},
                 { nombre: "Silvia", edad: 55, mesDeCumple: 12},
                ];

const menos30 = familia.filter(familia => familia.edad < 30);
console.log(menos30);

const anioNacimiento = familia.map(familia => familia.edad -= 2021);
console.log(anioNacimiento);


/* ejercicio 02 */

var valorTrabajosDG = [
    {nombreTrabajo: "Logo", precio: 1000 },
    {nombreTrabajo: "Identidad de marca", precio: 5000 },
    {nombreTrabajo: "flyer", precio: 700 },
    {nombreTrabajo: "redes sociales", precio: 3500 },
    {nombreTrabajo: "tarjeta personal", precio: 500 },
    ];
    valorTrabajosDG.sort(function(a,b){
        if (a.precio > b.precio) {
            return 1;
          }
          if (a.precio < b.precio) {
            return -1;
          }
          return 0;
        });
        console.log(valorTrabajosDG); // menor a mayor

var valorTrabajosDw = [
    {nombreTrabajo: "Landing", precio: 8000 },
    {nombreTrabajo: "Web corporativa", precio: 20100 },
    {nombreTrabajo: "Landing Promocional", precio: 5000 },
    {nombreTrabajo: "Plataforma", precio: 55000 },
    {nombreTrabajo: "app", precio: 40500 },
    ];
    valorTrabajosDw.sort(function(a,b){
        if (a.precio > b.precio) {
            return -1;
            }
            if (a.precio < b.precio) {
            return 1;
            }
            return 0;
        });
        console.log(valorTrabajosDw); // mayor a menor 



