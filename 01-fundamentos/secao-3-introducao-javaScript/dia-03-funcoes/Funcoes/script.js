// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo


let balance = 0

function addBalance (deposit){
    balance = balance + deposit
    return balance

}

console.log(addBalance(15));

function decreaseBalance(saque) {
    balance = balance - saque
    return balance 
    
}

console.log(decreaseBalance(10))


function earnings(interest) {
    balance = balance + (balance * (interest/100))
    return balance 
    
}

console.log(earnings(10))


function division(divider) {
    balance = balance / divider
    return balance 
    
}

console.log(division(2))

