// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.
// Copiar
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function addClientes(name) {
    if (typeof name !='string'){
        return ('Formato de nome inválido')
    }
    else {
        clientesTrybeBank.push(name)
        return clientesTrybeBank
    }
    
}

console.log(addClientes('Mara'));

function excludeClientes(name) {
    let clienteEncontrado = false
    if (typeof name === 'string'){
        for(let index = 0; index < clientesTrybeBank.length; index+=1){
            if (name === clientesTrybeBank[index]){
                clientesTrybeBank.splice(index)
                clienteEncontrado = true
                return 'Cliente excluido com sucesso.'
            }
            
        }
        if (clienteEncontrado === false){
            return 'Cliente não encontrado'
        }
    }
        else {
        return 'formato de nome inválido'
    }
}

  

console.log(excludeClientes('Mara'));
console.log(clientesTrybeBank);