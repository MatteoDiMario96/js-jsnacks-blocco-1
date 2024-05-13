// Crea un array vuoto.
//  Chiedi per 6 volte all'utente di inserire un numero,
//  se è dispari inseriscilo nell'array.

const array = [

];
let numeriUtente;

for (let i = 0; i < 6; i++){
    numeriUtente = Number.parseInt(prompt("Dammi un nummero!"), 10);

    if ( numeriUtente % 2 == 1 ){
        array.push(numeriUtente)
    } 
}
console.log(array)