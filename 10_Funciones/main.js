

function saludo (){
    console.log('Hola!');

}

saludo ()


// Arrow function o funciones de flecha 

const multiplicacion = (x , y) => {
    return x * y
}

console.log(multiplicacion (10 , 5))


//CHALLENGE
// Una función para saber el área de un cuadrado 
// Una función para saber el área de un rectángulo 
// Una función para saber el área de un triángulo 


const areaCuadrado = (x) => {
    return Math.pow (x , 2) 
}
console.log(areaCuadrado (10))


const areaRectangulo = (x , y) => {
    return x * y
}
console.log(areaRectangulo (10 , 3))


const areaTriangulo = (b , h) => {
    return (b * h) / 2
}
console.log(areaTriangulo (10 , 2))