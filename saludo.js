const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')

const nombre = params.name
console.log(`Bienvenido ${nombre}`.rainbow)