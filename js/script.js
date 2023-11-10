let opciones = ['piedra', 'papel', 'tijera'];
let puntosUsuarios = 0;
let puntosOrdenador = 0;

const botonJugada = document.querySelectorAll['boton-jugada']

//for ( let i = 0; i >= 0; i++) {}
document.getElementById('piedra').addEventListener('click', function () {

})
document.getElementById('papel').addEventListener('click', function () {

})
document.getElementById('tijera').addEventListener('click', function () {

})

//botonJugada.forEach((boton) => {
boton.addEventListener('click', function () {
    const seleccionPc = opciones[Math.floor(Math.random() * opciones.length)]
    //const seleccionUsuario
    const conseguirResultado = (seleccionPc, seleccionUsuario) => {
        if (seleccionPc = seleccionUsuario) {
            return 'es un empate'

        } else if (seleccionPc = 'piedra') {
            if (seleccionUsuario = 'papel') {
                return 'usuario gana'
            } else {
                return 'pc gana'
            }
        } else if (seleccionPc = 'papel') {
            if (seleccionUsuario = 'tijera') {
                return 'usuario gana'
            } else {
                return 'pc gana'
            }
        } else if (seleccionPc = 'tijera') {
            if (seleccionUsuario = 'piedra') {
                return 'usuario gana'
            } else {
                return 'pc gana'
            }
        }
    }
    const sumaResultado = (resultado) => {
        if (resultado = 'usuario gana') {
            puntosUsuarios++
        }
    }
    const resultado = conseguirResultado(seleccionPc, seleccionUsuario)
    sumaResultado(resultado)
});