
// function exibirSaudacao(nome, saudacao= 'Hello'){
//     console.log(`${saudacao}, ${nome}`);
// }

// exibirSaudacao("Matheus","Bom dia");

// EXERCICIO 01

// function saudacao(nome= 'pessoa'){
//     console.log(`Olá, ${nome}!`);
// }

// saudacao();

// EXERCICIO 02

// function calculadora(num1,num2,operacao= 'adição') {
//     switch (operacao){ 
//         case 'adição': 
//             console.log(`${num1+num2}`)
//             break;
//         case 'subtração':
//             console.log(`${num1-num2}`);
//             break;
//         case 'multiplicação':
//             console.log(`${num1*num2}`);
//             break;
//         case 'divisão':
//             console.log(`${num1/num2}`);
//             break;
       
//     }  
    
// }
// calculadora(8,4);

// EXERCICIO 03

// function contagemRegressiva(inicio= 10){
//     while (inicio >= 1){
//         console.log(inicio);
//         inicio--;
//         }
// }

// contagemRegressiva();

// EXERCICIO 04

// function apresentacao(nome= "Alguém", idade= "x", profissao= "desempregado"){
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}.`)
// }

// apresentacao("Matheus", 27);

// EXERCICIO 05


// function mensagemPersonalizada(texto, estilo= 'normal'){

//     switch (estilo){
//         case 'normal':
//             console.log(texto);
//             break;
//         case 'negrito':
//             console.log(texto.bold());
//             break;
//         case 'italico':
//             console.log(texto.italics());
//             break;
//     }
// }

// mensagemPersonalizada("Olá mundo!", 'negrito');


// Função com return

// function criarMensagemDeSaudacao(nome, saudacao= 'Hello'){
//     const mensagem = `${saudacao}, ${nome}!`;
//     return mensagem;
// }

// let mensagemDeSaudacao = criarMensagemDeSaudacao("Matheus");
// console.log(mensagemDeSaudacao);

// EXERCICIO 01

// function somar(num1,num2){
//     const somando = `${num1+num2}`;
//     return somando;
// }

// let operacao = somar(1,2);
// console.log(operacao);

// EXERCICIO 02

// function ehPar(num){
//     if (num % 2 === 0){
//         const resposta = true;
//         return resposta;
//     } else {
//         const resposta = false;
//         return resposta;
//     }
// }

// let mensagem = ehPar(3);
// console.log(mensagem);

// EXERCICIO 03

// function maiorNumero(num1,num2,num3){
//     const maior = Math.max(num1,num2,num3);
//     return maior;
// }

// let maior = maiorNumero(3,11,8);
// console.log(maior);

// EXERCICIO 04

// function calcularIMC(peso,altura){
//     return peso/(altura^2);
// }

// let matheus = calcularIMC(57,1.70);
// console.log(matheus);