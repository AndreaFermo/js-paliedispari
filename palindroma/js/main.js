const parola = prompt('inserisci una parola');
console.log(parola);

let palindromia = invertiParola();
console.log(palindromia);


function invertiParola() {

let parolaInvertita = '';
let risultato = '';

for (i = parola.length - 1; i >= 0  ; i--) {
    
    parolaInvertita += parola[i];
    console.log(parolaInvertita);
  
}

if (parolaInvertita == parola) {
    risultato = 'la parola è palindroma';
} else {
    risultato = 'la parola non è palindroma';
}

return risultato;
    
}