/**13. Dado un array de usuarios donde cada usuario tiene un nombre y
 * una edad, obtener los usuarios que tienen
 * 18 años o más. Luego, crear un array de nombres
 * de estos usuarios en formato "Nombre (Edad años)".
 * Muestra el resultado en la consola.
 */

let usuario = {
  Nombre: "Juan",
  Edad: 16,
};

let usuario2 = {
  Nombre: "Juanito",
  Edad: 6,
};

let usuario3 = {
  Nombre: "Juanita",
  Edad: 18,
};

var array = [usuario, usuario2, usuario3];
var arrayMayores = [];

array.forEach((element) => {
  if (element.Edad > 17) {
    arrayMayores.push(`${element.Nombre} (Edad ${element.Edad})`);
  }
});

console.log(arrayMayores);
