const myRemove = require('./script')
const myFizzBuzz = require('./script')

// describe('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//     it('A função recebe [1,2,3,4],3 e retorna [1,2,4]', () => {
//       expect([1,2,4]).toStrictEqual(myRemove([1,2,3,4],3))
//     })
//   })

describe('Teste da função myFizzBuzz', () => {
    it('Executa a função myFizzBuzz(15) e verifica se o retorno é "fizzbuzz"', () => {
        expect("fizzbuzz").toBe(myFizzBuzz(15))
    })
})