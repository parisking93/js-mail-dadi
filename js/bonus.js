// conto e stampo i multipli di 3 compresi tra 10 e 30 
for (i = 12; i <= 30; i += 3) {
    if (i == 30){
        document.getElementById('count').innerHTML += i;
    } else {
        document.getElementById('count').innerHTML += i + '<span class = "black show"> / <span>';
    }

}
// conto e stampo i multipli di 3 senza barare 

for(i = 10; i <= 30; i++){
    if ((i % 3) == 0) {
        console.log(i)
    }
}