import { crearDeck, pedirCarta, crearCarta, acomularPuntos, turnoComputadora, determinarGanador } from "./useCases/index";

const miModulo = (() => {

  let deck = [];
  let puntosJugadores = [];
  const tipos = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

  //Referencias html
  const btnNuevo = document.querySelector('#btnNuevo'),
      btnPedir = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      puntosHtml = document.querySelectorAll('small'),
      divCartasJugadores = document.querySelectorAll('.divCartas');

  const iniciarJuego = ( numJugadores = 2 ) => {
      console.clear();
      deck = crearDeck( tipos, especiales );
      puntosJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntosJugadores.push(0);   
      }   
      puntosHtml.forEach( e => e.innerText = 0);
      divCartasJugadores.forEach( e => e.innerHTML = '');
      btnPedir.disabled = false;
      btnDetener.disabled = false;    
  };  

  //Eventos

  btnNuevo.addEventListener('click', () => {
      iniciarJuego();
  })

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( deck, puntosJugadores, divCartasJugadores, puntosHtml );
      determinarGanador( puntosJugadores);
  })

  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);        
      puntosJugadores[0] = acomularPuntos( puntosJugadores, carta, 0, puntosHtml );
      crearCarta( carta, 0, divCartasJugadores );
      if ( puntosJugadores[0] > 21 ) {
        turnoComputadora( deck, puntosJugadores, divCartasJugadores, puntosHtml );
        determinarGanador( puntosJugadores);
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
    } else if ( puntosJugadores[0] === 21 ) {
        turnoComputadora( deck, puntosJugadores, divCartasJugadores, puntosHtml );
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        determinarGanador( puntosJugadores);
    }
  })

})();




