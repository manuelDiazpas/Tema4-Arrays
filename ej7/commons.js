/**7. Hacer un programa que pida por pantalla al usuario una palabra.
 * Seguir pidiéndola si se introduce vacía.
 * Mostrar la palabra original y la invertida.
 *
 * Ejemplo: La palabra hello invertida es olleh
 */

var palabra = prompt("Escribe una palabra");

var array = [];
for (index = 0; index < palabra.length; index++) {
  array.push(palabra.charAt(index));
}

array = array.reverse();
var palabraFinal = "";
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  palabraFinal += element;
}

document.write(`La palabra ${palabra} invertida es ${palabraFinal}`);
