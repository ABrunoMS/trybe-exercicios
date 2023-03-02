// 🚀 Lidando com arrays
// Considere esse array para realizar os próximos exercícios.

let numbers = [5, 9, , 19, 70, 8, 100, 2, 35, 27]

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// ====
//     for (let index = 0; index < numbers.length; index +=1)

// console.log(numbers[index]);
// ====


// Some todos os valores contidos no array e imprima o resultado.
// ====
// let sum = 0
// for (let index = 0; index<numbers.length; index +=1)
//     sum += numbers[index]
//     console.log(sum);
// ====

// Calcule e imprima a média aritmética dos valores contidos no array.

// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior que 20, imprima a mensagem “Valor menor ou igual a 20”.
// ====
// let sum = 0
// for (let index = 0; index<numbers.length; index +=1){
//     sum += numbers[index]
//      media=(sum/numbers.length)
// }

// if(media > 20){
//     console.log('Valor maior que 20');
// }
// else {
//     console.log('Valor menor ou igual a 20')
// }
// ====    



// Utilizando for, descubra o maior valor contido no array e imprima-o.
// ====
// higherNumber = numbers[0]

// for (let index = 1; index < numbers.length; index+=1) {
//     if(numbers[index]>higherNumber)
//      higherNumber=numbers[index]
    
// }
// console.log(higherNumber);
// ====


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let imparNumbers = 0
// for (let index = 0; index < numbers.length; index+=1) {
//     if (numbers[index] % 2 !==0) {
//         imparNumbers += 1
        
//     }
    
// }
// if (imparNumbers === 0){
//     console.log('Nenhum valor ímpar encontrado');
// }
// else {
//     console.log(imparNumbers)
// }
// ====

// Utilizando for, descubra o menor valor contido no array e imprima-o.
// let smallerNumber = numbers[0]

// for (let index = 1; index < numbers.length; index += 1){
//     if(numbers[index] < smallerNumber)
//     smallerNumber=numbers[index]
// }
// console.log(smallerNumber);
// ====

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
// let array =[]
// for(let index = 1; index <= 25; index +=1){
//     array.push(index)
// }
// console.log(array);
// ====

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

// for (let index = 0; index <array.length; index +=1)
// console.log(array[index]/2);