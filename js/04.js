//String o cadenas de texto
const producto = 'Monitor de 20 pulgadas para estudiar JavaScript'//esta es la mas usada
//Otra forma de hacer lo mismo 
const producto2 = String('Monitor de 30 Pulgadas')
//Una tercera forma de hacer lo mismo
const producto3 = new String('Monitor de 40 pulgadas')


//Metodo Length =se ocupa para los texto con esto podemos ver cuantas letras tiene
//la informacion por consola

console.log(producto.length);

// IndexOf
//para aber si una palabra existe en una cadena de texto
//y en que posicion se encuentra

console.log(producto.indexOf('JavaScript'));

// Includes
//este nos retorna un true o false 
//si encuentra la palabra nos dice true de lo contrario un false

console.log(producto.includes('JavaScipt'));
console.log(producto.includes('Tablet'));