const readline = require('readline-sync');

// EXERCICIO 01

// const nome = readline.question('Qual é o seu nome? ');
// const nota1 = readline.questionInt('Insira a primeira nota: ');
// const nota2 = readline.questionInt('Insira a segunda nota: ');
// const nota3 = readline.questionInt('Insira a terceira nota: ');

// let soma = nota1 + nota2 + nota3;

// console.log(`${nome}, sua média é ${soma/3}.`);

// EXERCICIO 02

// const ano = readline.question('Insira o ano: ');

// if (ano % 400 === 0){
//     console.log(`O ano de ${ano} é bissexto!`);
// }else if (ano % 4 === 0 && ano % 100 != 0 ){
//     console.log(`O ano de ${ano} é bissexto!`);
// }else {
//     console.log(`O ano de ${ano} não é bissexto!`);
// }

// EXERCICIO 03

// const valor = readline.questionInt('Insira o valor do produto: ');
// const estado = readline.question('Qual estado o produto vai ser enviado? ');

// switch (estado){
//     case 'MG':
//         console.log(`O preço final para o ${estado} é ${valor+(valor*0.07)}.`);
//         break;
//     case 'SP':
//         console.log(`O preço final para o ${estado} é ${valor+(valor*0.12)}.`);
//         break;
//     case 'RJ':
//         console.log(`O preço final para o ${estado} é ${valor+(valor*0.15)}.`);
//         break;
//     case 'MS':
//         console.log(`O preço final para o ${estado} é ${valor+(valor*0.08)}.`);
//         break;
//     default:
//         console.log(`Estado informado não está na lista.`)
// }

// EXERCICIO 04

// Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
// Faça três versões desse programa, cada uma usando uma estrutura de repetição
// diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
// programa? Por que?

// let cont = 0;
// let soma = 0;

// for (let x=0; x<= 5000; x++){
//     if (x%2===0){
//         soma += x;
//         cont++;
//     }
//     if (cont > 50){
//         break;
//     }
// }

// console.log(`A soma dos elementos é: ${soma}.`);

// let cont = 0;
// let soma = 0;
// let x = 0;

// while (cont <= 50){
//     if (x%2===0){
//         soma += x;
//         cont++;
//     }
//     x++;
// }

// console.log(`A soma dos elementos é: ${soma}.`);

// let cont = 0;
// let soma = 0;
// let x = 0;

// do {
//     if (x%2===0){
//         soma += x;
//         cont++;
//     }
//     x++;
// } while(cont <= 50);

// console.log(`A soma dos elementos é: ${soma}.`);

// EXERCICIO 05

// const N = readline.questionInt('Insira um número: ');
// let impar = [];

// for (let x=0; x <= N; x++){
//     if (x % 2 != 0){
//         impar.push(x);
//     }
// }

// console.log(...impar);

// EXERCICIO 06

// Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
// solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
// deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
// taxas devidas.

