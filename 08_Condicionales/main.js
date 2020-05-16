/* 

// if (condición){
    //acción que se ejecuta si se cumple la condición
// }else {
    // acción que se ejecuta si no se cumple la condición
// }

let num1 = 10

if (num1 > 9){
    console.log('Es verdadero');
}else {
    console.log('Es falso');
}


// Comparar si un número es par o impar 
// ---> Módulo 

let pregunta = Number (prompt('Ingresa un número'))

if (pregunta % 2 === 0){
    console.log (pregunta + ' ' + 'Número par');
}else if (pregunta % 2 === 1){
    console.log(pregunta + ' ' + 'Número impar');
} else {
    console.error ('Error');
}
 */



 /* // CHALLENGE LICENCIA 
let edad = Number (prompt ('Ingresa tu edad'))

 if (edad >= 18 && edad<= 80 ){
     console.log('Puedes conducir')
 }else if ( edad < 16 ){
     console.log('No puedes conducir')
 } else if ( edad === 16 || edad === 17){
     console.log('Puedes sacar tu permiso')
 }else{
     console.error ('Datos incorrectos - Ingresa solo números')
 }
 */


// CHALLENGE JUEGO PIEDRA PAPEL O TIJERA

let j1 = prompt ('Jugador 1: elija piedra papel o tijera') .toLowerCase();
let j2 = prompt ('Jugador 2: elija piedra papel o tijera turno') .toLowerCase();

if (j1 === 'piedra' && j2 === 'piedra'){
    console.log('Empate, vuelve a intentarlo');
} else if (j1 === 'papel' && j2 === 'papel'){
    console.log('Empate, vuelve a intentarlo'); 
} else if (j1 === 'tijera' && j2 === 'tijera'){
    console.log('Empate, vuelve a intentarlo'); 
//

} else if (j1 === 'piedra' && j2 === 'papel'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');
} else if (j1 === 'piedra' && j2 === 'tijera'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');

} else if (j2 === 'piedra' && j1 === 'papel'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');
} else if (j2 === 'piedra' && j1 === 'tijera'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');
//

} else if (j1 === 'papel' && j2 === 'tijera'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');
} else if (j1 === 'papel' && j2 === 'piedra'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');

} else if (j2 === 'papel' && j1 === 'tijera'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');
} else if (j2 === 'papel' && j1 === 'piedra'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');
//

} else if (j1 === 'tijera' && j2 === 'papel'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');
} else if (j1 === 'tijera' && j2 === 'piedra'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');

} else if (j2 === 'tijera' && j1 === 'papel'){
    console.log('Felicidades Jugador 2 ¡Ganaste!');
} else if (j2 === 'tijera' && j1 === 'piedra'){
    console.log('Felicidades Jugador 1 ¡Ganaste!');
}else {
    console.error ('Escribe cualquiera de estas 3 palabras: piedra, papel o tijera')
}