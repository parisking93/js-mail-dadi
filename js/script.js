// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random per il pc e per l'utente 
var numUtente = parseInt(Math.random() * 6) + 1;
var numPc = parseInt(Math.random() * 6) + 1;

// controllo chi ha il numero piu alto 
if (numUtente > numPc) {
    console.log('hai vinto');
} else if (numUtente < numPc) {
    console.log('hai perso');
} else {
    console.log('pareggio');
}












