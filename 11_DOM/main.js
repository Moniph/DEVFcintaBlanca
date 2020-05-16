let titulo = document.getElementById('titulo')
let parrafo = document.getElementById('parrafo')
let boton = document.getElementById ('boton')
let texto = document.getElementById ('texto')
let respuesta = document.getElementById ('respuesta')

/* titulo.innerHTML = 'Titulo Cambiado'
parrafo.innerHTML = 'Parrafo cambiado' */


const cambio = () => {
    titulo.innerHTML = 'Titulo Cambiado'
    parrafo.innerHTML = 'Parrafo cambiado'
    respuesta.innerHTML = texto.value
    }

boton.addEventListener('click', cambio)


