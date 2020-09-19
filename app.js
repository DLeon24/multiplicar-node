const argv = require('./config/yargs').argv;
const colors = require('colors');
const multiplicar = require('./multiplicar/multiplicar');

let command = argv._[0];
switch (command) {
    case 'listar':
        multiplicar.listarTabla(argv.base, argv.limite)
            .then((result) => {
                console.log(`Listado de la tabla : \n${result}`.green);
            }).catch((err) => {
                console.log(err.red);
            });
        break;
    case 'crear':
        multiplicar.createFile(argv.base, argv.limite)
            .then((result) => {
                console.log(`Archivo creado: ${result}`);
            }).catch((err) => {
                console.log(err);
            });
        break;
    default:
        console.log('command not defined..');
        break;
}

// console.log(argv);

// console.log(argv.base);

// let parameter = argv[2];
// let base = parameter.split('=')[1];