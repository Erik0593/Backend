const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')


const koderName = params.name

if(koderName == process.argv[2]){
    console.log(`Bienvenido ${koderName}`.rainbow)
}else{
    console.log(`Ni se quien eres?`)
}