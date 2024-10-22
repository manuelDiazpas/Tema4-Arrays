/**14. Dado un array de objetos de libros, donde cada libro 
 * tiene un título y un número de páginas, 
 * obtener los libros que tienen más de 300 páginas. 
 * Luego, extraer solo los títulos de estos libros.
 Finalmente, imprimir los títulos en la consola. 
 */

var libros = [
  { titulo: "Libro A", paginas: 250 },
  { titulo: "Libro B", paginas: 400 },
  { titulo: "Libro C", paginas: 350 },
  { titulo: "Libro D", paginas: 150 },
  { titulo: "Libro E", paginas: 500 },
];

const librosConMasDe300Paginas = libros.filter((libro) => libro.paginas > 300);

const titulos = librosConMasDe300Paginas.map((libro) => libro.titulo);

console.log(titulos);
