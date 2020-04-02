const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('listar', 'lista la base de datos', {

    })
    .command('actualizar', 'actualiza al estado completado de una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por actualizar y cambio de estado a completado  '
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'indica se la tarea actualizada esta completada'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}