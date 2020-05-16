// Objetos - Object

var persona = {
    nombre: "Monica",
    edad: "25",
    telefono: "4423802391",
    direccion: "Qro",
    deportes: ["volleyball", "tennis", "football"],
    peliculas: {
        accion: ["MI", "Ronnig", "DdM"],
        drama: ["titanic", "Match point"],
        ramcom: ["la propuesta", "yo antes de ti", "one day", "cassanovias"], 
        terror: {
            gore:"destino final", 
            slasher: "halloween",
            vampiros:"crepusculo",    
        }
    }
}

console.log(persona)
console.log(persona.deportes[1])
console.log(persona.peliculas.accion[2])
console.log(persona.peliculas.terror.vampiros)