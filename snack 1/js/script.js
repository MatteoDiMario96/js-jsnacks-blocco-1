// L'utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numeroUtenteA = Number.parseInt(prompt("Dammi un numero !"),10)
const numeroUtenteB = Number.parseInt(prompt("Dammi un numero !"),10)

if(numeroUtenteA > numeroUtenteB ) {
    console.log(numeroUtenteA)
} else {
    console.log(numeroUtenteB)
}


