/**6. Dado un array con los 7 días de la semana,
 * mostrar por pantalla la longitud de cada palabra,
 * así como el día de la semana más largo.
 * Escribir un fichero js externo para javascript. Usar forEach.
 */

var array = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

var diaLargo = 0;
var largoDia = "";
array.forEach((element) => {
  document.write(`${element} → ` + element.length + "<br>");
  if (element.length > diaLargo) {
    diaLargo = element.length;
    largoDia = element;
  }
});

document.write(`El día más largo es el ${largoDia}`);
