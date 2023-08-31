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

// const diaTrabalhados = readline.questionInt('Quantos dias foram trabalhados? ');
// let total = (diaTrabalhados*30);

// console.log(`O valor que deve ser pago é de R$${total-(total*0.08)}.`)

// EXERCICIO 07

// const horarioInicial = readline.questionInt('Qual o horário de ínicio? ');
// const duracaoSegundos = readline.questionInt('Qual a duração em segundos? ');

// if (duração)

// EXERCICIO 08

// const horaNormal = readline.questionInt('Quantas horas normais foram trabalhadas no ano? ');
// const horaExtra = readline.questionInt('Quantas horas extras foram trabalhadas no ano? ');

// console.log(`O salário anual é de R$${(horaNormal*10)+(horaExtra*15)},00.`)

// EXERCICIO 09

// const number1 = readline.questionInt('Insira o primeiro número: ');
// const number2 = readline.questionInt('Insira o segundo número: ');
// const number3 = readline.questionInt('Insira o terceiro número: ');

// const array = [number1, number2, number3];
// array.sort(function(a,b){
//     if (a > b) return 1;
//     if (a < b) return -1;
//     return 0;
// });

// console.log(`A ordem crescente dos número digitados é : ${array}.`);

// EXERCICIO 10

// console.log('Lista de conversão:');
// console.log('1. de Celsius para Fahrenheit.');
// console.log('2. de Celsius para Kelvin.');
// console.log('3. de Fahrenheit para Celsius.');
// console.log('4. de Fahrenheit para Kelvin.');
// console.log('5. de Kelvin para Celsius.');
// console.log('6. de Kelvin para Fahrenheit.');

// const opcao = readline.questionInt('Insira uma das opções acima: ');
// const temp = readline.questionInt('Insira a temperatura: ');

// switch(opcao){
//     case 1:
//         let cf = temp * (9/5) + 32;
//         console.log(`A temperatura de ${temp} ºC é ${cf} ºF.`);
//         break;
//     case 2:
//         let ck = temp + 273;
//         console.log(`A temperatura de ${temp} ºC é ${ck} k.`);
//         break;
//     case 3:
//         let fc = 5*(temp - 32) / 9;
//         console.log(`A temperatura de ${temp} ºF é ${fc} ºC.`);
//         break;
//     case 4:
//         let fk = (temp + 459,67) * 5/9;
//         console.log(`A temperatura de ${temp} ºF é ${fk} k.`);
//         break;
//     case 5:
//         let kc = temp - 273;
//         console.log(`A temperatura de ${temp} k é ${kc} ºC.`);
//         break;
//     case 6:
//         let kf = (temp - 273) * 9/5 + 32;
//         console.log(`A temperatura de ${temp} k é ${kf} ºF.`);
//         break;
//     default:
//         console.log('Você escolheu uma opção inválida.')
//         break;
// }