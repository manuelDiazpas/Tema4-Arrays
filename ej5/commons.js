/**5. Realizar programa donde el usuario introduce una palabra 
 * y devuelva el número total de vocales contenidas. 
Escribir por pantalla el resultado: “La palabra X tiene Y vocales”.
Utilizar la función forEach (PISTA: pasar de cadena a array.)
 */

var palabra = prompt("Dime una palabra");
var array = new Array();
for (index = 0; index < palabra.length; index++) {
  array.push(palabra.charAt(index));
}

arrayVocal = new Array();

array.forEach((element) => {
  if (
    element == "a" ||
    element == "e" ||
    element == "i" ||
    element == "o" ||
    element == "u"
  ) {
    arrayVocal.push(element);
  }
});

document.body.innerHTML = `La palabra ${palabra} tiene ${arrayVocal.length} vocales`;
