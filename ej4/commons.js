/**4. Crear un array de objetos que representan productos en una tienda, 
 * donde cada objeto tiene las propiedades nombre, precio y categoria:
Obtener un nuevo array que contenga sólo los nombres de los productos, 
transformando cada nombre en mayúsculas.
Mostrar en consola el array de nombres transformados y en la página HTML 
separados por guión
 */

const n_fijo = 5;

let producto = {
  Nombre: "Don limpio",
  Precio: 12.3,
  Categoria: "Limpieza",
};

let producto2 = {
  Nombre: "Señora limpio",
  Precio: 13.3,
  Categoria: "Limpieza",
};

let producto3 = {
  Nombre: "Chico limpio",
  Precio: 10.3,
  Categoria: "Limpieza",
};

var array = [producto, producto2, producto3];
var arrayMayuscula = [];

nombreMayusculas = array.map((producto) => producto.Nombre.toUpperCase());

console.log(nombreMayusculas);

document.write("<p> " + nombreMayusculas.join(" - ") + "</p>");
