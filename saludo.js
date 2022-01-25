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

/**
 * fs.readFile
 * para leer un archivo e imprimirlo en consola desde otro archivo en txt
 * desde ese comando desde un archvio de js
 * tarea
 * const fs = requiere('fs')
 */

const fs = require('fs')

//es importante el orden
function atTheEnd(error) {
    if(error){
        console.log('Hubo un error al crear el archivo', error)
        return
    }
    console.log(`El archivo fue escrito exitosmente`)
}

fs.writeFile('folder/hola.txt', 'hola a todos desde el nuevo archivo', 'utf8', atTheEnd)