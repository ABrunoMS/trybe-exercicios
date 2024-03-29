// Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:


let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let deliveryPerson = order.order.delivery.deliveryPerson
  let name = order.name
  let phoneNumber = order.phoneNumber
  let street = order.address.street
  let addreesNumber = order.address.number
  let addresAp = order.address.apartment
  
    return  `Olá, ${deliveryPerson}, entrega para: ${name} Telefone: ${phoneNumber}, ${street}, Nº: ${addreesNumber}, AP: ${addresAp}`
}

customerInfo(order);

function orderModifier(order) {
    let newName = order.name = 'Luiz Silva'
    let pizzas = Object.keys(order.order.pizza)
    let drink = order.order.drinks.coke.type
    let total = order.payment.total = 50

    return `Olá, ${newName}, o valor total de seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${total}.`
 
}
console.log(orderModifier(order));

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
// De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// Modifique o nome da pessoa compradora para Luiz Silva;
// Modifique o valor total da compra para R$ 50,00.