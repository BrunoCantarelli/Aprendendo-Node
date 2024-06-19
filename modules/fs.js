const { error } = require('console')
const fs = require('fs')
const path = require('path')

// Criar uma pasta 
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if(error){
//         return console.log('Error: ', error)
//     }

//     console.log('Pasta criada com sucesso!')
// }) // mkdir cria uma pasta dentro do diretorio

// Criar um arquivo
fs.writeFileSync(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if(error){
        return console.log('Error: ', error)
    }
    console.log("Arquivo criado com sucesso!")
})

// Adicionar a um arquivo
fs.appendFile(path.join(__dirname, '/test', 'test.txt'), 'hello world!', (error) => {
    if(error){
        return console.log('Error: ', error)
    }

    console.log("Adicionado ao arquivo com sucesso!")
})