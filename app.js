const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        {
            let tarea = porHacer.crear(argv.descripcion);

            break;
        }
    case 'listar':
        {
            let listado = porHacer.getListado();

            for (tarea of listado) {
                console.log('========================'.green);
                console.log(`tarea ${tarea.descripcion} completado ${tarea.completado}`);
                console.log('========================'.green);
            }
            break;
        }
    case 'actualizar':
        {
            //console.log('HOla marica');
            let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
            let listado = porHacer.getListado();

            for (tarea of listado) {
                console.log('========================'.green);
                console.log(`tarea ${tarea.descripcion} completado ${tarea.completado}`);
                console.log('========================'.green);
            }
            break;
        }
    default:
        {
            console.log(`el comnado ${comando} no esta definido aun`);
        }


}