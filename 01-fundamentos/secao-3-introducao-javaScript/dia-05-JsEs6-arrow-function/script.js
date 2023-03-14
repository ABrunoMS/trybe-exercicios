const ligarDesligar =(onOff)=>{
    if (onOff === 'ligado'){
        onOff = 'desligado'
    }
    else {
        onOff = 'ligado'
    }
 console.log(`O motor está ${onOff}`);
 return onOff
}

ligarDesligar('ligado')

const circleArea = (radius) => {
    const PI = 3.14
    if (typeof radius !== 'number'){
        return 'O parâmetro radius deve ser um número'
    }
    let area = PI *(radius **2)
    return `Esta é a área do circulo ${area}`
}

console.log(circleArea('um'));

const longestWord = (text) =>{
    const wordArray = text.split(' ')
    let maxlength = 0
    let result = ''

    for (const word of wordArray){
        if(word.length > maxlength){
            maxlength = word.length
            result = word
        }
    }
 return result

}

console.log(longestWord('O rato roeu a roupa do rei de Roma'));