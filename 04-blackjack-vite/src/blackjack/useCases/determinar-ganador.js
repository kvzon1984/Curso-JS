/**
 * 
 */
export const determinarGanador = ( puntosJugadores) => {

    const [puntajeMinimo, puntosComputadora] = puntosJugadores    

    setTimeout(() => {
        if (puntajeMinimo === puntosComputadora) {
            alert('Nadie Gana!!');
        } else if (puntajeMinimo > 21) {
            alert('Computadora Gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else if (puntosComputadora > puntajeMinimo) {
            alert('Computadora Gana');
        } else if (puntosComputadora < puntajeMinimo) {
            alert('Jugador Gana');
        }

    }, 100);
 }