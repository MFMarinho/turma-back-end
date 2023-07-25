let primeiraCarta = 11;
let segundaCarta = 9;
let somaDasCartas = primeiraCarta + segundaCarta;

let bancaUm = 1;
let bancaDois = 3;
let bancaTres = 5;
let bancaQuatro = 10;
let somaBanca = bancaUm + bancaDois + bancaTres + bancaQuatro;

if (somaDasCartas > 21){
    console.log("Você perdeu!");
    console.log("Seu valor foi " + somaDasCartas);
} else if (somaBanca > 21 && somaDasCartas > somaBanca){
    console.log("Você Ganhou!");
    console.log("Seu valor foi " + somaDasCartas);
} else {
    console.log("Você Perdeu!");
    console.log("Seu valor foi " + somaDasCartas);
}