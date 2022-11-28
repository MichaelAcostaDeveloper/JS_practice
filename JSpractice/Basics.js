/**
 * The function `nombreCompleto` takes two parameters, `name` and `lastname`, and returns the
 * concatenation of the two
 * @param name - The name of the person
 * @param lastname - The last name of the user.
 */
//Constantes y variables con let
let name = 'Michael Fernando';
let lastname= 'Acosta Panchez';
let username = 'micke';
let age = 32;
let mail = 'micke@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;

//la funcion con sus parametros
function nombreCompleto(name,lastname){
          return name+' '+lastname;
}
//la invocacion de la funcion con sus argumentos
nombreCompleto('Michael','Acosta');
//Impresion por consola del resultado de la funcion
console.log(nombreCompleto('Michael','Acosta'));

function saludo(a,p,username){
          const nickname = username;
          const completeName = nombreCompleto(a,p);
          console.log("Mi nombre es "+completeName + ", pero prefiero que me digas "+nickname+".");
}
saludo("Jose","Perez","Jop");