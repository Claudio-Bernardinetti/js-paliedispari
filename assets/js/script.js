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
    const pcNumber = Math.floor(Math.random() * 6) + 1;
    console.log(pcNumber);
    let userNumberEl = document.querySelector('.print');
    let oddEvenEl = document.querySelector('.oddEven');

//  Devo fare la somma di userNumber e pcNumber.

    function userNumberRange(userNumber) {
        const value = parseInt(userNumber);
        if (value < 1) {
            return `Numero non compreso tra (1 e 5)`;
        } else if (value > 5) {
            return `Numero non compreso tra (1 e 5)`;
        } else {
            return result = pcNumber + parseInt(userNumber);
        }
    }
    
    
    userNumberEl.innerHTML = `${userNumberRange(userNumber)}`;

    //  Creare una funzione per capire se il risultato e' pari o dispari.

    function oddEven(result) {
        if (result % 2 === 0) {
            return 'pari';
        } else {
            return 'dispari';
        }
      
    }

    oddEvenEl.innerHTML = `Ha vinto il ${oddEven(result)} 🎉🏆`;
    console.log(oddEven(result));

});

/////////////////////////////////////////////////////////////////////////
/////////  Palidroma:

// Creare bottone per avviare il check.

document.querySelector('.check').addEventListener('click', ()=> {

    // Creare la const per inserire la parola.

    let word = document.querySelector('.word').value;
    let wordEl = document.querySelector('.printWord')

    // Creare la funzione che scompone l'array 

    function isPalindrome(word) {

        // Converti word in un array di caratteri
        let array = word.split('');

        console.log(array);

        // Inverti l'ordine dei caratteri nell'array
        array.reverse();

        console.log(array);

        // Converti l'array di caratteri in una stringa
        let reversedword = array.join('');

        // Confronta la stringa originale con la stringa invertita
        return word === reversedword;

    }

    // If/else per stampare il risultato.

    if (isPalindrome(word)) {
        wordEl.innerHTML = `La parola (${word})  è palindroma`
        console.log(word + " è palindroma");
    } else {
        wordEl.innerHTML = `La parola (${word}) non è palindroma`
        console.log(word + " non è palindroma");
    }
    
})