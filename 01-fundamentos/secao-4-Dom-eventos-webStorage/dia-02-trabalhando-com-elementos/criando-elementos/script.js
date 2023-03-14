const pai = document.getElementById('pai')

const irmao = document.createElement('section')
irmao.id = ('irmao')
pai.appendChild(irmao)

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEta')

const filho1 = document.createElement('section')
filho1.id = ('filhoElementoOndevoceEsta')
elementoOndeVoceEsta.appendChild(filho1)

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho'); 

const filhoPrimeiroFilhoDoFilho = document.createElement('section'); 
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho); // 


const terceiroFilho = filhoPrimeiroFilhoDoFilho
  .parentElement 
  .parentElement 
  .nextElementSibling; 
console.log(terceiroFilho);