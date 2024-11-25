import { valorCarta } from "./index"
/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @returns 
 */
export const acomularPuntos = ( puntosJugadores, carta, turno, puntosHtml ) => {    
    puntosJugadores[turno] += valorCarta( carta ); 
    puntosHtml[turno].innerText = puntosJugadores[turno];        
    return puntosJugadores[turno];
}