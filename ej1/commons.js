/**1. Dado un array de números: const arr = [2, 3, 4, 5, 0]:
1. Escribir por consola la suma del array. 
Hacerlo con el método forEach y arrow functions.
2. Escribir por consola la media.
3. Obtener otro array con el triple de cada elemento 
y mostrarlo por consola.
4. Obtener el mismo array con el triple de cada elemento 
y mostrarlo por consola.
 */

const arr = [2, 3, 4, 5, 0];

var suma = 0;
let sumaArray = arr.forEach((a) => {
  if (a != 0) {
    console.log((suma += a));
  }
});

console.log(suma / arr.length);

const newArr = arr.map((el) => el * 3);
console.log(newArr);

arr.forEach((e, index) => {
  arr[index] = e * 3;
});
console.log(arr);
