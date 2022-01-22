const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')

const nombre = params.name

const saludo = (nombre) => {
    if(typeof nombre === 'string'){
        console.log(`Bienvenido ${nombre}`.rainbow)
    }
}

saludo(nombre)