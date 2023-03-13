

// Com base neste objeto, faça os exercícios a seguir.


// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

// Copiar
// Bem-vinda, Margarida


// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// // };

// console.log('Bem vinda',info.personagem);

// // 2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

// // Copiar
// // {
// //   personagem: 'Margarida',
// //   origem: 'Pato Donald',
// //   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// //   recorrente: 'Sim'
// // }

// info.recorrente = 'Sim'


// // 3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

// // Copiar
// // personagem
// // origem
// // nota
// // recorrente

// for(let key in info){
//     console.log(key);
// }


// // 4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:

// // Copiar
// // Margarida
// // Pato Donald
// // Namorada do personagem principal nos quadrinhos do Pato Donald
// // Sim




// for(let key in info){
//     console.log(info[key]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:

// Copiar
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for(let key in info){
    if 
    ( key === 'recorrente'&&
      info[key] === 'sim'  &&
      info2[key] === 'sim'
    ){
        console.log('Ambos recorrente');
    }
    else {
        info[key] + ' ' +info2[key]
    }
    
}
console.log(`${info[key]} e ${info2[key]}`);


