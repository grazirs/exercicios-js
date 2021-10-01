/*funcao anonima é quando uma variavel pode armazenar uma funçao, ela em si nao tem nome.
funcao autoinvocavel IIFE, uma funcao anonima, entre parenteses, seguida por outro par de parenteses, que representa sua chamada.
callback é uma funçao passada como argumento para outra.
Array spread: uma forma de lidar separadamente com elementos. sintaxe 3 pontos: console.log(sum(...numbers));
Array rest: combina os argumentos em um array.

if, else: pode usar ==, mas no switch/case ele compara tipo e valor entao deve usar ===, o switch tbm precisa de um defaut.

for ... in: loop entre propriedades enumeraveis de um objeto.
for ... of: loop entre estruturas interaveis (arrays, strings).

while: executa instrucoes até que a condicao se torne falsa
do ... while: executa instrucoes até que a condicao se torne fals, mas a primeira execucao sempre ocorre.

Sempre que uma funcao estiver dentro de um objeto, vamos chamar de método.
this: usa dentro do método, ela retorna o objeto pai quando esta sozinha e funçao, dentro de evento ela retorna o elemento que recebeu o evento.
call e apply sao parecidos, mas no apply passa os parametros dentro de um array.
bind: clona a estrutura da funcao onde é chamada e aplica o valor do objeto passado como parametro.

Arrow function: nao faz hoisting, nao funciona metodos, nem construtor 
const helloWorld = function (){
    return 'Hello World';
}

const helloWorld = () => {
    return 'Hello World';
}

const helloWorld = () => 'Hello World';

// funçao pequena, de uma linha, nao precisa do return

const soma = (a, b) => a +b;
soma (4, 6);

// pode tbm omitir o parentese quando so eh um valor

const soma = a => a;
soma(4);
*/


//Atividade 1:


const alunos = [
    {
        nome: 'Grazi',
        nota: 9,
        turma: 'A',
    },

    {
        nome: 'Debora',
        nota: 9.5,
        turma: 'A',
    },

    {
        nome: 'Joana',
        nota: 9.1,
        turma: 'A',
    },

    {
        nome: 'Miguel',
        nota: 5,
        turma: 'A',
    },

    {
        nome: 'Jorge',
        nota: 6.1,
        turma: 'A',
    },
];

function alunosAprovados(nomeAluno, mediaFinal) {
    let aprovados = [];

    for (let i = 0; i < nomeAluno.length; i++) {

        const { nota, nome } = nomeAluno[i]; /*object destructuring*/

        if (nota >= mediaFinal) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovados(alunos, 6));

//Atividade 2:

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 26,
};

const pessoa2 = {
    nome: 'Marta',
    idade: 24,
};

const animal = {
    nome: 'doguinho',
    idade: 6,
    raça: 'srd',
};

console.log(calculaIdade.call(animal, 10));
console.log (calculaIdade.apply(pessoa2, [4]));