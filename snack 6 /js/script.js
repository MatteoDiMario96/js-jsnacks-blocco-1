// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

let somma = 0;

const array = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
]
for (let i = 1; i < array.length; i++){
    if (i % 2 == 1) {
    somma += array[i]
    }   
}
console.log(somma)