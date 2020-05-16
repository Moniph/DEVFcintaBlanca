
//Nombres inputs 

let nombre = document.getElementById ('nombre')
let direccion = document.getElementById ('direccion')
let telefono = document.getElementById ('telefono')
let pina = document.getElementById ('pina')
let caja = document.getElementById ('caja')

// Nombres respuesta inputs

let respuestaNombre = document.getElementById ('respuestaNombre')
let respuestaDireccion = document.getElementById ('respuestaDireccion')
let respuestaTelefono = document.getElementById ('respuestaTelefono')
let respuestaPina = document.getElementById ('respuestaPina')

// Boton
let botonOrdenar = document.getElementById ('boton')

// Card
let Card = document.getElementById ('card')
let Pepperoni = document.getElementById ('pepperoni')
let Hawaiana = document.getElementById ('hawaiana')
let Continuar = document.getElementById ('continuar')
const cambio = () => {

    respuestaNombre.innerHTML = nombre.value
    respuestaDireccion.innerHTML = 'Dirección: ' +  direccion.value
    respuestaTelefono.innerHTML = 'Teléfono: ' +  telefono.value
/*     respuestaPina.innerHTML = '¿Te gusta con piña?: ' +  pina.value */


//Respuesta si o no ¿te gusta la pina?
let pizzaFinal = pina.value
let comprarPizza = pizzaFinal.toLowerCase()


//Aparece la card 
 Card.classList.remove('none')

    if(comprarPizza === 'si'){
/*         respuestaPina.innerHTML = 'Con piña 🙋🏻‍♀️' */
        Hawaiana.classList.remove('none')
        Pepperoni.classList.add ('none')
        respuestaPina.classList.add('none')
        Continuar.classList.remove('none')


    }else if(comprarPizza === 'no'){
/*         respuestaPina.innerHTML = 'Con piña: 🙅🏻‍♀️' */
        Pepperoni.classList.remove('none')
        Hawaiana.classList.add('none')
        respuestaPina.classList.add('none')
        Continuar.classList.remove('none')

    }else{
        respuestaPina.innerHTML = '⚠️ Elige si deseas piña'
        Pepperoni.classList.add ('none')
        Hawaiana.classList.add('none')
        Continuar.classList.add('none')
    }
}

boton.addEventListener ('click', cambio)