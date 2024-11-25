import { pedirCarta, acomularPuntos, crearCarta } from './index'
//Turno computadora

/**
 * 
 * @param {Number} puntajeMinimo 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( deck = [], puntosJugadores, divCartasJugadores, puntosHtml ) => {
    let [puntajeMinimo, puntosComputadora] = puntosJugadores
    if( !puntajeMinimo ) throw new Error("El puntajeMinimo es necesario");
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acomularPuntos( puntosJugadores, carta, puntosJugadores.length - 1, puntosHtml );
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores );

    } while ((puntosComputadora <= puntajeMinimo) && (puntajeMinimo <= 21));

}