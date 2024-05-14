// Snack7
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.


let numeroUtente = Number.parseInt(prompt("Dammi un numero!"))

if(numeroUtente > 20 || numeroUtente < 1 ||  isNaN(numeroUtente) ){
    numeroUtente =12
}

for(let index = 0; index < numeroUtente; index++){
    let numeriCasuali = [];
    for(let index = 0; index < 10; index++){
        numeriCasuali.push(Math.floor(Math.random() * 10) + 1)
    }
    console.log(numeriCasuali)
}