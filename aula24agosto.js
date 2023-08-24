// LISTA DE EXERCICIOS

// 1.

// let object = {}; // ou let object = new Object; 
// console.log(object);

// 2.

// let pessoa = {nome: "João"};
// console.log(pessoa);

// let pessoa = {};
// pessoa.nome = "joão";
// console.log(pessoa);

// 3. 

// let usuario = {idade: 27};
// console.log(usuario['idade']);
// console.log(usuario.idade);

// 4.

// let produto = {preco: 50};
// produto.preco = 75;
// console.log(produto);

// 5.

// let contato = {email: "xx@xx"}; // não tem como excluir a propriedade(email) de um objeto, ele é imutável.

// 6.

// let cliente = {};
// cliente.endereco = "Rua A, 123";
// console.log(cliente);

// 7. 

// let empresa = {departamento1: 1, departamento2: 2};
// console.log(empresa[Object.keys(empresa)[0]]);
// console.log(Object.keys(empresa)[0]);

// 8.

// let aluno = {notas: [85, 90, 78]};
// aluno.notas[1] = 95; // lembrar que o primeiro elemento é 0.
// console.log(aluno);

// 9.

// let dados = {valores: [10, 20, 30]};
// delete dados.valores[1];
// console.log(dados);

// 10.

// let objeto = {};
// objeto.titulo = "Livro";
// objeto.autor = "Maria";
// console.log(objeto);

// LISTA 2

// 1.

// const DiasDaSemana = {

//     DOMINGO: 'Domingo',
//     SEGUNDA: 'Segunda-feira',
//     TERCA: 'Terça-feira',
//     QUARTA: 'Quarta-feira',
//     QUINTA: 'Quinta-feira',
//     SEXTA: 'Sexta-feira',
//     SABADO: 'Sábado'
//     };
    
// console.log(DiasDaSemana.QUARTA); // 

// // 2.

// const inimigos = {
//     1: 'Archer',
//     2: 'Mage',
//     3: 'knight'
// };

// console.log(inimigos[1]);