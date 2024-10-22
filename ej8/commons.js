/**8. Crear una función flecha, que reciba un array y 
 * que se escriba por pantalla dos arrays: uno con los números pares y 
 * otro con los impares. Realizar las siguientes comprobaciones: 
 * que se reciba un array, que no esté vacío y que sólo contenga números.
 * 
 * Llamar a la función con [1,3,2,5,7,4], [], [1,”3”,2] , “pepe”

 */

var array1 = [];
var array2 = [1, 3, 2, 5, 7, 4];
var array3 = [1, "3", 2];
var array4 = "pepe";

let paresImpares = (arrays) => {
  let arrayPar = arrays.filter((arrays) => arrays % 2 === 0);
  let arrayImpar = arrays.filter((arrays) => !(arrays % 2 === 0));

  document.write("<h2>Arrays Pares</h2>");
  document.write(arrayPar + "<br>");
  document.write("<h2>Arrays Impares</h2>");
  document.write(arrayImpar);
};

paresImpares(array4);

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
