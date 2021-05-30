// Gioco dei dadi Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero numero random per il pc e per l'utente 
var numUtente = parseInt(Math.random() * 6) + 1;
var numPc = parseInt(Math.random() * 6) + 1;

// inizializzo la variabile in pareggio cosi da fare solo due if 
var result = 'pareggio';

// controllo chi ha il numero piu alto 
if (numUtente > numPc) {
    result = 'hai vinto';
} else if (numUtente < numPc) {
    result = 'hai perso' ;
}
// mostro i numeri che sono usciti e il risultato
document.getElementById('risultato').innerHTML = result;
document.getElementById('n-utente').innerHTML = 'Questo è il tuo numero random : ' + numUtente;
document.getElementById('n-pc').innerHTML = 'Questo è il numero random del pc: ' + numPc;












