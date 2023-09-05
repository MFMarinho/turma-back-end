const readline = require('readline-sync');

const aluno1 = {
    nome: "Matheus",
    notas: [1, 2, 3],
    matricula: 1,
};

const aluno2 = {
    nome: "Paulo",
    notas: [4, 5, 6],
    matricula: 2,
};

const alunos = [];
alunos.push(aluno1);
alunos.push(aluno2);

console.log("----- CADASTRO DE ALUNOS -----");
console.log("*********** MENU *************");
console.log("0. Sair do sistema.");
console.log("1. Listar todos os alunos");
console.log("2. Inserir novo aluno");
console.log("3. Buscar Matrícula");
console.log("4. Alterar um cadastro");
console.log("5. Excluir um cadastro");
console.log("******************************");
let loop = true;

while (loop){
    let opcao = readline.questionInt("Escolha uma opção: ");
    switch (opcao){
        case 0:
            console.log("Saindo do sistema...");
            loop = false;
            break;
        case 1:
            console.log("Listando todos os alunos");
            console.log("------------------------");
            for (const a of alunos){
                let soma = 0;
                console.log(`Nome: ${a.nome}`)
                for (let i = 0; i < a.notas.length; i++){
                    console.log(`\t -Nota ${i + 1}: ${a.notas[i]}`);
                    soma += a.notas[i];
                }
                let media = soma / a.notas.length;
                console.log(`\t -Média: ${media}`);
            }
            break;
        case 2:
            let nomeAluno = readline.question("Digite o nome do aluno: ");
            let notaAluno= [];
            for (let i = 0; i < 3; i++){
                notaAluno[i] = readline.questionFloat(`Digite a note ${i+1}: `)
            }
            let matriculaAluno = alunos.length + 1;
            const aluno = {
                nome: nomeAluno,
                notas: notaAluno,
                matricula: matriculaAluno,
            }
            alunos.push(aluno);
            break;
        case 3:
            for (let i = 0; i < alunos.length; i++){
                console.log(`Nome: ${alunos[i].nome} | Matricula: ${alunos[i].matricula}`);
            };
            break;
        case 4:
            let opcao = readline.questionInt("Insira um número correspondente a matrícula: ");
            alunos[opcao-1].nome = readline.question("Insira o nome: ");
            let alterarNotaAluno= [];
            for (let i = 0; i < 3; i++){
                alterarNotaAluno[i] = readline.questionFloat(`Digite a note ${i+1}: `);
            };
            alunos[opcao-1].notas = alterarNotaAluno;
            console.log("Aluno alterado com sucesso!");
            break;
        case 5:
            let excluir = readline.questionInt("Insira um número correspondente a matrícula: ");
            alunos[excluir-1].nome = readline.question("Insira o nome: ");
        default:
            console.log("Opção inválida!");
            break;
}
}


