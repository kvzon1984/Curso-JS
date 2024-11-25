/**
 * 
 * @param { String } carta 
 * @param { Number } turno 
 * @param { Selector<String>} divCartasJugadores 
 */
export const crearCarta = ( carta, turno, divCartasJugadores) => {
    // <img class="carta" src="./assets/cartas/KD.png" alt=""></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `./assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugadores[turno].append(imgCarta)
}