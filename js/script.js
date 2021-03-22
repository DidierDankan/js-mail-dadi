console.log('ok js!')

//ESERCIZIO UNO!

//chiedi la mail dell'uttente
//controlla che sia nella lista di chi può accedere
//stampa un messaggio appropriato sull’esito del controllo.


 
var list = ['mimmizoe@hotmail.it','didi_archer@hotmail.com','yuki2019@hotmail.com','nora2021@hotmail.com'];

var userMail = prompt('What\'s your email?').toLowerCase();

var userFind = false;

for (var i = 0; i < list.length; i++) {
    console.log(list[i]);

    if (list[i] === userMail) {
        userFind = true;
        break;
    }
}

if (userFind === true) {
    userFind = 'your on the team, enjoy!';
} else {
    userFind = 'your not on the team, sorry :(';
}

document.getElementById('user-mail').innerHTML = userFind;



//ESERCIZIO DUE!

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.

var person = Math.floor(Math.random() * 6 + 1);
console.log(computer);

var computer = Math.floor(Math.random() * 6 + 1);
console.log(person)

var result;

if (computer < person) {
    result = 'You won!';
} else if (person < computer) {
    result = 'Computer won!';
} else {
    result = 'draw';
}

document.getElementById('who-won').innerHTML = result;
document.getElementById('person').innerHTML = person + ' your number';
document.getElementById('computer').innerHTML = computer + ' computer\'s number';
