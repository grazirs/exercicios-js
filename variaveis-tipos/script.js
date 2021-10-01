/* var, let e const:
var pode ser declarada no global ou local, pode redeclarar, reatribuir e hoisting.
let é declarada em escopo de bloco, pode ser reatribuida, mas nao pode redeclarar e nem faz hoisting.
const é declarada em SNAKE_UPPER_CASE, escopo de bloco, n pode redeclarar, nem reatribuir e n faz hoisting
*/
var a = 1;
var b = 2;

if (a === 1) {
    var a = 11; // the scope is global
    let b = 22; // the scope is inside the if-block
    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2

//hoisting, ele leva a variavel pra cima, mesmo sem ter escrito var, ele consegue ler . Com o let e const nao funciona

numberOne = 1;
console.log(numberOne + 2);
var numberOne;
//let numberOne; nessa linha o hoisting nao funciona, pq nao aplica pra let

//exemplo const
const FIRST_NAME = 'Grazi'
console.log(FIRST_NAME);


/*empty, null e undefined

Se declarou empty significa que colocou 0 para number, '' para string, array [], objeto {}
Se declarou null, propositalmente um valor nao existe.
undefined nao existe, nao declarou



Atividade 1: Verificar um palindromo: frase ou palavra que pode ler da esquerda pra direita ou vice-versa.*/

// solution 1:
function verificaPalindromo(string) {
    if (!string) return;
    return string.split('').reverse().join('') === string;
}

console.log(verificaPalindromo('ana'));

// solution 2:
function verificaPalindromo2(string) {
    if (!string) return 'string inexistente';

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(verificaPalindromo2('gato'));

//Atividade 2:

let array = [1, 3, 4, 6, 80, 33, 23, 90];
function substituiPares(numberArray) {
    if (!numberArray) return -1;
    if (!numberArray.length) return -1;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 0) {
            console.log('Você já é zero!');
        } else if (numberArray[i] % 2 === 0 && numberArray[i] != 0) {
            console.log(`Substituindo ${numberArray[i]} por 0...`);
            numberArray[i] = 0;
        } 
    }
    return numberArray;
    }
console.log(substituiPares(array));