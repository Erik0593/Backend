//archivo de otro dev para separar --name=nombre y solo sacar el nombre.
const params = require('yargs-parser')(process.argv.slice(2))
//achivo de los colores para las letras
const colors = require('colors')


//aqui ya sacamos el nombre de params
const nombre = params.name

//saludamos al wey que esta ingresando a la computadora
const saludo = (nombre) => {
    if(typeof nombre === 'string'){
        console.log(`Bienvenido ${nombre}`.rainbow)
    }
}

saludo(nombre)