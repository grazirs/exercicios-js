//Atividade de sintaxe e operadores
function compareNumber(num1, num2) {
    if(!num1 || !num2) return 'Defina dois numeros!'
    const primeiraFrase = criaFrase1(num1, num2);
    const segundaFrase  = criaFrase2(num1, num2);
    
    return `${primeiraFrase} ${segundaFrase}`
}

function criaFrase1 (num1, num2){
    let saoIguais = '';

    if (num1 !== num2){
        saoIguais = 'não';
    }
    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`

}
function criaFrase2 (num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }
return `A sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}
console.log(compareNumber(40,6));