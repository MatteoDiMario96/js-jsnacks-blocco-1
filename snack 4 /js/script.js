// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const array = [
    "Matteo",
    "Sara",
    "Riccardo",
    "Luca",
    "Emanuela",
    "Giovanni",
    "Leopoldo"
]

const nomeUtente = prompt("Dimmi il tuo nome e scopri se puoi partecipare!")

if (nomeUtente == array){
    console.log("Puoi partecipare!")
} else{
        console.log("Mi dispiace non puoi partecipare")
    }
