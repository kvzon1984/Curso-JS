
/**
 * 
 * @param {String} carta Recibe un string
 * @returns {Number}
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
    // if( isNaN(valor) ){
    //     puntos = (valor === 'A') ? 11 : 10;
    // } else {
    //     puntos = valor * 1;
    // }   
}