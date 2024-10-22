/**10. Crea un objeto literal llamado ‘user’ vacío.
1. Agrega la propiedad name con el valor John.
2. Agrega la propiedad surname con el valor Smith.
3. Cambia el valor de name a Peter.
4. Elimina la propiedad name del objeto.
 */

let user = {};

user.name = "John";
user.surname = "Smith";

document.write(user.name + " " + user.surname + "<br>");

user.name = "Peter";
document.write(user.name + "<br>");

delete user.name;

document.write(user.name);
