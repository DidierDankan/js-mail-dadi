console.log('ok js!')

//esercizio uno!

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
    userFind = 'your on the list';
} else {
    userFind = 'your not on the list';
}

document.getElementById('user-mail').innerHTML = userFind;













//esercizio due!

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer
//Stabilire il vincitore, in base a chi fa il punteggio più alto.