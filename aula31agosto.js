const readline = require('readline-sync');

// EXERCICIO 11

// const ano = readline.questionInt('Insira o ano: ');
// const mes = readline.question('Insira o nome do mês (tudo minúsculo): ');

// switch (mes){
//     case 'janeiro':
//     case 'março': 
//     case 'maio':
//     case 'julho':
//     case 'agosto':
//     case 'outubro': 
//     case 'dezembro':
//         console.log(`O mês de ${mes} do ano de ${ano} possui 31 dias.`);
//         break;
//     case 'abril':
//     case 'junho':
//     case 'setembro':
//     case 'novembro':
//         console.log(`O mês de ${mes} do ano de ${ano} possui 30 dias.`);
//         break;
//     case 'fevereiro':
//         if (ano % 400 === 0){
//             console.log(`O mês de ${mes} do ano de ${ano} possui 29 dias.`);
//         }else if (ano % 4 === 0 && ano % 100 != 0 ){
//             console.log(`O mês de ${mes} do ano de ${ano} possui 29 dias.`);
//         }else {
//             console.log(`O mês de ${mes} do ano de ${ano} possui 28 dias.`);
//         }
//         break;
//     default:
//         console.log('Você digitou o nome do mês invalido, insira com inicial minuscula!');
//         break
// }

// EXERCICIO 12

let inicio = readline.question ('Digite a hora de inicio no formato (hh:mm): ');
let final = readline.question ('Digite a hora final no formato (hh:mm): ');

let horasInicio = inicio.split(":");
let 