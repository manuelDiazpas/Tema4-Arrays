/**2. Crear un array con 3 palabras que se introducirán por mensajes 
 * al usuario palabra a palabra (3 veces)
Si cancela, se insertará una cadena vacía en el array.
Escribir por consola y por pantalla, el array inicial y 
el array filtrando sólo las que comienzan por la letra C.
Si no hay ninguna, escribir: 
“No hay ninguna palabra que comience por C.”
 */

const n_fijo = 3;
var array = new Array();

for (i = 0; i < n_fijo; i++) {
  n = prompt(`Palabra ${i + 1}`);
  if (n == null) {
    n = "";
  }
  console.log(n);
  array.push(n);
}
console.log(array);
document.write(array);

document.write("<h2>Array filtrado con la letra 'C'</h2>");

let palabrasPorC = array.filter((e) => e.toLowerCase().startsWith("c"));

console.log(palabrasPorC);
document.write(palabrasPorC);
