/* Pari e Dispari:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Palidroma:

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma.

Consigli del giorno:
-Scriviamo sempre in italiano i passaggi che vogliamo fare

-Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

-non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione. */

//////////////////////////////////////////////////////////////////////////////////
// Pari e Dispari:

// Crea un input per inserire in numero scelto da l'utente e un bottone per giocare.

document.querySelector('.play').addEventListener('click', ()=> {

 //  Per la const dell'utente devo fare una funzione con min1 and max5.

let userNumber = document.querySelector('.userNumber').value;


function userNumberRange(userNumber) {
    const value = parseInt(userNumber);
    if (value < 1) {
        return 1;
    } else if (value > 5) {
        return 5;
    } else {
        return value;
    }
}

//const limitedValue = userNumberRange(userNumber);
userNumber.innerHTML


const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log(pcNumber);
//let printWinner = document.querySelector('.risultatoGame')

})

//let userNumber = document.querySelector('.userNumber').value;

// La const per l'utente deve poter inserire un numero.

// La const per il PC si genera in automatico quando premo il button, dopo che ho scritto un numero tra 1 e 5 nell'utente input.
//userNumberRange(userNumberRange = document.querySelector('.userNumber').value, MIN, MAX);
//userNumberRange = document.querySelector('.userNumber').value;
//userNumberRange = document.querySelector('.userNumber');
//document.querySelector('.print').innerHTML = userNumber;
//console.log(userNumberRange);
//const userNumber = userNumberRange[1, 5];

    //console.log(userNumber);