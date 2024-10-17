//  Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.

// genero i numeri random del computer e del giocatore
const userNumber =  Math.floor(Math.random() * 6) + 1;
const user = "Numero del giocatore: "
console.log(user + userNumber);

const computerNumber =  Math.floor(Math.random() * 6) + 1;
const computer= "Numero del computer: "
console.log(computer + computerNumber);

let winner = "";
// SE il numero del giocatore è maggiore del numero del computer allora preparo il messaggio 
if(userNumber > computerNumber){
 winner = "Ha vinto il giocatore ";
}
// ALTRIMENTI preparo il messaggio
else{
    winner = "Ha vinto il computer";
}
// OUTPUT stampo il messaggio 
console.log(winner);
