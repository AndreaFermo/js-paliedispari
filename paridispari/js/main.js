const sceltaPariDispari = prompt('scegli pari o dispari');
console.log(sceltaPariDispari);
const numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log(numeroUtente);

let numeroConfronto = random ();
console.log(numeroConfronto);

let pariDispari = sommaPariDispari (numeroUtente, numeroConfronto);
console.log(pariDispari);

if (pariDispari == sceltaPariDispari) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}

function random () {
    let numeroRandom = Math.floor(Math.random() * 5) + 1;

    return numeroRandom
}

function sommaPariDispari (a, b) {
    let somma = a + b;
    let risultato = '';
    if (somma % 2) {
       risultato = 'dispari';
    } else {
        risultato = 'pari';
    }

    return risultato;
}