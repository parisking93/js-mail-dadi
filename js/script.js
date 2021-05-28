// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random per il pc e per l'utente 
var numUtente = parseInt(Math.random() * 6) + 1;
var numPc = parseInt(Math.random() * 6) + 1;

// controllo chi ha il numero piu alto 
if (numUtente > numPc) {
    document.getElementById('risultato').innerHTML = 'Hai vinto';
} else if (numUtente < numPc) {
    document.getElementById('risultato').innerHTML = 'Hai perso';
} else {
    document.getElementById('risultato').innerHTML = 'Pareggio';
}
// mostro i numeri che sono usciti 
document.getElementById('n-utente').innerHTML = 'Questo è il tuo numero random : ' + numUtente;
document.getElementById('n-pc').innerHTML = 'Questo è il numero random del pc: ' + numPc;












