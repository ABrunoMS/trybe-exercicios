// Para fixar
// Faça os exercícios de fixação a seguir para consolidar os conhecimentos adquiridos! 😉

// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.
// Copiar
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
// Copiar
// [2006, 2007, 2008, 2009, 2010, 2018]
// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

const player = {
    name: 'marta',
    lastName: 'Silva',
    age: '34',
    medals: {
        golden: 2,
        silver: 3
    },
   
}
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);

player.bestInTheWord=[2006, 2007, 2008, 2009, 2010, 2018]

console.log(player);

console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWord.length} vezes.`);// não consegui acessar a chave usando['chave']

console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);