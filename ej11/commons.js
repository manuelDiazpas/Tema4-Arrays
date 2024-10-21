/**11. Tienes un array de objetos que representan productos en un inventario. 
 * Cada objeto tiene las propiedades nombre, cantidad y precio. 
Crear un nuevo array de objetos que contenga el nombre del producto y el valor
total en stock (cantidad * precio , de cada producto). 
Luego, imprimir el nombre del producto 
y el valor total en la consola con dos decimales.
 */

let producto = {
  Nombre: "Don limpio",
  Cantidad: 1,
  Precio: 12.3,
};

let producto2 = {
  Nombre: "Señora limpio",
  Cantidad: 2,
  Precio: 13.3,
};

let producto3 = {
  Nombre: "Chico limpio",
  Cantidad: 3,
  Precio: 10.3,
};

let producto4 = {
  Nombre: "Bebe limpio",
  Cantidad: 4,
  Precio: 9.3,
};

var array = [producto, producto2, producto3, producto4];

var arrayStock = new Array();
array.forEach((element) => {
  arrayStock.push(element.Nombre);
  arrayStock.push((element.Cantidad * element.Precio).toFixed(2));
});

document.write(arrayStock);

/*
array.map((producto) => ({
  nombre: producto.Nombre,
  valorToral: producto.Cantidad * producto.Precio,
}));

valorToral,forEach((item) =>
  console.log(`Producto: .............`
));
*/
