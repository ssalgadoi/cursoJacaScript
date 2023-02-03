//Concatenamos

const nombre = 'Sebastian';
const email = 'correo@correo.com'

console.log(nombre + email);//con este reultado el nombre y el correo aparecen juntos(Juancorreo@correo.com)
console.log(nombre + " " + email);//con este forma nos aparece con un espacio(Juan correo@correo.com)
console.log("Nombre Cliente :" + nombre + " Email : " + email);

//Template String - String Literals

console.log(`Nombre Cliente: ${ nombre } Email: ${ email }`);