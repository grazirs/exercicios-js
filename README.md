# exercicios-js
Perguntas:

Sintaxe e Operadores

Atividade 1:
Crie uma função que recebe dois números como parâmetros. 
Confira se os números são iguais. 
Confira se a soma dos números é maior que 10 ou menor que 20. 
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. 
Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Variáveis e Tipos

Atividade 1: Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

Atividade 2: Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1

Funções

Atividade 1: Alunos Aprovados
Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

Atividade 2: This
Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}


Map

Atividade 1: 
Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
Atividade 2: Sets
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
Filter
Filtre e retorne todos os números pares de um array.
Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
