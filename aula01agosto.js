// Exercicio 01

const meuArray = [10, 20, 30, 40, 50];
let segundoElemento;
segundoElemento = meuArray[1];
console.log(segundoElemento)

// Exercicio 02

const frutas = ['maça', 'banana', 'laranja', 'uva', 'manga'];
console.log(frutas.length);

// Exercicio 03

frutas.push('pera');
console.log(frutas);

// Exercicio 04

frutas.shift();
console.log(frutas);

// Exercicio 05

const numeros = [10, 20, 30, 40, 50];

if(numeros.indexOf(25) >= 0) {
    console.log("O número foi encontrado");
} else {
    console.log("o número não foi encontrado");
}

// Exercicio 06

let arrayUm = [1, 2, 3, 4, 5];
let arrayDois = [1, 2, 3, 4, 5];
let arrayTres = arrayUm.concat(arrayDois);

console.log(arrayTres);

// Exercicio 07

const par = x => x % 2 === 0
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros2.filter(par);

console.log(pares);

// Exercicio 08

const numeros3 = [3, 1, 5, 4, 2];
numeros3.sort();
console.log(numeros3);

// Exercicio 09