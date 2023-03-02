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


// LOGICA DE PROGRAMAÇÃO E ALGORITIMOS


// crie um algoritmo que imprima na tela o fatorial de 10

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);




// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.
// Copiar

// let word = 'tryber';

// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);




// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let biggestWord = array[0];
// let smallestWord = array[0];

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index];
//   }
// }

// for (let index = 1; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index];
//   }
// }

// console.log(biggestWord);
// console.log(smallestWord);




// Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);