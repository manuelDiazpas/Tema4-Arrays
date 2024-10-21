/**12. Tenemos un objeto que almacena los salarios de nuestro equipo:
let salarios = {
John: 100,
Ann: 160,
Peter: 130
};
Escribe el código para sumar todos los salarios 
y mostrar por pantalla el resultado de la suma. 
En el ejemplo de arriba nos debería dar 390. 
Si salarios está vacío entonces el resultado será 0.

 */

let salarios = {
  John: 100,
  Ann: 160,
  Peter: 130,
};

var suma = 0;
for (let prop in salarios) {
  suma += salarios[prop];
}

document.write(`La suma de todos los salarios es de ${suma} €`);
