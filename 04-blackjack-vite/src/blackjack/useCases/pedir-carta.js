/**
 * 
 * @param {Array<String>} deck 
 * @returns {String} Devuelve una carta de tipo string
 */
export const pedirCarta = ( deck ) => {
    if (!deck || deck.length === 0) return 'No hay mas cartas en el deck';
    return deck.pop();
}