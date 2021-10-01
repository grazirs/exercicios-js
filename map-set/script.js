/* Uma coleçao de arrays no formato [chave, valor]; e pode ser interado por um loop for...of.

adicionar: .set
ler: .get
deletar: .delete

maps podem ter chaves de qualquer tipo, possuem length, sao mais faceis de interar, utilizado 
quando o valor das chaves é desconhecido, os valores tem o mesmo tipo.

set: sao estruturas que armazenam apenas valores unicos.
adiiconar: .add
ler: .has
deletar: .delete

ao inves de length usa size  e nao possui os metodos do array ( map, filter, reduce etc)
*/

//Atividade 1:

function getAdmins( map){
    let admins = [];
for([key, value] of map){
    if (value === 'Admin'){
        admins.push(key);
    }
}
return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Grazi', 'User');
usuarios.set('Joana', 'Admin');

console.log (getAdmins(usuarios))

//Atividade 2:

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (array){
    const mySet = new Set (array);

    return [...mySet]; //argumento rest
}
console.log(valoresUnicos(meuArray));
