// alert("Hola")

//VARIABLES ---->
// Estructura
// var nombre = valor

// Valors ---->
// Numérico
var numero = 10;
// String o texto
var perrito = 'Kahlua';
// Boolean
var verdadero = false; //

// Especiales ---->
// object
var objeto = {};
// Array
var arreglo = [];

var num1 = 500;
var num2= 100;

// Salidas o outputs (ver lo que hace JS)

var suma = num1 + num2;
console.log (suma);

var nombre  =   'Monica';
var apellido    =   'Perezcalva';
var completo    =   nombre  + " " + apellido;

console.log(completo);

// Entradas o inputs (lo que yo le proporciono a la pagina)

var pregunta = prompt('Ingresa tu nombre');

console.log(pregunta);


//CHALLENGE
// Preguntar nombre, dirección, teléfono y edad al usuario y mostrarlo en la consola

var pregunta = prompt('Ingresa tu direccion');
console.log(pregunta);
var pregunta = prompt('Ingresa tu teléfono');
console.log(pregunta);
var preguntAnio = prompt('Ingresa tu anio de nacimiento');
console.log(preguntAnio);

// Preguntar el anio en que nacio y mostrar en la conosola la edad que debería tener este anio

var anio = Number(preguntAnio) //Cambia el valor a numérico o parseInt
var edad = 2020 - anio;
console.log(edad);
