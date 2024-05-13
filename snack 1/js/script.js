// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numeroUtenteA = Number.parseInt(prompt("Dammi un numero !"))
const numeroUtenteB = Number.parseInt(prompt("Dammi un numero !"))

if(numeroUtenteA > numeroUtenteB ) {
    console.log(numeroUtenteA)
} else {
    console.log(numeroUtenteB)
}


