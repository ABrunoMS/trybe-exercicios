//   🚀 Exercício 2
//   Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.
  
//   A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". Caso num seja um número divisível apenas por 3, retorna "fizz". E caso num seja um número divisível apenas por 5, retorna "buzz". Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. Caso num não seja um número, a função retorna false.
//   Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.
  
//   Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.
  
//   Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.
  
//   Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.
  
// //   Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
module.exports = myFizzBuzz


// Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.

// function myRemove(arr, item) {
//     let newArr = [];
//     for (let index = 0; index < arr.length; index += 1) {
//       if (item !== arr[index]) {
//         newArr.push(arr[index]);
//       }
//     }
//     return newArr;
//   }

//   module.exports = myRemove
  
 


