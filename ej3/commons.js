/**3. Crear un array de 5 elementos que representan personas, 
 * donde cada elemento tiene las propiedades: nombre, edad y ciudad.
1. Mostrar en la página las personas mayores de edad en forma de lista html.
2. Mostrar en la página las personas que son de Sevilla en forma de lista html.
 */

const n_fijo = 5;

let persona = {
  Nombre: "pepe",
  Edad: "12",
  Ciudad: "Sevilla",
};

let persona2 = {
  Nombre: "Juan",
  Edad: "12",
  Ciudad: "Alaska",
};

let persona3 = {
  Nombre: "Pepa",
  Edad: "24",
  Ciudad: "Sevilla",
};

let persona4 = {
  Nombre: "Juana",
  Edad: "24",
  Ciudad: "Alaska",
};

let persona5 = {
  Nombre: "Steve",
  Edad: "25",
  Ciudad: "Alaska",
};

var array = [persona, persona2, persona3, persona4, persona5];

document.body.innerHTML = "<ul>";

array.forEach((element) => {
  if (element.Edad > 18) {
    document.body.innerHTML += `<li>${element.Nombre}, ${element.Edad}, ${element.Ciudad}</li>`;
  }
});

document.body.innerHTML += "</ul>";

document.body.innerHTML += "Lista sevilla";

document.body.innerHTML += "<ul>";
array.forEach((element) => {
  if ((element.Ciudad = "Sevilla")) {
    document.body.innerHTML += `<li>${element.Nombre}, ${element.Edad}, ${element.Ciudad}</li>`;
  }
});

document.body.innerHTML += "</ul>";
