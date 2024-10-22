/**9. Crear un objeto literal llamado factura con las propiedades:
1. numero, cliente, divisa, subtotal e IVA, dándole valores a cada uno de ellos.
2. Tendrá también un método que calcula el total ( subtotal + iva)
3. Imprimir por consola: 
La factura X(numero) tiene un importe de Y(subtotal) Z(divisa)
 */

let factura = {
  numero: 1,
  cliente: "Pepe",
  divisa: "€",
  subtotal: 120,
  IVA: 15,
};

function total(sub, iva) {
  let final = 0;

  final = sub + iva;

  return final;
}

totalFinal = total(factura.subtotal, factura.IVA);

document.write(
  `La factura ${factura.numero} tiene un importe de ${factura.subtotal} ${factura.divisa}. <br>`
);

document.write(`El total final es de ${totalFinal} ${factura.divisa}`);
