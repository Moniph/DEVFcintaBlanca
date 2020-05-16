
// Array o arreglo
            //   0        1       2       3
var colores = ["azul", "rojo", "amarillo", "verde"];
console.log(colores);
console.log (colores[0]);
console.log (colores[3])

colores[4] = "morado";
console.log(colores);

//push mueve los elementos al final

colores.push ("rosa"); 
colores.push("cafe");
console.log(colores);

//pop ---> borra el ultimo elemento

colores.pop();
console.log(colores);

//splice ---> borra elementos especificos

colores.splice(2,1);
console.log(colores);

// cosas nuevas 
//---> posición, elemento a borrar, sustituirlo

colores.splice(2,1, "cafe");
console.log(colores);