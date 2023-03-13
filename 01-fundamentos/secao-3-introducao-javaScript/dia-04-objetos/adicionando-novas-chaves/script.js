// Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar?
// Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo. 

const student={

}

let addPropert = (student,key,value) => {
    student[key]=value

}

addPropert(student,'nome','Anderson Bruno')
addPropert(student,'email','anderson.bruno90@gmail.com')
addPropert(student,'telefone','(61)99999-9999')

console.log(student);