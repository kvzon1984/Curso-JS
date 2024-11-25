
const miModulo = (() => {
    'use strict';

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    //Referencias html

    const btnNuevo = document.querySelector('#btnNuevo'),
        btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        puntosHtml = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

    let puntosJugadores = [];

    const iniciarJuego = ( numJugadores = 2 ) => {
        console.clear();
        deck = crearDeck();
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);   
        }   
        puntosHtml.forEach( e => e.innerText = 0);
        divCartasJugadores.forEach( e => e.innerHTML = '');
        btnPedir.disabled = false;
        btnDetener.disabled = false;    
    };
    
    const crearDeck = () => {

        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        for (let especial of especiales) {
            for (let tipo of tipos) {
                deck.push(especial + tipo);
            }
        }

        return _.shuffle(deck);;

    }

    const pedirCarta = () => {
        if (deck.length === 0) return 'No hay mas cartas en el deck';
        return deck.pop();
    }

    const valorCarta = (carta) => {
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

    // turno: 0 = [rimer jugador el ultimo es la computadora]
    const acomularPuntos = ( carta, turno ) => {    
        puntosJugadores[turno] += valorCarta( carta ); 
        puntosHtml[turno].innerText = puntosJugadores[turno];        
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno) => {
        // <img class="carta" src="./assets/cartas/KD.png" alt=""></img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `./assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta)
    }

     const determinarGanador = () => {

        const [puntajeMinimo, puntosComputadora] = puntosJugadores

        setTimeout(() => {
            if (puntajeMinimo === puntosComputadora) {
                alert('Nadie gana!!');
            } else if (puntajeMinimo > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21) {
                alert('Jugador Gana');
            } else {
                alert('Computadora gana')
            }

        }, 100);
     }

    //Turno computadora

    const turnoComputadora = (puntajeMinimo) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acomularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length - 1 );

        } while ((puntosComputadora <= puntajeMinimo) && (puntajeMinimo <= 21));

        determinarGanador()

    }

    //Eventos

    // btnNuevo.addEventListener('click', () => {
    //     iniciarJuego();
    // })

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    })

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();        
        const puntosJugador = acomularPuntos( carta, 0 );
        crearCarta( carta, 0 )


        if (puntosJugador > 21) {
            console.error('Los siento, Perdistes');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn('Ganaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            alert('Jugador Gana');
        }
    })

    return {
        nuevoJuego: iniciarJuego
    };

})();



